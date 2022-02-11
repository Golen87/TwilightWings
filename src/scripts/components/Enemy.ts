import { GameScene } from "../scenes/GameScene";
import { Character } from "./Character";
import { Bullet } from "./Bullet";
import { EnemyBullet } from "./EnemyBullet";
import { interpolateColor } from "../utils";

const STUNNED_DURATION = 1.5;


export class Enemy extends Character {
	public scene: GameScene;

	// Graphics
	protected sprite: Phaser.GameObjects.Sprite;
	protected light: Phaser.GameObjects.PointLight;
	protected graphics: Phaser.GameObjects.Graphics;

	// Movement
	public start: Phaser.Math.Vector2;
	public velocity: Phaser.Math.Vector2;
	protected border: { [key: string]: number };

	// Shooting
	protected spawnBar: number;
	protected phases: any[];
	protected phaseIndex: number;
	protected patterns: any[];
	protected stunnedTimer: number;

	// Collision
	protected bodyAreas: Phaser.Geom.Circle[];


	constructor(scene: GameScene, x: number, y: number, dayTime: boolean, spawnBar: number) {
		super(scene, x, y, dayTime);

		// Create player sprite
		const size = 80;
		this.sprite = scene.add.sprite(0, 0, "", 0);
		this.sprite.setFrame(this.dayTime ? 0 : 1);
		this.sprite.setScale(0.25);
		this.add(this.sprite); // Attach sprite to the Player-component

		// Light
		this.light = scene.add.pointlight(0, 0, 0xffeeaa, 65, 0.35, 0.04);
		this.add(this.light);
		this.sendToBack(this.light);

		// Debug graphics
		this.graphics = scene.add.graphics();
		// this.graphics.setVisible(false);
		this.add(this.graphics);

		// Movement
		this.start = new Phaser.Math.Vector2(this.x, this.y);
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.facing.set(0, 1);
		this.border = {
			left: 0.2*scene.W + size/2,
			right: 0.8*scene.W + size/2,
			top: size/2,
			bottom: scene.H - size/2,
		};

		this.spawnBar = spawnBar;
		this.phases = [];
		this.phaseIndex = 0;
		this.patterns = [];
		this.stunnedTimer = 0;

		this.maxHealth = 200;
		this.health = this.maxHealth;

		this.bodyAreas = [ new Phaser.Geom.Circle( 0, 0, 80) ];
	}

