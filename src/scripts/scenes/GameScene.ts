import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";
import { Background } from "../components/Background";
import { UI } from "../components/UI";
import { Particles } from "../components/Particles";
import { Player } from "../components/Player";
import { Boss } from "../components/Boss";
import { Bullet } from "../components/Bullet";
import { PlayerBullet } from "../components/PlayerBullet";
import { EnemyBullet } from "../components/EnemyBullet";


const PLAYER_BULLET_COUNT = 1000;
const ENEMY_BULLET_COUNT = 10000;

const BACKGROUND_LAYER = 0;
const PLAYER_LAYER = 1;
const ENEMY_LAYER = 2;
const BOSS_LAYER = 3;
const ENEMY_BULLET_BACK_LAYER = 4;
const ENEMY_BULLET_FRONT_LAYER = 5;
const PLAYER_BULLET_LAYER = 6;
const UI_LAYER = 7;


export class GameScene extends BaseScene {
	public isRunning: boolean;
	public dayTime: boolean; // Day is true, Night is false
	public dayTimeLinear: number;
	public dayTimeSmooth: number;

	// public level: number;
	private currentTimeout: ReturnType<typeof setTimeout>;

	// Background
	private background: Background;

	// UI texts
	private ui: UI;
	private debugText: Phaser.GameObjects.Text;

	// Characters
	private player: Player;
	private bosses: Boss[];

	// Bullets
	private playerBullets: PlayerBullet[];
	private enemyBullets: EnemyBullet[];
	private pbIndex: number;
	private ebIndex: number;

	private particles: Particles;

	public introPlaying: boolean;
	public outroPlaying: boolean;
	public shakeCamera: boolean;


	constructor() {
		super({key: "GameScene"});
	}

	init(data): void {
		// this.level = data.level;
		this.isRunning = true;
	}

	create(): void {
		this.fade(false, 1000, 0x000000);

		// Vars
		this.introPlaying = false;
		this.outroPlaying = false;
		this.shakeCamera = false;
		this.dayTime = true;
		this.dayTimeLinear = 1;
		this.dayTimeSmooth = 1;


		// Backgrounds
		this.background = new Background(this);
		this.background.setDepth(BACKGROUND_LAYER);


		// UI
		this.ui = new UI(this);
		this.ui.setDepth(UI_LAYER);

		this.debugText = this.createText(0, this.H, 30, "#FFF", "LMAO");
		this.debugText.setDepth(UI_LAYER);
		this.debugText.setOrigin(0, 1);
		this.debugText.setStroke("#333333", 4);


		// Characters
		this.player = new Player(this, this.CX, this.CY);
		this.player.setDepth(PLAYER_LAYER);

		this.bosses = [];
		for (let i = 0; i < 0; i++) {
			let dayTime = (i%2 == 0);
			let boss = new Boss(this, this.CX, 0.3*this.H, dayTime);
			boss.setDepth(BOSS_LAYER);
			boss.following = this.player;

			boss.on("shoot", this.spawnEnemyBullet.bind(this));
			boss.on("defeated", this.onBossDefeated.bind(this));
			this.bosses.push(boss);
		}

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
			this.enemyBullets.push(bullet);
		}
		this.pbIndex = 0;
		this.ebIndex = 0;


		this.particles = new Particles(this);
		this.particles.setDepth(9);


		// Callbacks
		this.player.on("shoot", this.spawnPlayerBullet.bind(this));
		this.player.on("toggle", this.onDayToggle.bind(this));
		this.player.on("defeated", this.onPlayerDefeated.bind(this));


		// Touch controls

		this.input.addPointer(1);

		let touchArea = this.add.rectangle(0, 0, this.W, this.H, 0xFFFFFF).setOrigin(0).setAlpha(0.001);
		touchArea.setInteractive({ useHandCursor: true, draggable: true });
		touchArea.on('dragstart', (pointer: Phaser.Input.Pointer) => {
			this.player.touchStart(pointer.x, pointer.y);
		});
		touchArea.on('drag', (pointer: Phaser.Input.Pointer) => {
			this.player.touchDrag(pointer.x, pointer.y);
		});
		touchArea.on('dragend', (pointer: Phaser.Input.Pointer) => {
			this.player.touchEnd(pointer.x, pointer.y);
		});

