import { GameScene } from "../scenes/GameScene";
import { Character } from "./Character";
import { Bullet } from "./Bullet";
import { EnemyBullet } from "./EnemyBullet";
import { interpolateColor } from "../utils";

const HURT_DURATION = 0.3;
const SHOOTING_TIMER = 2.7;
const DEATH_DURATION = 0.4;


export class Enemy extends Character {
	public scene: GameScene;

	// Graphics
	protected sprite: Phaser.GameObjects.Sprite;
	protected light: Phaser.GameObjects.PointLight;
	protected graphics: Phaser.GameObjects.Graphics;

	// Movement
	public velocity: Phaser.Math.Vector2;
	protected border: { [key: string]: number };

	// Shooting
	protected patterns: any[];

	// Collision
	protected bodyAreas: Phaser.Geom.Circle[];
	// protected weakAreas: Phaser.Geom.Circle[];

	protected goalPoints: Phaser.Math.Vector2[];

	constructor(scene: GameScene, x: number, y: number, dayTime: boolean) {
		super(scene, x, y, dayTime);

		// Create player sprite
		const size = 80;
		this.sprite = scene.add.sprite(0, 0, "", 0);
		this.sprite.setFrame(this.dayTime ? 0 : 1);
		this.sprite.setScale(0.25);
		this.add(this.sprite); // Attach sprite to the Player-component

		// Debug graphics
		this.graphics = scene.add.graphics();
		// this.graphics.setVisible(false);
		this.add(this.graphics);

		// Movement
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.facing.set(0, 1);
		this.border = {
			left: 0.2*scene.W + size/2,
			right: 0.8*scene.W + size/2,
			top: size/2,
			bottom: scene.H - size/2,
		};

		this.patterns = [];

		this.maxHealth = 200;
		this.health = this.maxHealth;

		this.bodyAreas = [ new Phaser.Geom.Circle( 0, 0, 70) ];

		this.goalPoints = [];
		for (let i=-1; i<2; i++) {
			for (let j=0; j<1; j++) {
				this.goalPoints.push(
					new Phaser.Math.Vector2(this.x + i*170, this.y + j*90)
				);
			}
		}
	}

	update(time: number, delta: number) {
		// Movement

		if (this.alive) {

			let target = new Phaser.Math.Vector2();
			target.add(this.scene.player);
			target.subtract(this);
			target.normalize();

			this.facing.copy(target);


			// PHASE CHANGE: this.complete


			// Bullet patterns

			for (let pattern of this.patterns) {
				// pattern.index
				// pattern.timer
				// pattern.loop

				pattern.timer -= delta/1000;
				let limit = 10;
				while (pattern.loop.length > 0 && pattern.timer < 0 && limit-- > 0) {

					pattern.timer = pattern.loop[pattern.index].wait;

					let p = pattern.loop[pattern.index];
					let pos = this.pos;
					if (p.x !== undefined && p.y !== undefined) {
						pos.set(this.scene.CX + p.x * 0.24*this.scene.W, this.scene.CY + p.y * 0.5*this.scene.H);
					}
					let dir = this.dir;
					if (p.angle !== undefined) {
						dir = p.angle * Phaser.Math.DEG_TO_RAD;
					}
					let dayTime = (p.type == this.dayTime);

					this.scene.spawnBulletArc(true, dayTime, pos, dir, p.radius, p.speed, p.amount, p.offset, p.degrees);

					pattern.index = (pattern.index + 1) % pattern.loop.length;
				}
			}
		}

		// Hurt animation
		this.hurtTimer -= delta/1000;
		if (this.hurtTimer > 0 || !this.alive) {
			let blink = (Math.sin(50*time/1000) > 0);
			this.sprite.setTint(blink ? 0xFFBBBB : 0xFFFFFF);
			// this.sprite.setAlpha(0.75);
			// this.sprite.setOrigin(0.5, 0.5 + 0.01 * Math.sin(35*time/1000));
		}
		else {
			this.sprite.setTint(0xFFFFFF);
			this.sprite.setAlpha(1);
			this.sprite.setOrigin(0.5, 0.5);
		}

		// Check if dead
		if (!this.alive) {
			this.deathTimer += delta/1000;
			this.setScale(1 - 0.5 * this.deathTimer / DEATH_DURATION);
			this.setAlpha(1 - this.deathTimer / DEATH_DURATION);
			if (this.deathTimer > DEATH_DURATION) {
				this.destroy();
			}
		}

		// Debug
		this.graphics.clear();
		// this.bodyAreas.forEach((circle: Phaser.Geom.Circle) => {
			// this.graphics.lineStyle(1, 0x00FF00, 0.5);
			// this.graphics.strokeCircleShape(circle);
		// });
		// this.weakAreas.forEach((circle: Phaser.Geom.Circle) => {
			// this.graphics.lineStyle(1, 0x0000FF, 0.5);
			// this.graphics.strokeCircleShape(circle);
		// });
	}

	insideBody(bullet: Bullet): boolean {
		return this.bodyAreas.some((circle: Phaser.Geom.Circle) => {
			return this.checkCollision(circle, bullet);
		});
	}

	// insideWeakSpot(bullet: Bullet): boolean {
		// return this.weakAreas.some((circle: Phaser.Geom.Circle) => {
			// return this.checkCollision(circle, bullet);
		// });
	// }


	setPatterns(patterns) {
		this.patterns = [];

		for (let loop of patterns) {
			console.assert(Array.isArray(loop), "Patterns array need to contain subarrays");

			this.patterns.push({
				index: 0,
				timer: loop[0].wait,
				loop
			});
		}

		this.patterns[0].timer = 1.5;
	}
}
