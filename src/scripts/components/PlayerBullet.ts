import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { Character } from "./Character";

export class PlayerBullet extends Bullet {
	constructor(scene: GameScene) {
		super(scene);

		this.sprite.setTexture("feather");
	}

	update(time: number, delta: number) {
		super.update(time, delta);

		let elapsed = time - this.movementProps.spawnTime;
		let introBounce = (elapsed < 0.125) ? Phaser.Math.Easing.Sine.In(8*elapsed) : 1;
		this.rescale(introBounce);
	}
}
