import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";
import { Particles } from "../components/Particles";
import { Player } from "../components/Player";
import { Player1 } from "../components/Player1";
import { Player2 } from "../components/Player2";
import { Dragon } from "../components/Dragon";
import { Egg } from "../components/Egg";
import BendWaves from "../pipelines/BendWavesPostFX";


export class MainScene extends BaseScene {
	level: number;
	isRunning: boolean;

	lava: Phaser.GameObjects.Image;
	ground: Phaser.GameObjects.Image;
	pika: Phaser.GameObjects.Image;
	particles: Particles;

	player1: Player1;
	player2: Player2;
	dragon: Dragon;
	eggs: Egg[];

	public introPlaying: boolean;
	public outroPlaying: boolean;
	public shakeCamera: boolean;

	public EGG_SPEED: number;
	public EGG_HEALTH: number;


	constructor() {
		super({key: "MainScene"});
	}

	init(data): void {
		this.level = data.level;
		this.isRunning = true;
	}

	create(): void {
		this.fade(false, 1000, 0x000000);

		this.introPlaying = true;
		this.outroPlaying = false;
		this.shakeCamera = false;

		// Adding an image
		this.lava = this.add.image(this.CX, this.CY, "lava");
		this.lava.setPostPipeline(BendWaves);
		this.pika = this.add.image(this.CX, this.CY, "pika");
		this.ground = this.add.image(this.CX, this.CY, "ground");
		this.pika.setTint(0xFF0000);
		this.pika.setBlendMode(Phaser.BlendModes.ADD);
		this.pika.setAlpha(0);
		this.containToScreen(this.lava);
		this.containToScreen(this.ground);
		this.containToScreen(this.pika);

		// Create Player-object and pass this/scene to it
		this.player1 = new Player1(this, 0.1*this.W, this.CY);
		this.player2 = new Player2(this, 0.9*this.W, this.CY);

		this.dragon = new Dragon(this, this.CX, this.CY, this.level);
		this.dragon.setDepth(10);

		this.eggs = [];


		this.particles = new Particles(this);
		this.particles.setDepth(9);


		// Instructions
		this.createText(0, 0, 12, this.weights.regular, "#DDD", "WASD+F");
		this.createText(this.W, 0, 12, this.weights.regular, "#DDD", "Arrow+L").setOrigin(1,0);


		// Callbacks
		this.player1.on("grab", this.onGrab.bind(this, this.player1));
		this.player2.on("grab", this.onGrab.bind(this, this.player2));
		this.player1.on("throw", this.onThrow.bind(this, this.player1));
		this.player2.on("throw", this.onThrow.bind(this, this.player2));
		this.player1.on("sweat", this.onSweat.bind(this, this.player1));
		this.player2.on("sweat", this.onSweat.bind(this, this.player2));
		this.dragon.on("shoot", this.onShootEgg.bind(this));
		this.dragon.on("defeated", this.onDragonDefeated.bind(this));


		// Level settings

		if (this.level == 0) {

			this.player1.HOLD_DURATION = 14;
			this.player2.HOLD_DURATION = 14;
			this.dragon.health = 2;
			this.dragon.SHOOTING_TIMER = 5.5;
			this.EGG_SPEED = 100;
			this.EGG_HEALTH = 6;
			this.dragon.following = this.player2;

		}
		else if (this.level == 1) {

			this.player1.HOLD_DURATION = 9;
			this.player2.HOLD_DURATION = 9;
			this.dragon.health = 3;
			this.dragon.SHOOTING_TIMER = 4.5;
			this.EGG_SPEED = 140;
			this.EGG_HEALTH = 5;
			this.dragon.following = this.player1;

		}
		else if (this.level == 2) {

			this.player1.HOLD_DURATION = 7;
			this.player2.HOLD_DURATION = 7;
			this.dragon.health = 4;
			this.dragon.SHOOTING_TIMER = 4.0;
			this.EGG_SPEED = 180;
			this.EGG_HEALTH = 4;
			this.dragon.following = this.player2;

		}
		else if (this.level == 3) {

			this.player1.HOLD_DURATION = 5;
			this.player2.HOLD_DURATION = 5;
			this.dragon.health = 5;
			this.EGG_SPEED = 220;
			this.EGG_HEALTH = 3;
			this.dragon.SHOOTING_TIMER = 3.0;
			this.dragon.following = this.player1;

			this.lava.resetPostPipeline();
			this.cameras.main.setPostPipeline(BendWaves);

		}

		this.dragon.shootTimer = this.dragon.SHOOTING_TIMER - 2;


		// Touch controls

		this.input.addPointer(2);

		let leftArea = this.add.rectangle(0, 0, 0.4*this.W, this.H, 0xFFFFFF).setOrigin(0).setAlpha(0.001);
		leftArea.setInteractive({ useHandCursor: true, draggable: true });
		leftArea.on('dragstart', (pointer: Phaser.Input.Pointer) => {
			this.player1.touchStart(pointer.x, pointer.y);
		});
		leftArea.on('drag', (pointer: Phaser.Input.Pointer) => {
			this.player1.touchDrag(pointer.x, pointer.y);
		});
		leftArea.on('dragend', (pointer: Phaser.Input.Pointer) => {
			this.player1.touchEnd(pointer.x, pointer.y);
		});

		let rightArea = this.add.rectangle(this.W, 0, 0.4*this.W, this.H, 0xFFFFFF).setOrigin(1,0).setAlpha(0.001);
		rightArea.setInteractive({ useHandCursor: true, draggable: true });
		rightArea.on('dragstart', (pointer: Phaser.Input.Pointer) => {
			this.player2.touchStart(pointer.x, pointer.y);
		});
		rightArea.on('drag', (pointer: Phaser.Input.Pointer) => {
			this.player2.touchDrag(pointer.x, pointer.y);
		});
		rightArea.on('dragend', (pointer: Phaser.Input.Pointer) => {
			this.player2.touchEnd(pointer.x, pointer.y);
		});

		// Skip
		this.input.keyboard.on("keydown-ESC", () => {
			this.scene.start("OverworldScene", { level: this.level+1 });
		}, this);


		this.showIntro();
	}

