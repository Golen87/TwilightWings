import { GameScene } from "../scenes/GameScene";
import { Enemy } from "./Enemy";
import { interpolateColor } from "../utils";


export class Boss extends Enemy {
	public moveTimer: number;
	public goal: Phaser.Math.Vector2;
	public goalPoints: Phaser.Math.Vector2[];
	private appearScale: number;

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean, spawnBar: number) {
		super(scene, x, y, dayTime, spawnBar);

		this.sprite.setTexture("boss");
		this.sprite.setOrigin(0.5, 0.4);

		// this.light = scene.add.pointlight(0, 0, 0xffeeaa, 200, 0.4, 0.05);
		// this.add(this.light);
		// this.sendToBack(this.light);
		this.light.radius = 200;
		this.light.intensity = 0.0;

		this.moveTimer = 0;

		this.goal = new Phaser.Math.Vector2(this.x, this.y);
		this.goalPoints = [];
		for (let i=-2; i<3; i++) {
			for (let j=0; j<1; j++) {
				this.goalPoints.push(
					new Phaser.Math.Vector2(this.x + i*50, this.y + j*90)
				);
			}
		}

		this.deathDuration = 3;

		this.setScale(0.5);
		this.appearScale = 0.5;
	}

	update(time: number, delta: number, barTime: number, barDelta: number) {
		super.update(time, delta, barTime, barDelta);

		if (this.alive) {

			this.appearScale += 2 * (1 - this.appearScale) * delta;
			this.light.intensity += 2 * (1.0 - this.appearScale) * delta;

			this.setScale(
				this.appearScale - 0.06 * this.hurtEase,
				this.appearScale - 0.14 * this.hurtEase);
			this.sprite.setTint(interpolateColor(
				0xFFFFFF, 0xFFCCCC, this.hurtEase));

			this.moveTimer -= delta;
			if (this.moveTimer <= 0) {
				this.moveTimer = 5 + 3 * Math.random();

				this.goal.copy(Phaser.Math.RND.pick(this.goalPoints));
			}

			let gx = this.goal.x + 60 * Math.sin(0.5*1.2*time);
			let gy = this.goal.y + 30 * Math.sin(0.5*1.8*time);

			this.x += (gx - this.x) * delta;
			this.y += 2 * (gy - this.y) * delta;

			// this.light.color = Phaser.Display.Color.ValueToColor(interpolateColor(0xff5500, 0xffff99, this.healthPerc));
		}
	}

	center() {
		this.goal.copy(this.start);
	}
}
