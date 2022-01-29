import { GameScene } from "../scenes/GameScene";


export class Bullet extends Phaser.GameObjects.Container {
	public scene: GameScene;
	public dayTime: boolean;

	public sprite: Phaser.GameObjects.Sprite;
	protected light: Phaser.GameObjects.PointLight;

	public velocity: Phaser.Math.Vector2;
	public facing: Phaser.Math.Vector2;

	public movementFunction: (time: number) => void;

	constructor(scene: GameScene) {
		super(scene, 0, 0);
		this.scene = scene;
		scene.add.existing(this);

		this.dayTime = true;
		this.active = false;
		this.visible = false;

		this.velocity = new Phaser.Math.Vector2();
		this.facing = new Phaser.Math.Vector2();

		// Do this through graphics instead
		// this.light = scene.add.pointlight(0, 0, 0xe070b2, 30, 0.3, 0.05);
		// this.add(this.light);

		// Create bullet sprite
		this.sprite = scene.add.sprite(0, 0, "", 0);
		this.sprite.setOrigin(0.5); // Center pivot, for rotation
		this.add(this.sprite); // Attach sprite to the Bullet-component
	}

	spawn(dayTime: boolean, origin: Phaser.Math.Vector2, velocity: Phaser.Math.Vector2) {
		this.active = true;
		this.visible = true;
		this.x = origin.x;
		this.y = origin.y;
		this.dayTime = dayTime;
		this.velocity.copy(velocity);
		this.sprite.setFrame(this.dayTime ? 0 : 1);
	}

	update(time: number, delta: number) {
		// Movement
		this.x += this.velocity.x * 0.01667;// * delta/1000;
		this.y += this.velocity.y * 0.01667;// * delta/1000;

		if (this.movementFunction) {
			this.movementFunction(time);
		}

		// Border collision
		if (this.x < 0.26 * this.scene.W - 10 ||
			this.x > 0.74 * this.scene.W + 10 ||
			this.y < 0 - 10 ||
			this.y > this.scene.H + 10) {
			this.kill();
		}

		if (this.velocity.x != 0 || this.velocity.y != 0) {
			this.facing.copy(this.velocity);
			this.facing.normalize();
		}

		// Set direction
		this.setAngle(this.facing.angle() * Phaser.Math.RAD_TO_DEG);
	}

	kill() {
		this.active = true;
		this.visible = true;
	}
}