	update(time: number, delta: number) {
		this.player1.update(time, delta);
		this.player2.update(time, delta);
		this.dragon.update(time, delta);

		this.pika.setAlpha(0.1 + 0.1 * Math.sin(4*time/1000));

		this.particles.update(time, delta);

		if (Math.random() < 0.1) {
			const k = 0.23;
			this.particles.createLava(
				this.W * (k + (1-2*k) * Math.random()),
				this.H * Math.random()
			);
		}

		this.eggs.forEach((egg: Egg, index: number) => {
			// Hack to remove egg from list when destroyed
			if (!egg.scene) {
				this.eggs.splice(index, 1);
				if (egg === this.dragon.following) {
					this.followClosestTarget();
				}
				return;
			}
			if (egg === this.dragon.following && !egg.alive) {
				this.followClosestTarget();
			}

			egg.update(time, delta);

			// Collision with dragon
			if (this.dragon.insideWeakSpot(egg)) {
				this.dragon.damage();
				this.dragon.following = egg.grabOwner; // Enraged
				egg.onDamage(999);

				if (this.dragon.alive) {
					this.shakeCamera = true;
					this.addEvent(400, () => {
						this.shakeCamera = false;
					});
				}
			}
			else if (this.dragon.insideHead(egg)) {
				egg.onDamage(999);
			}
		});


		// Smarter dragon
		if (this.dragon.mood == "angry") {
			if (this.dragon.following == this.player1) {
				if (this.player2.heldEgg && !this.player1.heldEgg) {
					this.dragon.following = this.player2;
				}
			}
			else if (this.dragon.following == this.player2) {
				if (this.player1.heldEgg && !this.player2.heldEgg) {
					this.dragon.following = this.player1;
				}
			}
		}


		// Camera shake

		if (this.shakeCamera) {
			this.cameras.main.x = Math.sin(100 * time/1000);

			this.particles.createLava(
				this.dragon.x + 40 * (-1+2*Math.random()),
				this.dragon.y + 40 * (-1+2*Math.random())
			);
		}
		else {
			this.cameras.main.x = 0;

			if (Math.random() < 0.1) {
				this.particles.createLava(
					this.dragon.x + 20 * (-1+2*Math.random()),
					this.dragon.y + 20 * (-1+2*Math.random())
				);
			}
		}


		// Check ending
		if (this.isRunning && this.outroPlaying && this.player1.y > this.H && this.player2.y > this.H) {
			this.progress();
			this.isRunning = false;
		}

	}


