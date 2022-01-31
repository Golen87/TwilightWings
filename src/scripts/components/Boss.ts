import { GameScene } from "../scenes/GameScene";
import { Enemy } from "./Enemy";


export class Boss extends Enemy {
	public moveTimer: number;
	public goal: Phaser.Math.Vector2;
	public goalPoints: Phaser.Math.Vector2[];
	private appearScale: number;

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y, dayTime);

		this.sprite.setTexture("boss");

		this.moveTimer = 0;

		this.goal = new Phaser.Math.Vector2(this.x, this.y);
		this.goalPoints = [];
		for (let i=-2; i<3; i++) {
			for (let j=0; j<1; j++) {
				this.goalPoints.push(
					new Phaser.Math.Vector2(this.x + i*75, this.y + j*90)
				);
			}
		}

		this.deathDuration = 3;

		this.setScale(0.5);
		this.appearScale = 0.5;
	}

	update(time: number, delta: number) {
		super.update(time, delta);

		if (this.alive) {

			this.appearScale += 2 * (1 - this.appearScale) * delta/1000;
			this.setScale(
				this.appearScale - 0.06 * this.hurtEase,
				this.appearScale - 0.14 * this.hurtEase);

			this.moveTimer -= delta/1000;
			if (this.moveTimer <= 0) {
				this.moveTimer = 3 + 3 * Math.random();

				this.goal.copy(Phaser.Math.RND.pick(this.goalPoints));
			}

			let gx = this.goal.x + 80 * Math.sin(1.2*time/1000);
			let gy = this.goal.y + 40 * Math.sin(1.8*time/1000);

			this.x += (gx - this.x) * delta/1000;
			this.y += 2 * (gy - this.y) * delta/1000;


		}
	}
}
