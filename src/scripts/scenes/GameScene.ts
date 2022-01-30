import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";
import { Music } from "./../components/Music";
import { Background } from "../components/Background";
import { UI } from "../components/UI";
import { Particles } from "../components/Particles";
import { Player } from "../components/Player";
import { Boss } from "../components/Boss";
import { Bullet } from "../components/Bullet";
import { PlayerBullet } from "../components/PlayerBullet";
import { EnemyBullet } from "../components/EnemyBullet";
import { audios } from "../assets";

const PLAYER_BULLET_COUNT = 1000;
const ENEMY_BULLET_COUNT = 5000;

const BACKGROUND_LAYER = 0;
const ENEMY_LAYER = 1;
const BOSS_LAYER = 2;
const PLAYER_LAYER = 3;
const PLAYER_BULLET_LAYER = 4;
const ENEMY_GLOW_BACK_LAYER = 5;
const ENEMY_GLOW_FRONT_LAYER = 6;
const ENEMY_BULLET_BACK_LAYER = 7;
const ENEMY_BULLET_FRONT_LAYER = 8;
const UI_LAYER = 9;
const FLASH_LAYER = 10;


export class GameScene extends BaseScene {
	public isRunning: boolean;
	public dayTime: boolean; // Day is true, Night is false
	public dayTimeLinear: number;
	public dayTimeSmooth: number;

	// public level: number;
	private currentTimeout: ReturnType<typeof setTimeout>;

	// Background
	public background: Background;

	// UI texts
	private ui: UI;

	// Characters
	private player: Player;
	private bosses: Boss[];

	// Bullets
	private playerBullets: PlayerBullet[];
	private enemyBullets: EnemyBullet[];
	private pbIndex: number;
	private ebIndex: number;

	private particles: Particles;
	private flashRect: Phaser.GameObjects.Rectangle;

	public introPlaying: boolean;
	public outroPlaying: boolean;
	public shakeCamera: boolean;

	// public sounds: Map<string, Phaser.Sound.BaseSound>;
	public sounds: {[key: string]: Phaser.Sound.WebAudioSound};
	public rapidSounds: {[key: string]: any};
	public musicDay: Phaser.Sound.WebAudioSound;
	public musicNight: Phaser.Sound.WebAudioSound;


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


		// Characters
		this.player = new Player(this, this.CX, this.CY);
		this.player.setDepth(PLAYER_LAYER);

		this.bosses = [];
		for (let i = 0; i < 1; i++) {
			// let dayTime = (i%2 == 0);
			let dayTime = true;
			let boss = new Boss(this, this.CX, 0.3*this.H, dayTime);
			boss.setDepth(BOSS_LAYER);
			boss.following = this.player;

			boss.on("shoot", this.spawnEnemyBullet.bind(this));
			boss.on("defeated", this.onBossDefeated.bind(this));
			this.bosses.push(boss);


			boss.patterns = [
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  90, wait: 0.2}, // Triple 5s
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   4, offset: 0, degrees:  10*4, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   5, offset: 0, degrees:  10*5, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   6, offset: 0, degrees:  10*6, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   7, offset: 0, degrees:  10*7, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   8, offset: 0, degrees:  10*8, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   9, offset: 0, degrees:  10*9, wait: 2},