	update(time: number, delta: number, barTime: number, barDelta: number) {
		super.update(time, delta);

		if (this.alive) {

			// Movement
			let target = new Phaser.Math.Vector2();
			target.add(this.scene.player);
			target.subtract(this);
			target.normalize();

			this.facing.copy(target);


			// Bullet patterns

			if (this.stunnedTimer <= 0) {
				for (let pattern of this.patterns) {
					// pattern.index
					// pattern.timer
					// pattern.loop

					// pattern.timer -= barDelta;
					let playLoud = false;
					let noise = 0;
					let limit = 20;
					while (pattern.loop.length > 0 && barTime+barDelta > this.spawnBar + pattern.timer && limit-- > 0) {

						pattern.timer += pattern.loop[pattern.index].wait;
						console.log('shoot', barTime.toFixed(2));
						// pattern.timer = barTime + 4*pattern.loop[pattern.index].wait;
						// pattern.timer = Math.round(pattern.timer*4)/4;

						let p = pattern.loop[pattern.index];
						let pos = this.pos;

						// check for undefs nya
						if(p.varx == undefined) {
							p.varx = 0;
						}
						if(p.vary == undefined) {
							p.vary = 0;
						}
						pos.x += ((1-2*Math.random())*p.varx*0.24*this.scene.W);
						pos.y += ((1-2*Math.random())*p.vary*0.5*this.scene.H);
						if (p.x !== undefined && p.y !== undefined) {
							pos.set(this.scene.CX + (p.x+(1-2*Math.random())*p.varx) * 0.24*this.scene.W, this.scene.CY + (p.y+(1-2*Math.random())*p.vary) * 0.5*this.scene.H);
						}

						let dir = this.dir;

						// QUICK FIX FOR AIMING FROM NON BOSS CENTERED POSITIONS VERY BAD PLEASE OPTIMIZE
						if(p.varx !== undefined || p.vary !== undefined || p.x !== undefined || p.y !== undefined)
						{
							target.copy(this.scene.player);
							target.subtract(pos);
							target.normalize();
							dir = target.angle();
						}

						if (p.angle !== undefined) {
							dir = p.angle * Phaser.Math.DEG_TO_RAD;
						}
						let dayTime = (p.type == this.dayTime);

						//offset randomization TEMP FIXME
						if(p.varoff == undefined)
						{
							p.varoff = 0;
						}
						if (p.amount) {
							this.scene.spawnBulletArc(true, dayTime, pos, dir, p.radius, p.speed, p.amount, p.offset, p.degrees, ((1-2*Math.random())*p.varoff));
						}


						// Noise calculation

						// Because negatives are visible and loud
						if (dayTime != this.scene.dayTime) {
							playLoud = true;
						}

						let length = Math.max(
							Array.isArray(p.radius) ? p.radius.length : 0,
							Array.isArray(p.amount) ? p.amount.length : 0,
							1
						);
						for (let i = 0; i < length; i++) {
							let r = Array.isArray(p.radius) ? p.radius[i%p.radius.length] : p.radius;
							let a = Array.isArray(p.amount) ? p.amount[i%p.amount.length] : p.amount;
							noise += r*a;
						}

						pattern.index = (pattern.index + 1) % pattern.loop.length;
					}

					if (noise) {
						let k = Math.log10(noise)/4.5;
						let rate = 1.1 - 1*k;
						let volume = 0.04 + 0.7*k
						volume *= (playLoud ? 1 : 0.4);

						if (this.scene.dayTime !== playLoud) {
							this.scene.sounds.enemyShotDay.play({ rate, volume });
						}
						else {
							this.scene.sounds.enemyShotNight.play({ rate, volume });
						}

						k *= k;
						// k -= 0.5
						if (k > 0)
							this.scene.shake(500*k, 3*k, 0);
					}
				}
			}


			// Phase change

			if (this.phases.length > 0) {
				let fac = this.phases.length - this.phaseIndex - 1;
				let threshold = fac * this.maxHealth / this.phases.length;

				if (threshold > 0 && this.health < threshold) {
					this.phaseIndex++;
					this.stunnedTimer = STUNNED_DURATION;
					this.spawnBar = 4 + Math.ceil(barTime);
					this.setPatterns(this.phases[this.phaseIndex]);
					this.emit("phase");
				}

			}
		}


		// Hurt animation while alive
		if (this.alive) {
			this.setScale(
				1 - 0.06 * this.hurtEase,
				1 - 0.14 * this.hurtEase);
			this.sprite.setTint(interpolateColor(
				0xFFFFFF, 0xFF7777, this.hurtEase));
			this.sprite.setAlpha(
				1 - 0.2 * this.hurtEase);

			this.hurtEase += 0.6 * (0 - this.hurtEase);

			// if (this.hurtEase > 0.1) {
			// 	this.scene.particles.createExplosion(
			// 		this.x + 20 * (-1+2*Math.random()),
			// 		this.y + 20 * (-1+2*Math.random()),
			// 		0.2, 0.4
			// 	);
			// }

			this.light.color = Phaser.Display.Color.ValueToColor(interpolateColor(0xff0000, 0xffff99, this.healthPerc));


			if (this.stunnedTimer > 0) {
				this.stunnedTimer -= delta;
				let stunFac = 1 - this.stunnedTimer / STUNNED_DURATION;
				let x = Math.max(0, 1-Math.abs(1-2*stunFac));
				let stunEase = Phaser.Math.Easing.Sine.Out(x);

				this.sprite.setOrigin(0.5 + stunEase * 0.1 * Math.sin(50*time), 0.5);
			}
		}

		// Death animation
		else {
			this.deathTimer += delta;
			let deathFac = this.deathTimer / this.deathDuration; // 1 = dead
			let deathEase = Phaser.Math.Easing.Quintic.In(deathFac);
			let x = Math.max(0, 1-Math.abs(1-2.5*deathFac));
			let deathEase2 = Phaser.Math.Easing.Sine.Out(x);

			this.setScale(1 - deathEase);
			this.sprite.setOrigin(0.5 + deathEase2 * 0.15 * Math.sin(100*time), 0.5);
			// this.setAlpha(1 - deathEase);

			let blink = (Math.sin(50*time) > 0);
			this.sprite.setTint(blink ? 0xFFBBBB : 0xFFFFFF);

			this.light.setAlpha(1-Phaser.Math.Easing.Quintic.Out(deathFac));

			// this.scene.particles.createExplosion(
			// 	this.x + 50 * (-1+2*Math.random()),
			// 	this.y + 50 * (-1+2*Math.random()),
			// 	0.2, 0.6
			// );

			// End prematurely
			if (this.deathTimer > 0.95 * this.deathDuration) {
				this.emit("destruction");
				// this.scene.particles.createExplosion(this.x, this.y, 1, 1.0);
				this.destroy();
			}
		}



		// Debug
		this.graphics.clear();
		// this.bodyAreas.forEach((circle: Phaser.Geom.Circle) => {
		// 	this.graphics.lineStyle(1, 0x00FF00, 0.5);
		// 	this.graphics.strokeCircleShape(circle);
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


	setPhases(phases) {
		console.assert(Array.isArray(phases), "Phases needs to be an array of patterns");
		this.phases = phases;
		this.phaseIndex = 0;
		this.setPatterns(phases[0]);
	}

	setPatterns(patterns) {
		this.patterns = [];
		console.assert(Array.isArray(patterns), "Patterns need to be an array");
		if (!Array.isArray(patterns[0])) {
			patterns = [patterns];
		}

		for (let loop of patterns) {

			this.patterns.push({
				index: 0,
				timer: 4,//loop[0].wait,
				loop
			});
		}

		// this.patterns[0].timer = 0;
	}
}
