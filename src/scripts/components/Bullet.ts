import { GameScene } from "../scenes/GameScene";
import { Character } from "./Character";
import { Enemy } from "./Enemy";
import { Point, BulletParams, BulletMovement, BulletMovementProps } from "../interfaces";
// import { MovementFunction } from "../types";


export class Bullet extends Phaser.GameObjects.Container {
	public scene: GameScene;
	public dayTime: boolean;

	protected fScale: number; // Sprite scaling
	protected pScale: number; // Previous scale
	public sprite: Phaser.GameObjects.Sprite;
	protected light: Phaser.GameObjects.PointLight;

	public radius = 1;
	public velocity: Phaser.Math.Vector2;
	public prev: Phaser.Math.Vector2;
	public facing: Phaser.Math.Vector2;

	public movementFunction: BulletMovement;
	protected movementProps: BulletMovementProps;

	constructor(scene: GameScene) {
		super(scene, 0, 0);
		this.scene = scene;
		scene.add.existing(this);

		this.dayTime = true;
		this.active = false;
		this.visible = false;

		this.velocity = new Phaser.Math.Vector2();
		this.prev = new Phaser.Math.Vector2();
		this.facing = new Phaser.Math.Vector2();

		// Do this through graphics instead
		// this.light = scene.add.pointlight(0, 0, 0xe070b2, 30, 0.3, 0.05);
		// this.add(this.light);

		// Create bullet sprite
		this.fScale = 1.0;
		this.sprite = scene.add.sprite(0, 0, "", 0);
		this.sprite.setOrigin(0.5); // Center pivot, for rotation
		this.add(this.sprite); // Attach sprite to the Bullet-component
	}

	// spawn(dayTime: boolean, origin: Phaser.Math.Vector2, facing: Phaser.Math.Vector2, speed: number, radius: number, movementFunction: MovementFunction, time: number) {
	spawn(params: BulletParams, owner: Character, swapDayTime: boolean) {
		this.active = true;
		this.visible = true;
		this.dayTime = owner.dayTime; // FIX
		this.radius = params.radius;

		if (swapDayTime)
			this.dayTime = !this.dayTime;
		this.sprite.setFrame(this.dayTime ? 0 : 1);

		// this.facing.copy(facing);
		this.rescale(0);
		// this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG);

		let speed = params.speed;
		let angle = params.angle * Phaser.Math.DEG_TO_RAD;

		let originX = params.originX/100 * (0.74 - 0.26) * this.scene.W;
		let originY = params.originY/100 * this.scene.H;
		let offsetX = params.offsetX;
		let offsetY = params.offsetY;

		if (params.fromEnemy) {
			let pos = owner.getPositionAt(params.time);
			originX += pos.x;
			originY += pos.y;
		}
		else {
			originX += 0.26 * this.scene.W;
			originY += 0;
		}

		if (params.aimPlayer) {
			angle += Phaser.Math.Angle.BetweenPoints({x:originX, y:originY}, this.scene.player);
		}

		// originX += offsetX;
		// originY += offsetY;
		let offsetRadius = Math.sqrt(offsetX*offsetX + offsetY*offsetY);
		let offsetAngle = angle + Math.atan2(offsetX, offsetY);

		this.movementFunction = params.movement;
		this.movementProps = {
			spawnTime: params.time + owner.spawnTime,
			speed,
			angle,

			originX,
			originY,
			facingX: Math.cos(angle),
			facingY: Math.sin(angle),

			offsetAngle,
			offsetRadius,
			offsetX: offsetRadius * Math.cos(offsetAngle),
			offsetY: offsetRadius * Math.sin(offsetAngle),
		};

		this.movementFunction(this, 0, this.movementProps);
		this.prev.set(this.x, this.y);
	}

	update(time: number, delta: number, barTime: number, barDelta: number) {
		let elapsed = barTime - this.movementProps.spawnTime;

		let introBounce = (elapsed < 0.25) ? Phaser.Math.Easing.Back.Out(4*elapsed, 4.0) : 1;
		this.rescale(introBounce);

		let pos = this.movementFunction(this, elapsed, this.movementProps);
		this.x = pos.x;
		this.y = pos.y;

		// Border collision
		if (this.x < 0.26 * this.scene.W - 4*this.radius && this.facing.x < 0 ||
			this.x > 0.74 * this.scene.W + 4*this.radius && this.facing.x > 0 ||
			this.y < 0 - 2*this.radius && this.facing.y < 0 ||
			this.y > this.scene.H + 2*this.radius && this.facing.y > 0) {
			this.kill();
		}

		// Set direction
		// if (this.velocity.x != 0 || this.velocity.y != 0) {
			// this.facing.copy(this.velocity);
			// this.facing.normalize();
		// }
		this.facing.set(
			this.x - this.prev.x,
			this.y - this.prev.y
		);
		this.prev.set(this.x, this.y);

		if (this.facing.x != 0 || this.facing.y != 0) {
			this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG);
		}
	}

	rescale(scale: number) {
		if (this.pScale != scale) {
			this.sprite.setScale(scale * this.fScale * 2*this.radius / this.sprite.width);
			this.pScale = scale;
		}
	}

	kill() {
		this.setActive(false);
		this.setVisible(false);
	}
}
