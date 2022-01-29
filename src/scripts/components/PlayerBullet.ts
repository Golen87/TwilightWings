import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { Character } from "./Character";

export class PlayerBullet extends Bullet {
	constructor(scene: GameScene) {
		super(scene);

		this.sprite.setTexture("feather");
		this.sprite.setScale(0.6);
	}
}
