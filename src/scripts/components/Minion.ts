import { GameScene } from "../scenes/GameScene";
import { Enemy } from "./Enemy";
import { EnemyMovement, EnemyPatterns } from "../interfaces";


export class Minion extends Enemy {
	// public goal: Phaser.Math.Vector2;

	constructor(scene: GameScene, x: number, y: number, type: string, spawnTime: number, movement: EnemyMovement, patterns: EnemyPatterns) {
		let dayTime = (type == "small_angel");
		super(scene, x, y, dayTime, spawnTime, movement, patterns);

		// this.goal = new Phaser.Math.Vector2(this.x, this.y);

		// this.y = -100;

		this.sprite.setTexture(type);
		this.sprite.setScale(0.35);
		this.bodyAreas = [ new Phaser.Geom.Circle( 0, 0, 30) ];
	}

	/*
	update(time: number, delta: number, barTime: number, barDelta: number) {
		super.update(time, delta, barTime, barDelta);

		if (this.alive) {
			this.goal.x = this.start.x + 100 * Math.sin(time+this.spawnBar);
			this.goal.y = this.start.y + 50 * Math.sin(2*time+this.spawnBar);

			this.x += (this.goal.x - this.x) * delta;
			this.y += (this.goal.y - this.y) * delta;
		}
	}
	*/
}
