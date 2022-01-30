import { GameScene } from "../scenes/GameScene";
import { Enemy } from "./Enemy";


export class Boss extends Enemy {
	public moveTimer: number;

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y, dayTime);

		this.sprite.setTexture("boss");

		this.moveTimer = 0;
	}

	update(time: number, delta: number) {
		super.update(time, delta);

		if (this.alive) {

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
	}
}
