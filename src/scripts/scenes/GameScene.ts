import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";
import { Music } from "./../components/Music";
import { Background } from "../components/Background";
import { UI } from "../components/UI";
import { Particles } from "../components/Particles";
import { Player } from "../components/Player";
import { Enemy } from "../components/Enemy";
import { Minion } from "../components/Minion";
import { Boss } from "../components/Boss";
import { Bullet } from "../components/Bullet";
import { PlayerBullet } from "../components/PlayerBullet";
import { EnemyBullet } from "../components/EnemyBullet";
import { audios } from "../assets";
import { levelData } from "../levels";
import { interpolateColor } from "../utils";
import { EnemyParams, BulletParams } from "../interfaces";


const PLAYER_BULLET_COUNT = 1000;
const ENEMY_BULLET_COUNT = 5000;

const BACKGROUND_LAYER = 0;
const BOSS_LAYER = 1;
const ENEMY_LAYER = 2;
const PLAYER_LAYER = 3;
const PLAYER_BULLET_LAYER = 4;
const ENEMY_GLOW_BACK_LAYER = 5;
const ENEMY_GLOW_FRONT_LAYER = 6;
const ENEMY_BULLET_BACK_LAYER = 7;
const ENEMY_BULLET_FRONT_LAYER = 8;
const UI_LAYER = 9;
const FLASH_LAYER = 10;



export class GameScene extends BaseScene {
	public mode: string;
	public isRunning: boolean;
	public dayTime: boolean; // Day is true, Night is false
	public dayTimeLinear: number;
	public dayTimeSmooth: number;

	public prevTime: number;
	public prevBarTime: number;
	private currentTimeout: ReturnType<typeof setTimeout>;

	// Background
	public background: Background;

	// UI texts
	private ui: UI;

	// Characters
	public player: Player;
	private enemies: Enemy[];
	private boss: Boss;

	// Bullets
	private playerBullets: PlayerBullet[];
	private enemyBullets: EnemyBullet[];
	private pbIndex: number;
	private ebIndex: number;

	public particles: Particles;

	public introPlaying: boolean;
	public outroPlaying: boolean;

	// public sounds: Map<string, Phaser.Sound.BaseSound>;
	public sounds: {[key: string]: Phaser.Sound.WebAudioSound};
	public musicDay: Music;
	public musicNight: Music;

	// Level
	public levelTimer: number;
	public levelIndex: number;
	public enemiesInQueue: boolean;

	// Focus
	public shiftKey: any;
	public focusValue: number;

	// Score
	public score: number;
	public highscore: number;


	constructor() {
		super({key: "GameScene"});
	}

	init(): void {
		// this.level = data.level;
		this.mode = "normal";
		this.isRunning = true;
	}

