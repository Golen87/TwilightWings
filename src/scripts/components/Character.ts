import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { interpolateColor } from "../utils";

const HURT_DURATION = 0.7;

export class Character extends Phaser.GameObjects.Container {
	public scene: GameScene;

	public dayTime: boolean;

	// Health
	public maxHealth: number;
	public health: number;
	protected hurtTimer: number;
	protected hurtEase: number;
	protected deathTimer: number;
	protected deathDuration;

	public facing: Phaser.Math.Vector2;

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y);
		this.scene = scene;
		scene.add.existing(this);

		// Day
		this.dayTime = dayTime;

		// Health
		this.maxHealth = 3;
		this.health = 3;
		this.hurtTimer = 0;
		this.hurtEase = 0;
		this.deathTimer = 0;
		this.deathDuration = 1;

		this.facing = new Phaser.Math.Vector2();
	}

	checkCollision(circle: Phaser.Geom.Circle, bullet: Bullet): boolean {
		let point = new Phaser.Math.Vector2(circle.x, circle.y);
		point.rotate(this.angle * Phaser.Math.DEG_TO_RAD);
		point.add(this);

		let dist = Phaser.Math.Distance.BetweenPoints(point, bullet);
		return dist < 0.6 * circle.radius + 0.8 * bullet.radius;
	}

	damage(amount: number = 1) {
		this.health -= amount;
		this.hurtTimer = HURT_DURATION;
		this.hurtEase = 0.25 * amount;

		if (this.health <= 0) {
			this.emit("death");
		}
	}

	setHealth(health: number) {
		this.maxHealth = health;
		this.health = health;
	}

	getPositionAt(time: number) {
		return { x: 0, y: 0 };
	}

	get alive() {
		return this.health > 0;
	}

	get healthPerc() {
		return Math.max(0, this.health / this.maxHealth);
	}

	get pos(): Phaser.Math.Vector2 {
		return new Phaser.Math.Vector2(this.x, this.y);
	}

	get dir(): number {
		return this.facing.angle();
	}

	get spawnTime(): number {
		return 0;
	}
}
