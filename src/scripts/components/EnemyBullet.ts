import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { Character } from "./Character";

export class EnemyBullet extends Bullet {
	constructor(scene: GameScene) {
		super(scene);

		this.sprite.setTexture("bullet");
		this.sprite.setScale(0.18);
	}
}