	create(): void {
		this.fade(false, 1000, 0x000000);


		// Vars
		this.prevTime = 0;
		this.prevBarTime = 0;
		this.introPlaying = false;
		this.outroPlaying = false;
		this.dayTime = true;
		this.dayTimeLinear = 1;
		this.dayTimeSmooth = 1;


		// Backgrounds
		this.background = new Background(this);
		this.background.setDepth(BACKGROUND_LAYER);


		// UI
		this.ui = new UI(this);
		this.ui.setDepth(UI_LAYER);


		// Characters
		this.player = new Player(this, this.CX, this.CY);
		this.player.setDepth(PLAYER_LAYER);

		this.enemies = [];

		this.playerBullets = [];
		this.enemyBullets = [];

		// Pre-allocate bullets
		for (let i = 0; i < PLAYER_BULLET_COUNT; i++) {
			let bullet = new PlayerBullet(this);
			bullet.setDepth(PLAYER_BULLET_LAYER);
			this.playerBullets.push(bullet);
		}
		for (let i = 0; i < ENEMY_BULLET_COUNT; i++) {
			let bullet = new EnemyBullet(this);
			bullet.setDepth(ENEMY_BULLET_FRONT_LAYER);
			bullet.glow.setDepth(ENEMY_GLOW_FRONT_LAYER);
			this.enemyBullets.push(bullet);
		}
		this.pbIndex = 0;
		this.ebIndex = 0;


		this.particles = new Particles(this);
		this.particles.setDepth(9);


		// Callbacks
		this.player.on("shoot", this.spawnPlayerBullet.bind(this));
		this.player.on("toggle", this.onDayToggle.bind(this));
		this.player.on("damage", this.onPlayerDamage.bind(this));
		this.player.on("death", this.onPlayerDeath.bind(this));
		this.player.on("destruction", this.onPlayerDestroy.bind(this));


		// Touch controls
		this.input.addPointer(2);

		// let touchArea = this.add.rectangle(0, 0, this.W, this.H, 0xFFFFFF).setOrigin(0).setAlpha(0.001);
		// touchArea.setInteractive({ useHandCursor: true, draggable: true });

		let touchId: number = -1;
		let touchButton: number = -1;

		this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
			if (!this.player.isTouched) {
				this.player.touchStart(pointer.x, pointer.y);
				touchId = pointer.id;
				touchButton = pointer.button;
			}
			else if (this.player.isTouched && !this.player.isTapped) { // Allow second touch to toggle
				this.onDayToggle();
			}
		});
		// this.input.on('drag', (pointer: Phaser.Input.Pointer) => {
		this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
			if (touchId == pointer.id) {
				this.player.touchDrag(pointer.x, pointer.y);
			}
		});
		// this.input.on('dragend', (pointer: Phaser.Input.Pointer) => {
		this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
			if (touchId == pointer.id && touchButton == pointer.button) {
				// this.ui.debug.setText(`${new Date().getTime()} - id:${pointer.id} button:${pointer.button}`);
				this.player.touchEnd(pointer.x, pointer.y);
			}
		});
		// this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
		// });
		// scene.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) => {});
		// scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {});
		// scene.input.on('dragstart', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {});
		// scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer, currentlyOver: Phaser.GameObjects.GameObject[]) => {});

		// this.input.on('pointerdown', (pointer) => {
			// console.log(pointer);
			// this.ui.debug.setText(`${this.InputPlugin.pointer1}`);
			// if (pointer.button == 0) {
				// this.progress();
			// }
		// }, this);

		// Skip
		// this.input.keyboard.on("keydown-ESC", () => {
			// this.scene.start("OverworldScene", { level: this.level+1 });
		// }, this);

		this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', this.onDayToggle, this);
		this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.Q).on('down', () => {
			this.enemies.forEach((enemy: Enemy, index: number) => {
				enemy.destroy();
			});
			this.screenWipe();
		}, this);
		this.shiftKey = this.input.keyboard?.addKey('Shift');
		this.focusValue = 1;


		// Sounds

		this.loadSounds();

		this.musicDay.play();
		this.musicNight.play();


		// this.showIntro();


		this.levelTimer = 0;
		this.levelIndex = 0;
		this.enemiesInQueue = false;


		// Score

		this.score = 0;
		this.highscore = 0;
		// this.smoothScore = 0;
		this.loadHighscore();
	}

	update(timeMs: number, deltaMs: number) {

		let focusTarget = this.shiftKey.isDown ? 0.25 : 1.0;
		this.focusValue += 6*(focusTarget - this.focusValue) * deltaMs/1000;
		this.musicDay.rate = this.focusValue;
		this.musicNight.rate = this.focusValue;


		let barTime = this.musicDay.barTime;
		let time = this.musicDay.totalTime;
		let delta = Math.max(0, (time - this.prevTime));
		this.prevTime = time;
		let barDelta = Math.max(0, (barTime - this.prevBarTime));
		this.prevBarTime = barTime;

		const swapDur = 2 * delta;
		this.dayTimeLinear += Phaser.Math.Clamp( (this.dayTime ? 1 : 0) - this.dayTimeLinear, -swapDur, swapDur );
		this.dayTimeSmooth = Phaser.Math.Easing.Back.InOut(this.dayTimeLinear, 0.8);

		this.musicDay.volume   = 0.25 * (0.01 + 0.99 * this.dayTimeSmooth);
		this.musicNight.volume = 0.25 * (1.00 - 0.99 * this.dayTimeSmooth);



		this.player.update(time, delta);

		this.particles.update(time, delta);


		this.background.update(time, delta, this.dayTimeSmooth);
		this.ui.update(time, delta, this.dayTimeSmooth);



		if (!this.anyEnemies && !this.enemiesInQueue) {
			if (levelData.length > this.levelIndex) {
				this.levelTimer -= delta;

				if (this.levelTimer <= 0 && barTime >= 0) {

					this.ui.setWorld(1+Math.floor(this.levelIndex/5));
					this.ui.setStage(1+(this.levelIndex%5));

					let data = levelData[this.levelIndex++];
					// this.levelTimer = data.delay;

					for (let e of data.enemies) {

						this.spawnEnemy(e);
						/*
						let x = this.CX + e.x * 0.24*this.W;
						let y = this.CY + e.y * 0.5*this.H;

						this.enemiesInQueue = true;

						setTimeout(() => {
							this.enemiesInQueue = false;

							if (e.type == "boss") {
								let boss = new Boss( this, x, y, true, Math.round(this.musicDay.barTime), movementFunction );
								boss.setDepth(BOSS_LAYER);

								if (e.phases) {
									boss.setPhases(e.phases);
								}
								else if (e.pattern) {
									boss.setPatterns(e.pattern);
								}

								boss.setHealth(e.health);
								this.enemies.push(boss);
								this.boss = boss;
								this.ui.setBoss(boss);
								// this.sounds.dog.play();
								this.sounds.bossSpawn.play();

								this.flash(3000, 0xFFFFFF, 0.9);
								this.spawnBulletArc(true, true, boss.pos, 90, [15,12.5,10], [150,200,250], 20, [0,9,0]);
								this.spawnBulletArc(true, false, boss.pos, 90, [15,12.5,10], [150,200,250], 20, [9,0,9]);
								this.shake(1000, 12, 0);

								boss.on("phase", () => {
									this.screenWipe();
									this.sounds.phaseComplete.play();
									// boss.center();

								});
								boss.on("death", this.onBossDefeated.bind(this));
								boss.on("destruction", () => {
									if (this.mode == "miau") {
										this.sounds.explosion.play();
										this.particles.createExplosion(
											boss.x,
											boss.y,
											2.0, 2.0
										);
									}
									this.sounds.enemyDestroy.play();
									this.flash(3000, 0xFFFFFF, 1.0);
									this.shake(1000, 12, 0);
									this.spawnBulletArc(true, true, boss.pos, 90, [14,13,12,10,8], [120,160,200,240,280], 20, [0,9,0,9,0]);
									this.spawnBulletArc(true, false, boss.pos, 90, [14,13,12,10,8], [120,160,200,240,280], 20, [9,0,9,0,9]);
									this.addScore(100000);
									this.ui.clearBoss();
								});
							} else {
								let minion = new Minion( this, x, y, e.type, Math.round(this.musicDay.barTime), movementFunction );
								minion.setDepth(ENEMY_LAYER);
								minion.setPatterns(e.pattern);
								minion.setHealth(e.health);
								this.enemies.push(minion);

								minion.on("death", () => {
									this.sounds.enemyDeath.play();
									this.shake(500, 4, 0);
								});
								minion.on("destruction", () => {
									if (this.mode == "miau") {
										this.sounds.explosion.play();
									}
									this.sounds.enemyDestroy.play();
									this.flash(1000, 0xFFFFFF, 0.5);
									this.shake(1000, 6, 0);
									this.spawnBulletArc(true, minion.dayTime, minion.pos, minion.dir, 8, 200, 45, 0.0);
									this.addScore(10000);
								});

								// this.sounds.necoarc.play();
							}
						}, ((Math.round(barTime) - barTime + e.spawnDelay) * this.musicDay.speed) * 1000);

						if (e.type == "boss") {
							setTimeout(() => {
								this.shake(1500, 0, 3);
							}, e.spawnDelay*1000 - 1500);
						}
						*/
					}
				}
			}
			else {
				this.ui.showVictory();
			}
		}

		this.enemies.forEach((enemy: Enemy, index: number) => {
			if (enemy.scene)
				enemy.update(time, delta, barTime, barDelta);
			else
				this.enemies.splice(index, 1);
		});


		// Bullets

		this.ui.debug.setText(`FPS: ${this.game.loop.actualFps.toFixed()}`);

		this.playerBullets.forEach((bullet: PlayerBullet, index: number) => {
			if (!bullet.active) {
				return;
			}

			bullet.update(time, delta);
			bullet.setDepth(PLAYER_BULLET_LAYER - 0/10000 * bullet.y/this.H);

			if (bullet.dayTime)
				bullet.setAlpha(0.1 + 0.7 * this.dayTimeSmooth);
			else
				bullet.setAlpha(0.8 - 0.6 * this.dayTimeSmooth);

			// Collision with enemies
			this.enemies.forEach((enemy: Enemy, index: number) => {
				if (enemy.alive && enemy.insideBody(bullet)) {

					if (enemy.dayTime != bullet.dayTime) {
						this.sounds.enemyDamageHigh.play();
						enemy.damage(3/2);
						this.addScore(30);
					} else {
						this.sounds.enemyDamageHigh.play();
						// this.sounds.enemyDamageLow.play();
						enemy.damage(2/2);
						this.addScore(10);
					}

					// this.ui.onEnemyDamage(enemy);
					this.sounds.enemyDamage.play();
					bullet.kill();

					if (enemy instanceof Boss) {
						this.ui.onBossDamage(enemy);
					}

					if (this.mode == "miau") {
						// this.particles.createExplosion(
						// 	enemy.x + 70 * (-1+2*Math.random()),
						// 	enemy.y + 70 * (-1+2*Math.random()),
						// 	0.1, 0.2
						// );
						// if (!this.sounds.oof.isPlaying)
							// this.sounds.oof.play();
					}
				}
			});
		});

		this.enemyBullets.forEach((bullet: EnemyBullet, index: number) => {
			if (!bullet.active) {
				return;
			}

			bullet.update(time, delta);
			let layer = bullet.dayTime != this.dayTime ? ENEMY_BULLET_FRONT_LAYER : ENEMY_BULLET_BACK_LAYER;
			bullet.setDepth(layer - 1/10000 * bullet.y/this.H);
			let glow = bullet.dayTime != this.dayTime ? ENEMY_GLOW_FRONT_LAYER : ENEMY_GLOW_BACK_LAYER;
			bullet.glow.setDepth(glow - 1/10000 * bullet.y/this.H);

			if (bullet.dayTime) {
				bullet.setAlpha(1.0 - 0.5 * this.dayTimeSmooth);
				bullet.setTint(interpolateColor(0xFFFFFF, 0xFFFFAA, this.dayTimeSmooth));
			}
			else {
				bullet.setAlpha(0.3 + 0.7 * this.dayTimeSmooth);
				bullet.setTint(0xFFFFFF);
			}
			bullet.glow.setAlpha(bullet.alpha);

			let dist = Phaser.Math.Distance.BetweenPoints(this.player, bullet);
			let distFac = Phaser.Math.Clamp(dist - 150, 0, 300) / (300-150);
			let p = Math.abs((bullet.dayTime ? 0 : 1) - this.dayTimeSmooth);
			bullet.alpha *= 1 - 0.5 * p * distFac;


			// Collision with player
			if (this.player.alive && this.player.dayTime != bullet.dayTime && this.player.insideBody(bullet) && (this.dayTime ? 1 : 0) == this.dayTimeLinear) {
				if (this.mode == "miau" && !this.player.invulnerable) {
					this.particles.createExplosion(
						this.player.x + 20 * (-1+2*Math.random()),
						this.player.y + 20 * (-1+2*Math.random()),
						1.0, 1.0
					);
					this.sounds.boom.play();
					this.sounds.bruh.play();
				}

				this.player.damage();
				this.ui.setPlayerHealth(this.player.health);
				bullet.kill();
			}
		});


		// Camera shake

		if (this.cameraShakeValue > 0) {
			this.cameras.main.x = this.cameraShakeValue*Math.sin(100 * time);
		}
		else {
			this.cameras.main.x = 0;
		}


		// Check ending
		if (this.isRunning && this.outroPlaying && this.player.y > this.H) {
			// this.progress();
			this.isRunning = false;
		}

	}


	loadSounds() {
		this.sounds = {};
		for (let audio of audios) {
			this.sounds[audio.key] = this.sound.add(audio.key, { volume: audio.volume, rate: audio.rate || 1 }) as Phaser.Sound.WebAudioSound;
		}


		// Music

		if (!this.musicDay) {
			if (this.mode == "miau") {
				this.musicDay = new Music(this, "music_miau", { volume: 0.25 });
				this.musicNight = new Music(this, "music_miau", { volume: 0.25 });
			}
			else {
				this.musicDay = new Music(this, "music_day", { volume: 0.25 });
				this.musicNight = new Music(this, "music_night", { volume: 0.25 });
			}

			this.musicDay.on('bar', () => {
				// this.sounds.score.play();
				// this.sounds.score.seek = 0.05;
				// this.spawnBulletArc("enemy-day", new Phaser.Math.Vector2(this.CX, this.CY), 0, 6, 80, 60, 0);
			}, this);
			this.musicDay.on('loop', () => {
				this.musicNight.seek = this.musicDay.seek;
			}, this);
		}
	}


	onPlayerDamage() {
		if (this.player.alive) {
			this.sounds.playerDamage.play();
			this.flash(2000, 0xFF0000, 0.5);
			this.shake(1000, 12, 0);
			this.spawnBulletArc(false, this.player.dayTime, this.player.pos, this.player.dir, 16, 300, 8, 0);
			this.spawnBulletArc(false, this.player.dayTime, this.player.pos, this.player.dir, 16, 150, 6, 0);
		}
	}

	onPlayerDeath() {
		this.introPlaying = true;
		this.sounds.playerDeath.play();

		this.shake(1400, 8, 2);
	}

	onPlayerDestroy() {
		this.sounds.playerDestroy.play();

		this.shake(1400, 8, 2);

		this.ui.showGameover();
		this.saveHighscore()
	}


	onBossDefeated() {
		// this.introPlaying = true;
		// this.sounds.enemyDeath.play();
		this.sounds.bossSpawn.play();
		this.screenWipe();

		// this.addEvent(1500+1000, () => {
			// this.outroPlaying = true;
		// });
	}

	onDayToggle() {
		// let canvas = document.querySelector('canvas')!;
		// console.log(canvas);
		// let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		// window.location.href = image;

		if (this.player.alive && this.isRunning && (this.dayTime ? 1 : 0) == this.dayTimeLinear) {
			this.dayTime = !this.dayTime;
			this.player.onDayToggle();
			// this.sounds.bong.play();

			if (this.dayTime) {
				this.sounds.dayShift.play();
			} else {
				this.sounds.nightShift.play();
			}
		}

		if (!this.player.visible) {
			this.musicDay.stop();
			this.musicNight.stop();
			this.fade(true, 100, 0x000000);
			this.addEvent(110, () => {
				this.scene.start("MenuScene");
			});
		}
	}


	spawnEnemy(enemyParams: EnemyParams) {
		let x = this.CX;// + enemyParams.x * 0.24*this.W;
		let y = 0.5*this.CY;// + enemyParams.y * 0.5*this.H;
		let time = Math.round(this.musicDay.totalTime);

		let minion = new Minion( this, x, y, enemyParams.type, time, enemyParams.movement, enemyParams.patterns );
		minion.setDepth(ENEMY_LAYER);
		// minion.setPatterns(enemyParams.pattern);
		minion.setHealth(enemyParams.health);
		this.enemies.push(minion);

		minion.on("shoot", (bulletParams: BulletParams, swapDayTime: boolean) => {
			this.spawnEnemyBullet(bulletParams, minion, swapDayTime);
		});

		minion.on("death", () => {
			this.sounds.enemyDeath.play();
			this.shake(500, 4, 0);
		});

		minion.on("destruction", () => {
			if (this.mode == "miau") {
				this.sounds.explosion.play();
			}
			this.sounds.enemyDestroy.play();
			this.flash(1000, 0xFFFFFF, 0.5);
			this.shake(1000, 6, 0);
			this.spawnBulletArc(true, minion.dayTime, minion.pos, minion.dir, 8, 200, 45, 0.0);
			this.addScore(10000);
		});
	}

	spawnPlayerBullet(bulletParams: BulletParams): PlayerBullet | null {
		let i;
		for (i = 0; i < PLAYER_BULLET_COUNT; i++) {
			this.pbIndex = (this.pbIndex + 1) % PLAYER_BULLET_COUNT;

			if (!this.playerBullets[this.pbIndex].active) {

				// let movementFunction = function(bullet, time, p) {
				// 	bullet.x = p.start.x + p.facing.x * p.speed * time;
				// 	bullet.y = p.start.y + p.facing.y * p.speed * time;
				// }

				this.playerBullets[this.pbIndex].spawn(bulletParams, this.player, false);

				if (this.sounds.playerShot.isPlaying) {
					// this.sounds.playerShot.seek = 0.02;
				} else {
					this.sounds.playerShot.play();
					this.sounds.playerShot.setLoop(true);
				}

				return this.playerBullets[this.pbIndex];
			}
		}
		return null;
	}

	// spawnEnemyBullet(dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2, radius: number): EnemyBullet | null {
	spawnEnemyBullet(bulletParams: BulletParams, owner: Enemy, swapDayTime: boolean): EnemyBullet | null {
		let i;
		for (i = 0; i < ENEMY_BULLET_COUNT; i++) {
			this.ebIndex = (this.ebIndex + 1) % ENEMY_BULLET_COUNT;

			// Unused bullet found
			if (!this.enemyBullets[this.ebIndex].active) {

				// this.enemyBullets[this.ebIndex].spawn(dayTime, origin, direction, radius, movementFunction);
				this.enemyBullets[this.ebIndex].spawn(bulletParams, owner, swapDayTime);

				// if (dayTime) {
				// 	if (this.sounds.enemyShotDay.isPlaying) {
				// 		// this.sounds.enemyShotDay.seek = 0.005;
				// 	} else {
				// 		this.sounds.enemyShotDay.play();
				// 		// this.sounds.enemyShotDay.rate = 0.2;
				// 	}
				// } else {
				// 	if (this.sounds.enemyShotNight.isPlaying) {
				// 		// this.sounds.enemyShotNight.seek = 0.005;
				// 	} else {
				// 		this.sounds.enemyShotNight.play();
				// 		// this.sounds.enemyShotNight.rate = 0.2;
				// 	}
				// }

				return this.enemyBullets[this.ebIndex];
			}
		}
		return null;
	}

	spawnBullet(enemyType: boolean, dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2, radius: number) {
		let spawnFunc = enemyType ? this.spawnEnemyBullet.bind(this) : this.spawnPlayerBullet.bind(this);
		// spawnFunc(dayTime, origin, direction, radius);
	}

	spawnBulletArc(enemyType: boolean, dayTime: boolean, origin: Phaser.Math.Vector2, dirAngle: number, radius: number, speed: number, amount: number, offsetAngle: any=0, maxAngle: any=360, offvar: any=0) {
		dirAngle = dirAngle || 90;
		radius = radius || 6;
		speed = speed || 100;
		amount = amount || 1;
		offsetAngle = offsetAngle || 0;
		maxAngle = maxAngle || 360;
		offvar = offvar || 0;

		let subLength = Math.max(
			Array.isArray(dirAngle) ? dirAngle.length : 0,
			Array.isArray(radius) ? radius.length : 0,
			Array.isArray(speed) ? speed.length : 0,
			Array.isArray(amount) ? amount.length : 0,
			Array.isArray(offsetAngle) ? offsetAngle.length : 0,
			Array.isArray(maxAngle) ? maxAngle.length : 0
		);
		if (subLength > 0) {
			for (let i = 0; i < subLength; i++) {
				this.spawnBulletArc(
					enemyType,
					dayTime,
					origin,
					Array.isArray(dirAngle) ? dirAngle[i%dirAngle.length] : dirAngle,
					Array.isArray(radius) ? radius[i%radius.length] : radius,
					Array.isArray(speed) ? speed[i%speed.length] : speed,
					Array.isArray(amount) ? amount[i%amount.length] : amount,
					Array.isArray(offsetAngle) ? offsetAngle[i%offsetAngle.length] : offsetAngle,
					Array.isArray(maxAngle) ? maxAngle[i%maxAngle.length] : maxAngle,
					offvar
				);
			}
			return;
		}

		if (maxAngle == 360 && amount != 1) {
			amount += 1;
		}

		let dir = new Phaser.Math.Vector2();
		offsetAngle *= Phaser.Math.DEG_TO_RAD;
		maxAngle *= Phaser.Math.DEG_TO_RAD;
		offvar *= Phaser.Math.DEG_TO_RAD;

		for (let i = 0; i < amount; i++) {

			let angle = dirAngle + offsetAngle;

			if (amount > 1) {
				angle = dirAngle + offsetAngle + offvar - maxAngle/2 + maxAngle * i / (amount-1);
			}

			dir.setToPolar(angle, speed);

			this.spawnBullet(enemyType, dayTime, origin, dir, radius);
		}

		// let rate = 2.0 - Phaser.Math.Clamp(0.8 * Math.pow(amount / 100,2), 0, 1);
		// let volume = Math.min(0.0 + amount / 100 + radius / 30, 1);
		// if (dayTime) {
			// this.sounds.enemyShotDay.play({ rate:0.1, volume:1.0 });
		// }
		// else {
			// this.sounds.enemyShotNight.play({ rate, volume });
		// }
	}

	// debugSpawnPatter(key, event) {
	// 	const origin = new Phaser.Math.Vector2(this.CX, 0.5 * this.CY);
	// 	let type = !this.dayTime ? "enemy-day" : "enemy-night";
	// 	this.spawnBulletPattern(type, origin, event.key);
	// }

	spawnBulletPattern(type: string, origin: any, pattern: number) {
		/*
		clearTimeout(this.currentTimeout);

		if (pattern == 1) {
			this.spawnBulletArc(type, origin, 0, 6, 80, 60, 0);
		}
		else if (pattern == 2) {
			this.spawnBulletArc(type, origin, 0, 6, 3.0*30, 20, 0.0);
			this.spawnBulletArc(type, origin, 0, 6, 3.5*30, 20, 0.0);
			this.spawnBulletArc(type, origin, 0, 6, 4.0*30, 20, 0.0);
			this.spawnBulletArc(type, origin, 0, 6, 4.5*30, 20, 0.0);
			this.spawnBulletArc(type, origin, 0, 6, 5.0*30, 20, 0.0);
			this.spawnBulletArc(type, origin, 0, 6, 5.5*30, 20, 0.0);
		}
		else if (pattern == 3) {
			const func = () => {
				this.spawnBulletArc(type, origin, 0, 6, 3*25, 30, 0.0);
				this.spawnBulletArc(type, origin, 0, 6, 4*25, 30, 0.5);
				this.spawnBulletArc(type, origin, 0, 6, 5*25, 30, 0.0);
				this.spawnBulletArc(type, origin, 0, 6, 6*25, 30, 0.5);
				this.spawnBulletArc(type, origin, 0, 6, 7*25, 30, 0.0);
				clearTimeout(this.currentTimeout);
				this.currentTimeout = setTimeout(func, 3000);
			}
			func();
		}
		else if (pattern == 4) {
			let temp = new Phaser.Math.Vector2();

			for (let j = 0; j < 16; j++) {
				setTimeout(() => {
					let now = this.time.now;
					for (let i = 0; i < 32; i++) {
						let bullet = this.spawnEnemyBullet(!this.dayTime, origin, temp, 6);

						if (bullet) {
							bullet.movementFunction = function(time: number) {
								let t = (time - now) / 1000;
								let radius = 80 * t;
								let angle = (i*360/32 + (j%2==0 ? -1 : 1) * 10*t - 1*j) * Phaser.Math.DEG_TO_RAD;
								temp.setToPolar(angle, radius);
								this.x = origin.x + temp.x;
								this.y = origin.y + temp.y;
							};
						}
					}
				}, 500*j);
			}
		}
		else if (pattern == 5) {}
		else if (pattern == 6) {}
		else if (pattern == 7) {}
		else if (pattern == 8) {}
		else if (pattern == 9) {}
		else if (pattern == 0) {}
		*/
	}

	screenWipe() {
		this.flash(3000, 0xFFFFFF, 1.0);
		this.shake(1000, 12, 0);
		for (let i = 0; i < ENEMY_BULLET_COUNT; i++) {
			this.enemyBullets[i].kill();
		}
	}

	get anyEnemies() {
		return this.enemies.length > 0;
	}


	/* Score */

	loadHighscore() {
		// Crashes in incognito
		try {
			let data = JSON.parse(localStorage.getItem("TWSaveData")!);
			if (data) {

				if (data.highscore && !isNaN(parseInt(data.highscore))) {
					this.highscore = Phaser.Math.Clamp(data.highscore, 0, 99999999);
					this.ui.setScore(this.score, this.highscore);
				}
			}
		} catch (error) {}
	}

	saveHighscore() {
		// Crashes in incognito
		try {
			localStorage.setItem("TWSaveData", JSON.stringify({
				version: 1,
				highscore: this.highscore,
			}));
		} catch (error) {}
	}

	addScore(value: number) {
		this.score += value;
		this.highscore = Math.max(this.highscore, this.score);
		this.ui.setScore(this.score, this.highscore);

		if (value > 1000) {
			this.saveHighscore();
		}
	}
}