				// 5-4-5 at different speeds
				{type: "enemy-day", radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0},
				{type: "enemy-day", radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
				{type: "enemy-day", radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 1},

				// Huge ring
				{type: "enemy-night", radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 2},

				{type: "enemy-day",   radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0}, // Triple 5s
				{type: "enemy-day",   radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
				{type: "enemy-day",   radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 2},

				{type: "enemy-night",   radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0}, // Triple 5s
				{type: "enemy-night",   radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
				{type: "enemy-night",   radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 1},

				{type: "enemy-day",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 2}, // Ring
			];

			boss.patterns = [
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 0}, // Ring
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
				{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
				{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
				{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				{type: "enemy-night",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 0}, // Ring
			];

			boss.patterns = [
				{type: "enemy-day", radius: 8, speed: 180, amount: 30, offset: 35, degrees: 60, wait: 0},
				{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
				{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
				{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
				{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
				{type: "enemy-day", radius: 8, speed: 180, amount: 30, offset: 325, degrees: 60, wait: 0},
				{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
				{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
				{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
				{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
			];

			// boss.patterns = [
			// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
			// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
			// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
				
			// 	{type: "enemy-night", radius:  6, speed: 300, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating Speeds
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
			// 	{type: "enemy-night", radius:  6, speed: 300, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
			// 	{type: "enemy-night", radius:  6, speed: 300, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
			// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
			// ];

			// boss.patterns = [];
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
		this.player.on("defeat", this.onPlayerDefeat.bind(this));


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
		touchArea.on('pointerdown', (pointer: Phaser.Input.Pointer, localX: number, localY: number, event: Phaser.Types.Input.EventData) => {
			if (!this.isRunning) {
				this.onDayToggle();
			}
		});

		// Skip
		// this.input.keyboard.on("keydown-ESC", () => {
			// this.scene.start("OverworldScene", { level: this.level+1 });
		// }, this);

		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', this.onDayToggle, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO).on('down', this.screenWipe, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT).on('down', this.spawnBulletPattern, this);
		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE).on('down', this.spawnBulletPattern, this);


		// Sounds

		this.loadSounds();
		if (!this.sounds.flightLoop.isPlaying) {
			this.sounds.flightLoop.setLoop(true);
			this.sounds.flightLoop.play();
		}
		else {
			console.log("NO LOOP");
		}

		this.musicDay.play();
		this.musicNight.play();


		// this.showIntro();
	}

	update(time: number, delta: number) {
		const swapDur = 2 * delta/1000;
		this.dayTimeLinear += Phaser.Math.Clamp( (this.dayTime ? 1 : 0) - this.dayTimeLinear, -swapDur, swapDur );
		this.dayTimeSmooth = Phaser.Math.Easing.Back.InOut(this.dayTimeLinear, 0.8);

		this.musicDay.volume   = 0.3 * (0.1 + 0.9 * this.dayTimeSmooth);
		this.musicNight.volume = 0.3 * (1.0 - 0.9 * this.dayTimeSmooth);


		this.background.update(time, delta, this.dayTimeSmooth);
		this.ui.update(time, delta, this.dayTimeSmooth);

		this.player.update(time, delta);

		this.particles.update(time, delta);

		this.bosses.forEach((boss: Boss, index: number) => {
			boss.update(time, delta);
			this.ui.setBossHealth(boss.healthPerc);
			// boss.setAlpha(0.6 + 0.4 * this.dayTimeSmooth * (boss.dayTime ? -1 : 1));
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
				bullet.setAlpha(0.2 + 0.8 * this.dayTimeSmooth);
			else
				bullet.setAlpha(1.0 - 0.8 * this.dayTimeSmooth);

			// Collision with boss
			this.bosses.forEach((boss: Boss, index: number) => {
				if (boss.alive && boss.insideBody(bullet)) {

					let amount = boss.dayTime != bullet.dayTime ? 3 : 1;
					if (amount > 1) {
						this.sounds.bossDamage2.play();
						this.sounds.graze.play();
					} else {
						this.sounds.bossDamage.play();
						this.sounds.graze.play();
					}

					boss.damage(amount);
					bullet.kill();

					// if (boss.alive) {
						// this.shakeCamera = true;
						// this.addEvent(400, () => {
							// this.shakeCamera = false;
						// });
					// }
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

			if (bullet.dayTime)
				bullet.setAlpha(1.0 - 0.8 * this.dayTimeSmooth);
			else
				bullet.setAlpha(0.2 + 0.8 * this.dayTimeSmooth);

			// Collision with player
			if (this.player.alive && this.player.dayTime != bullet.dayTime && this.player.insideBody(bullet)) {
				this.player.damage();
				this.ui.setPlayerHealth(this.player.health);
				bullet.kill();
			}
		});


		// Camera shake

		if (this.shakeCamera) {
			this.cameras.main.x = 8*Math.sin(100 * time/1000);
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

		this.rapidSounds = {
			playerShot: {
				sounds: [],
				size: 10,
				index: 0,
			},
			enemyShotDay: {
				sounds: [],
				size: 20,
				index: 0,
			},
			enemyShotNight: {
				sounds: [],
				size: 20,
				index: 0,
			},
		};

		for (let key in this.rapidSounds) {
			for (let i = 0; i < this.rapidSounds[key].size; i++) {
				for (let audio of audios) {
					if (key == audio.key) {
						let sound = this.sound.add(key, { volume: audio.volume }) as Phaser.Sound.WebAudioSound;
						this.rapidSounds[key].sounds.push(sound);
					}
				}
			}
		}


		// Music

		if (!this.musicDay) {
			this.musicDay = new Music(this, "music_day", { volume: 0.25 });
			this.musicNight = new Music(this, "music_night", { volume: 0.25 });

			this.musicDay.on('bar', this.onBar, this);
			this.musicDay.on('beat', this.onBeat, this);
		}
	}

	playRapid(key: string) {
		let rs = this.rapidSounds[key];

		rs.sounds[rs.index].play();
		console.log(rs.index);
		rs.index = (rs.index + 1) % rs.size;
	}

	onBar(bar) {
		// this.sounds.graze.play();
		// this.spawnBulletArc("enemy-day", new Phaser.Math.Vector2(this.CX, this.CY), 0, 6, 80, 60, 0);
	}

	onBeat(time) {
	}


	onPlayerDamage() {
		if (this.player.alive) {
			// this.flash();
			this.shakeCamera = true;
			this.addEvent(400, () => {
				this.shakeCamera = false;
			});
		}
	}

	onPlayerDefeat() {
		this.introPlaying = true;
		this.shakeCamera = true;

		this.addEvent(1400, () => {
			this.shakeCamera = false;

			this.addEvent(2000, () => {
				this.outroPlaying = true;
				this.isRunning = false;
				this.ui.showGameover();
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
		if (this.player.alive && this.isRunning && (this.dayTime ? 1 : 0) == this.dayTimeLinear) {
			this.dayTime = !this.dayTime;
			this.player.onDayToggle();

			if (this.dayTime) {
				this.sounds.dayShift.play();
			} else {
				this.sounds.nightShift.play();
			}
		}

		if (!this.player.visible) {
			this.fade(true, 100, 0x000000);
			this.addEvent(110, () => {
				this.scene.start("MenuScene");
			});
		}
	}


	spawnPlayerBullet(dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2): PlayerBullet | null {
		let i;
		for (i = 0; i < PLAYER_BULLET_COUNT; i++) {
			this.pbIndex = (this.pbIndex + 1) % PLAYER_BULLET_COUNT;

			if (!this.playerBullets[this.pbIndex].active) {
				this.playerBullets[this.pbIndex].spawn(dayTime, origin, direction, 16);

				// this.playRapid("playerShot");
				// this.playRapid("playerShot");
				if (this.sounds.playerShot.isPlaying) {
					this.sounds.playerShot.seek = 0.03;
				} else {
					this.sounds.playerShot.play();
				}

				return this.playerBullets[this.pbIndex];
			}
		}
		return null;
	}

	spawnEnemyBullet(dayTime: boolean, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2, radius: number): EnemyBullet | null {
		let i;
		for (i = 0; i < ENEMY_BULLET_COUNT; i++) {
			this.ebIndex = (this.ebIndex + 1) % ENEMY_BULLET_COUNT;

			if (!this.enemyBullets[this.ebIndex].active) {
				this.enemyBullets[this.ebIndex].spawn(dayTime, origin, direction, radius);

				if (dayTime) {
					if (this.sounds.enemyShotDay.isPlaying) {
						// this.sounds.enemyShotDay.seek = 0.005;
					} else {
						this.sounds.enemyShotDay.play();
						// this.sounds.enemyShotDay.rate = 0.2;
					}
				} else {
					if (this.sounds.enemyShotNight.isPlaying) {
						// this.sounds.enemyShotNight.seek = 0.005;
					} else {
						this.sounds.enemyShotNight.play();
						// this.sounds.enemyShotNight.rate = 0.2;
					}
				}

				return this.enemyBullets[this.ebIndex];
			}
		}
		return null;
	}

	spawnBullet(type: string, origin: Phaser.Math.Vector2, direction: Phaser.Math.Vector2, radius: number) {
		let spawnFunc = type.startsWith("player") ? this.spawnPlayerBullet.bind(this) : this.spawnEnemyBullet.bind(this);
		let dayTime = type.endsWith("day");
		spawnFunc(dayTime, origin, direction, radius);
	}

	spawnBulletArc(type: string, origin: Phaser.Math.Vector2, dirAngle: number, radius: number, speed: number, amount: number, offsetAngle: number=0, maxAngle?: number) {
		let dir = new Phaser.Math.Vector2();
		maxAngle = (maxAngle || 360) * Phaser.Math.DEG_TO_RAD;
		offsetAngle *= Phaser.Math.DEG_TO_RAD;

		for (let i = 0; i < amount; i++) {

			let angle = dirAngle + offsetAngle;

			if (amount > 1) {
				angle = dirAngle + offsetAngle - maxAngle/2 + maxAngle * i / (amount-1);
			}

			dir.setToPolar(angle, speed);

			this.spawnBullet(type, origin, dir, radius);
		}
	}

	debugSpawnPatter(key, event) {
		const origin = new Phaser.Math.Vector2(this.CX, 0.5 * this.CY);
		let type = !this.dayTime ? "enemy-day" : "enemy-night";
		this.spawnBulletPattern(type, origin, event.key);
	}

	spawnBulletPattern(type: string, origin: any, pattern: number) {
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
	}

	screenWipe() {
		this.sounds.death.play();

		for (let i = 0; i < ENEMY_BULLET_COUNT; i++) {
			this.enemyBullets[i].kill();
		}
	}

}