		// Skip
		// this.input.keyboard.on("keydown-ESC", () => {
			// this.scene.start("OverworldScene", { level: this.level+1 });
		// }, this);

		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', this.onDayToggle, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE).on('down', this.spawnBulletPattern, this);


		// this.showIntro();
	}

	update(time: number, delta: number) {
		const swapDur = 2 * delta/1000;
		this.dayTimeLinear += Phaser.Math.Clamp( (this.dayTime ? 1 : 0) - this.dayTimeLinear, -swapDur, swapDur );
		this.dayTimeSmooth = Phaser.Math.Easing.Back.InOut(this.dayTimeLinear, 0.8);

		this.background.update(time, delta, this.dayTimeSmooth);
		this.ui.update(time, delta, this.dayTimeSmooth);

		this.player.update(time, delta);

		this.particles.update(time, delta);

		this.bosses.forEach((boss: Boss, index: number) => {
			boss.update(time, delta);
			boss.setAlpha(0.6 + 0.4 * this.dayTimeSmooth * (boss.dayTime ? -1 : 1));
		});


		// Bullets

		this.debugText.setText(`FPS: ${this.game.loop.actualFps.toFixed()}`);

		this.playerBullets.forEach((bullet: PlayerBullet, index: number) => {
			if (!bullet.active) {
				return;
			}

			bullet.update(time, delta);
			bullet.setDepth(PLAYER_BULLET_LAYER - 0/10000 * bullet.y/this.H);

			if (bullet.dayTime)
				bullet.setAlpha(0.2 + 0.8 * this.dayTimeSmooth);
			else
				bullet.setAlpha(1.0 - 0.8 * this.dayTimeSmooth);

			// Collision with boss
			this.bosses.forEach((boss: Boss, index: number) => {
				if (boss.dayTime == bullet.dayTime && boss.insideBody(bullet)) {
					boss.damage();
					bullet.kill();

					if (boss.alive) {
						this.shakeCamera = true;
						this.addEvent(400, () => {
							this.shakeCamera = false;
						});
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
			bullet.setDepth(layer - 0/10000 * bullet.y/this.H);

			if (bullet.dayTime)
				bullet.setAlpha(1.0 - 0.8 * this.dayTimeSmooth);
			else
				bullet.setAlpha(0.2 + 0.8 * this.dayTimeSmooth);

			// Collision with player
			if (this.player.dayTime != bullet.dayTime && this.player.insideBody(bullet)) {
				this.player.damage();
				bullet.kill();

				// if (this.player.alive) {
				// 	this.shakeCamera = true;
				// 	this.addEvent(400, () => {
				// 		this.shakeCamera = false;
				// 	});
				// }
			}
		});


		// Camera shake

		if (this.shakeCamera) {
			this.cameras.main.x = Math.sin(100 * time/1000);
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


	onPlayerDefeated() {
		this.introPlaying = true;
		this.shakeCamera = true;

		this.addEvent(3000, () => {
			this.shakeCamera = false;

			this.addEvent(1000, () => {
				this.outroPlaying = true;
			});
		});
	}

	onBossDefeated() {
		this.introPlaying = true;
		this.shakeCamera = true;

		this.addEvent(3000, () => {
			this.shakeCamera = false;

			this.addEvent(1000, () => {
				this.outroPlaying = true;
			});
		});
	}

	onDayToggle() {
		if ((this.dayTime ? 1 : 0) == this.dayTimeLinear) {
			this.dayTime = !this.dayTime;
			this.player.onDayToggle();
		}
	}


	spawnPlayerBullet(dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2): PlayerBullet | null {
		let i;
		for (i = 0; i < PLAYER_BULLET_COUNT; i++) {
			this.pbIndex = (this.pbIndex + 1) % PLAYER_BULLET_COUNT;

			if (!this.playerBullets[this.pbIndex].active) {
				this.playerBullets[this.pbIndex].spawn(dayTime, origin, direction);
				return this.playerBullets[this.pbIndex];
			}
		}
		return null;
	}

	spawnEnemyBullet(dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2): EnemyBullet | null {
		let i;
		for (i = 0; i < ENEMY_BULLET_COUNT; i++) {
			this.ebIndex = (this.ebIndex + 1) % ENEMY_BULLET_COUNT;

			if (!this.enemyBullets[this.ebIndex].active) {
				this.enemyBullets[this.ebIndex].spawn(dayTime, origin, direction);
				return this.enemyBullets[this.ebIndex];
			}
		}
		return null;
	}

	spawnBulletCircle(dayTime: boolean, origin: Phaser.Math.Vector2, speed: number, amount: number, indexOffset: number=0) {
		let dir = new Phaser.Math.Vector2();
		let bullets: EnemyBullet[] = [];
		for (let i = 0; i < amount; i++) {

			dir.setToPolar((360 * (i+indexOffset) / amount) * Phaser.Math.DEG_TO_RAD, speed);
			let bullet = this.spawnEnemyBullet(dayTime, origin, dir);
			if (bullet) {
				bullets.push(bullet);
			}
		}
		return bullets;
	}

	spawnBulletPattern(key, event) {
		const origin = new Phaser.Math.Vector2(this.CX, 0.5 * this.CY);
		let dayTime = !this.dayTime;

		clearTimeout(this.currentTimeout);

		if (event.key == 1) {
			this.spawnBulletCircle(dayTime, origin, 80, 60, 0);
			this.spawnBulletCircle(dayTime, origin, 80, 60, 0);
		}
		else if (event.key == 2) {
			this.spawnBulletCircle(dayTime, origin, 3.0*30, 20, 0.0);
			this.spawnBulletCircle(dayTime, origin, 3.5*30, 20, 0.0);
			this.spawnBulletCircle(dayTime, origin, 4.0*30, 20, 0.0);
			this.spawnBulletCircle(dayTime, origin, 4.5*30, 20, 0.0);
			this.spawnBulletCircle(dayTime, origin, 5.0*30, 20, 0.0);
			this.spawnBulletCircle(dayTime, origin, 5.5*30, 20, 0.0);
		}
		else if (event.key == 3) {
			const func = () => {
				this.spawnBulletCircle(dayTime, origin, 3*25, 30, 0.0);
				this.spawnBulletCircle(dayTime, origin, 4*25, 30, 0.5);
				this.spawnBulletCircle(dayTime, origin, 5*25, 30, 0.0);
				this.spawnBulletCircle(dayTime, origin, 6*25, 30, 0.5);
				this.spawnBulletCircle(dayTime, origin, 7*25, 30, 0.0);
				clearTimeout(this.currentTimeout);
				this.currentTimeout = setTimeout(func, 3000);
			}
			func();
		}
		else if (event.key == 4) {
			let temp = new Phaser.Math.Vector2();

			for (let j = 0; j < 32; j++) {
				setTimeout(() => {
					let now = this.time.now;
					for (let i = 0; i < 32; i++) {
						let bullet = this.spawnEnemyBullet(dayTime, origin, temp);

						if (bullet) {
							bullet.movementFunction = function(time: number) {
								let t = (time - now) / 1000;
								let radius = 100 * t;
								let angle = (i*360/32 + 15*t -15*j) * Phaser.Math.DEG_TO_RAD;
								temp.setToPolar(angle, radius);
								this.x = origin.x + temp.x;
								this.y = origin.y + temp.y;
							};
						}
					}
				}, 500*j);
			}
		}
		else if (event.key == 5) {}
		else if (event.key == 6) {}
		else if (event.key == 7) {}
		else if (event.key == 8) {}
		else if (event.key == 9) {}
		else if (event.key == 0) {}
	}

}
