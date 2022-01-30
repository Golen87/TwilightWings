import { GameScene } from "../scenes/GameScene";
import { Enemy } from "./Enemy";


export class Minion extends Enemy {
	public start: Phaser.Math.Vector2;
	public goal: Phaser.Math.Vector2;

	constructor(scene: GameScene, x: number, y: number, type: string) {
		let dayTime = (type == "small_angel");
		super(scene, x, y, dayTime);

		this.start = new Phaser.Math.Vector2(this.x, this.y);
		this.goal = new Phaser.Math.Vector2(this.x, this.y);

		this.y = -100;

		this.sprite.setTexture(type);
		this.sprite.setScale(0.35);
		this.bodyAreas = [ new Phaser.Geom.Circle( 0, 0, 30) ];
	}

	update(time: number, delta: number) {
		super.update(time, delta);

		this.goal.x = this.start.x + 100 * Math.sin(time/1000);
		this.goal.y = this.start.y + 50 * Math.sin(2*time/1000);

		this.x += 0.03 * (this.goal.x - this.x);
		this.y += 0.03 * (this.goal.y - this.y);
	}
}