	// On dragon egg-timer
	onShootEgg() {
		let x = this.dragon.x + 30 * this.dragon.facing.x;
		let y = this.dragon.y + 30 * this.dragon.facing.y;
		let egg = new Egg(this, x, y, this.EGG_SPEED, this.level);
		egg.health = this.EGG_HEALTH;
		egg.grabOwner = this.dragon;
		egg.velocity.x = this.EGG_SPEED*this.dragon.facing.x;
		egg.velocity.y = this.EGG_SPEED*this.dragon.facing.y;

		egg.on("shells", (amount: number) => {
			const color = [0x699efc, 0xde7c70, 0xbdc3c7, 0xffbf00][this.level];
			this.particles.createShells(egg.x, egg.y, amount, color);
		});

		this.eggs.push(egg);
		if (this.dragon.following === null || this.dragon.following.scene === null) {
			this.dragon.following = egg;
		}
	}

	// On player clicking the grab-key
	onGrab(player: Player) {
		for (let egg of this.eggs) {
			// Checks proximity
			if (player.canGrab(egg)) {
				player.heldEgg = egg;
				egg.grabOwner = player;
				egg.onGrab(player);

				if (this.dragon.following == egg && this.dragon.mood == "normal") {
					this.dragon.following = player;
				}
				return;
			}
		}
	}

	// On player clicking the grab-key while holding an egg
	onThrow(player: Player) {
		if (player.heldEgg) {
			player.heldEgg.onThrow(player);

			if (this.dragon.following == player && this.dragon.mood == "angry") {
				this.dragon.following = player.heldEgg;
			}
			player.heldEgg = null;
		}
	}

	onDragonDefeated() {
		this.introPlaying = true;
		this.shakeCamera = true;

		this.addEvent(this.dragon.DEATH_DURATION*1000, () => {
			this.shakeCamera = false;

			this.addEvent(1000, () => {
				this.outroPlaying = true;
			});
		});
	}

	// On player sweating
	onSweat(player: Player) {
		this.particles.createSweat(player.x, player.y, player.facing.x < 0);
	}

	followClosestTarget() {
		// Follow nearest player
		if (this.dragon.facing.x < 0) {
			this.dragon.following = this.player1;
		}
		else {
			this.dragon.following = this.player2;
		}
	}


	showIntro() {
		this.dragon.setScale(0.5);
		this.dragon.setAlpha(0);

		this.addEvent(2500, () => {
			this.shakeCamera = true;

			let tween = this.tweens.add({
				targets: [this.dragon],
				alpha: { from: 0, to: 1 },
				scaleX: { from: 0.5, to: 1 },
				scaleY: { from: 0.5, to: 1 },
				ease: 'Cubic.Out',
				duration: 2000,
				delay: 1000,
			});
			tween.on('complete', () => {
				this.introPlaying = false;
				this.shakeCamera = false;
			}, this);
		});
	}

	progress() {
		this.fade(true, 500, 0xFFFFFF);
		this.addEvent(550, () => {
			this.scene.start("OverworldScene", { level: this.level+1 });
		});
	}
}
