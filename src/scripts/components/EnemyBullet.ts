import { GameScene } from "../scenes/GameScene";
import { Bullet } from "./Bullet";
import { Character } from "./Character";

export class EnemyBullet extends Bullet {
	public glow: Phaser.GameObjects.Sprite;

	constructor(scene: GameScene) {
		super(scene);

		this.radius = 6;

		this.sprite.setTexture("bullet_core");
		// this.sprite.setScale(2*this.radius / this.sprite.width);
		this.velocity.reset();

		this.glow = scene.add.sprite(this.x, this.y, "bullet_glow", 0);
		// this.glow.setScale(128/44 * 2*this.radius / this.glow.width);
		this.glow.setOrigin(0.5);

		this.alpha = 0;
		this.glow.alpha = 0;
	}

	spawn(dayTime: boolean, origin: Phaser.Math.Vector2, velocity: Phaser.Math.Vector2, radius: number) {
		super.spawn(dayTime, origin, velocity, radius);

		this.glow.setVisible(true);
		this.glow.setFrame(dayTime ? 0 : 1);
		this.glow.setScale(128/44 * 2*radius / this.glow.width);
	}

	update(time: number, delta: number) {
		super.update(time, delta);

		this.glow.x = this.x;
		this.glow.y = this.y;
		this.glow.alpha = 1 - 3 * (1 - this.alpha);
	}

	setTint(color: number) {
		this.sprite.setTint(color);
	}

	kill() {
		super.kill();
		this.glow.setVisible(false);
	}
}
