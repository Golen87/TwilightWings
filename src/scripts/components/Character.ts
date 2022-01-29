import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { interpolateColor } from "../utils";

const HURT_DURATION = 0.7;
const DEATH_DURATION = 3.0;


export class Character extends Phaser.GameObjects.Container {
	public scene: GameScene;

	public dayTime: boolean;

	// Health
	protected health: number;
	protected hurtTimer: number;
	protected deathTimer: number;


	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y);
		this.scene = scene;
		scene.add.existing(this);

		// Day
		this.dayTime = dayTime;

		// Health
		this.health = 3;
		this.hurtTimer = 0;
		this.deathTimer = 0;
	}

	checkCollision(circle: Phaser.Geom.Circle, bullet: Bullet): boolean {
		let point = new Phaser.Math.Vector2(circle.x, circle.y);
		point.rotate(this.angle * Phaser.Math.DEG_TO_RAD);
		point.add(this);

		let dist = Phaser.Math.Distance.BetweenPoints(point, bullet);
		return (dist < circle.radius);
	}

	damage() {
		// this.health -= 0.01;
		this.hurtTimer = HURT_DURATION;

		if (this.health <= 0) {
			this.emit("defeated");
		}
	}

	get alive() {
		return this.health > 0;
	}
}
