import { GameScene } from "../scenes/GameScene";
import { Character } from "./Character";
import { Bullet } from "./Bullet";
import { EnemyBullet } from "./EnemyBullet";
import { interpolateColor } from "../utils";

const HURT_DURATION = 0.3;
const SHOOTING_TIMER = 2.7;
const DEATH_DURATION = 3.0;


export class Boss extends Character {
	public scene: GameScene;

	// Graphics
	private sprite: Phaser.GameObjects.Sprite;
	// private gem: Phaser.GameObjects.Sprite;
	private light: Phaser.GameObjects.PointLight;
	private graphics: Phaser.GameObjects.Graphics;

	// Movement
	public velocity: Phaser.Math.Vector2;
	public facing: Phaser.Math.Vector2; // Used to determine throwing dir
	public following: any = null;
	private border: { [key: string]: number };

	// Shooting
	public shootTimer: number;

	public moveTimer: number;

	// Collision
	private bodyAreas: Phaser.Geom.Circle[];
	private weakAreas: Phaser.Geom.Circle[];

	private goalPoints: Phaser.Math.Vector2[];

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y, dayTime);

		// Create player sprite
		const size = 80;
		this.sprite = scene.add.sprite(0, 0, "boss", 0);
		this.sprite.setFrame(this.dayTime ? 0 : 1);
		this.sprite.setScale(0.3);
		this.add(this.sprite); // Attach sprite to the Player-component

		// this.gem = scene.add.sprite(0, 0, "gem", 0);
		// this.gem.setBlendMode(Phaser.BlendModes.SCREEN);
		// this.add(this.gem); // Attach sprite to the Player-component

		const colors = [0xde7c70, 0x63c446, 0x8987ff, 0xe070b2];
		this.light = scene.add.pointlight(-28, 0, colors[0], 80, 1.0, 0.05);
		this.add(this.light);

		// Animation
		// idle 0
		// charge 4

		// Debug graphics
		this.graphics = scene.add.graphics();
		// this.graphics.setVisible(false);
		this.add(this.graphics);

		// Movement
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.facing = new Phaser.Math.Vector2(0, 1);
		this.border = {
			left: 0.2*scene.W + size/2,
			right: 0.8*scene.W + size/2,
			top: size/2,
			bottom: scene.H - size/2,
		};
		this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG);

		this.shootTimer = 0;
		this.health = 5;

		this.moveTimer = 0;

		this.bodyAreas = [
			new Phaser.Geom.Circle( 0,   0, 70), // Head
			// new Phaser.Geom.Circle( -5,   0, 25), // Head
			// new Phaser.Geom.Circle( 35,   0, 15), // Nose
			// new Phaser.Geom.Circle(-30, -22, 10), // Left Horn Bottom
			// new Phaser.Geom.Circle(-45, -25,  5), // Left Horn Mid
			// new Phaser.Geom.Circle(-55, -20,  5), // Left Horn Top
			// new Phaser.Geom.Circle(-30,  22, 10), // Right Horn Bottom
			// new Phaser.Geom.Circle(-45,  25,  5), // Right Horn Mid
			// new Phaser.Geom.Circle(-55,  20,  5), // Right Horn Bottom
		];
		this.weakAreas = [
			new Phaser.Geom.Circle(-30, 0, 15), // Back of head
		];

		this.goalPoints = [];
		for (let i=-1; i<2; i++) {
			for (let j=-1; j<2; j++) {
				this.goalPoints.push(
					new Phaser.Math.Vector2(this.x + i*170, this.y + j*90)
				);
			}
		}
	}

	update(time: number, delta: number) {
		// Movement

		if (this.alive) {

			let target = new Phaser.Math.Vector2();
			if (this.following) {
				target.add(this.following);
				target.subtract(this);
			}
			target.normalize();

			let dot = this.facing.dot(target);
			let boost = -0.05 * Math.min(dot, 0);
			const speed = 0.06;
			target.scale(speed + boost);

			this.facing.add(target)
			this.facing.normalize()

			// Set direction
			this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG);

			// Set direction
			//this.setAngle(target.angle() * Phaser.Math.RAD_TO_DEG - 90);
			//this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG - 90);


			// Shooting Bullets
			this.shootTimer += delta/1000;
			if (this.shootTimer > SHOOTING_TIMER/100) {
				this.shootTimer = 0;

				let pos = this;
				let dir = this.facing.clone();
				dir.setLength(150);
				// const angle = 14;

				let angle = 45 * Math.sin(8*time/1000);
				dir.rotate(angle * Phaser.Math.DEG_TO_RAD);
				this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate( -2*angle * Phaser.Math.DEG_TO_RAD);
				// this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate(angle * Phaser.Math.DEG_TO_RAD);
				// this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate(angle * Phaser.Math.DEG_TO_RAD);
				// this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate(angle * Phaser.Math.DEG_TO_RAD);
				// this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate(angle * Phaser.Math.DEG_TO_RAD);
				// this.emit("shoot", this.dayTime, pos, dir);
			}


			this.moveTimer -= delta/1000;
			if (this.moveTimer <= 0) {
				this.moveTimer = 4 + 8 * Math.random();

				let goal = Phaser.Math.RND.pick(this.goalPoints);
				// goal.copy(this.goal);

				this.scene.tweens.add({
					targets: this,
					x: { from: this.x, to: goal.x },
					y: { from: this.y, to: goal.y },
					ease: 'Cubic.InOut',
					duration: 3000 + 1000 * (this.moveTimer-3) * Math.random()
				});
			}
		}

		// Hurt animation
		this.hurtTimer -= delta/1000;
		if (this.hurtTimer > 0 || !this.alive) {
			let blink = (Math.sin(50*time/1000) > 0);
			this.sprite.setTint(blink ? 0xFF7777 : 0xFFFFFF);
			// this.gem.setTint(blink ? 0xFFFFFF : 0xFF0000);
			this.sprite.setAlpha(0.75);
			// this.gem.setAlpha(0.75);
			this.sprite.setOrigin(0.5, 0.5 + 0.01 * Math.sin(35*time/1000));
			// this.gem.setOrigin(0.5, 0.5 + 0.02 * Math.sin(35*time/1000));
		}
		else {
			this.sprite.setTint(0xFFFFFF);
			this.sprite.setAlpha(1);
			this.sprite.setOrigin(0.5, 0.5);

			const k = Math.pow(0.5 + 0.5 * Math.sin(6*time/1000), 2);
			// this.gem.setTint(interpolateColor(0xFFFFFF, 0xAAAAAA, k));
			// this.gem.setScale(1.0 + 0.05 * k);
			// this.gem.setAlpha(1.0 + 0.4*k);
			// this.gem.setOrigin(0.5, 0.5);
		}

		// Check if dead
		if (!this.alive) {
			this.deathTimer += delta/1000;
			// this.gem.setVisible(false);
			this.light.setVisible(false);
			this.setScale(1 - 0.5 * this.deathTimer / DEATH_DURATION);
			this.setAlpha(1 - this.deathTimer / DEATH_DURATION);
			if (this.deathTimer > DEATH_DURATION) {
				this.destroy();
			}
		}

		// Debug
		this.graphics.clear();
		this.bodyAreas.forEach((circle: Phaser.Geom.Circle) => {
			this.graphics.lineStyle(1, 0x00FF00, 0.5);
			this.graphics.strokeCircleShape(circle);
		});
		this.weakAreas.forEach((circle: Phaser.Geom.Circle) => {
			this.graphics.lineStyle(1, 0x0000FF, 0.5);
			this.graphics.strokeCircleShape(circle);
		});
	}

	insideBody(bullet: Bullet): boolean {
		return this.bodyAreas.some((circle: Phaser.Geom.Circle) => {
			return this.checkCollision(circle, bullet);
		});
	}

	insideWeakSpot(bullet: Bullet): boolean {
		return this.weakAreas.some((circle: Phaser.Geom.Circle) => {
			return this.checkCollision(circle, bullet);
		});
	}
}
