import { GameScene } from "../scenes/GameScene";
import { Character } from "./Character";
import { Bullet } from "./Bullet";
import { interpolateColor } from "../utils";

const ACCELERATION = 30;
const MAX_SPEED = 200;
const HURT_DURATION = 2.0;
const TAPPING_TIMER = 0.2;
const SHOOTING_TIMER = 0.2;
const DEATH_DURATION = 3.0;


export class Player extends Character {
	public scene: GameScene;

	// Input
	private keys: any;
	private isTouched: boolean;
	private isTapped: boolean;
	private tappedTimer: number;

	// Graphics
	private graphics: Phaser.GameObjects.Graphics;
	private sprite: Phaser.GameObjects.Sprite;
	private origScale: number = 0.3;

	// Movement
	private inputVec: Phaser.Math.Vector2; // Just used for keyboard -> vector
	private touchPos: Phaser.Math.Vector2;
	public velocity: Phaser.Math.Vector2;
	public facing: Phaser.Math.Vector2; // Used to determine throwing dir
	private border: { [key: string]: number }; 

	// Health
	private bodyArea: Phaser.Geom.Circle;

	// Shooting
	public dayTimeSmooth: number;
	public shootTimer: number;


	constructor(scene: GameScene, x: number, y: number) {
		super(scene, x, y, false);

		// Graphics
		this.sprite = scene.add.sprite(0, 0, "player", 0);
		this.sprite.setScale(this.origScale);
		this.add(this.sprite);

		// Debug graphics
		this.graphics = scene.add.graphics();
		// this.graphics.setVisible(false);
		this.add(this.graphics);

		// Movement
		this.keys = scene.input.keyboard.addKeys({
			up: 'W',		up2: 'Up',
			down: 'S',		down2: 'Down',
			left: 'A',		left2: 'Left',
			right: 'D',		right2: 'Right',
		});

		// Input
		this.isTouched = false;
		this.isTapped = false;
		this.tappedTimer = 0;
		this.inputVec = new Phaser.Math.Vector2(0, 0);
		this.touchPos = new Phaser.Math.Vector2(0, 0);
		this.velocity = new Phaser.Math.Vector2(0, 0);
		this.facing = new Phaser.Math.Vector2(0, -1);
		this.border = {
			left: 0.26 * scene.W,
			right: 0.74 * scene.W,
			top: 0,
			bottom: scene.H - 10,
		};

		// Game
		this.bodyArea = new Phaser.Geom.Circle(0, 5, 5);
		this.health = 3;
		this.dayTimeSmooth = this.dayTime ? 1 : 0;
		this.shootTimer = 0;


		// Intro
		this.y += 170;
	}

	update(time: number, delta: number) {
		if (this.alive) {
			this.dayTime = this.scene.dayTime;
			this.dayTimeSmooth = this.scene.dayTimeSmooth;


			// Movement
			this.handleInput();

			this.inputVec.limit(1);
			// this.inputVec.normalize();
			this.inputVec.scale(ACCELERATION);
			this.velocity.scale(0.85); // Friction
			this.velocity.add(this.inputVec);
			this.velocity.limit(MAX_SPEED);

			this.tappedTimer -= delta/1000;
			if (this.isTapped && this.tappedTimer > TAPPING_TIMER/2) {
				this.velocity.reset();
			}

			this.x += this.velocity.x / 60;// * delta/1000;
			this.y += this.velocity.y / 60;// * delta/1000;

			// Border collision
			if (this.x < this.border.left) {
				this.x = this.border.left;
			}
			if (this.x > this.border.right) {
				this.x = this.border.right;
			}
			if (this.y < this.border.top) {
				this.y = this.border.top;
			}
			if (this.y > this.border.bottom) {
				this.y = this.border.bottom;
			}


			// Animation

			// Flipping
			this.sprite.scaleX = this.origScale * (-1 + 2*this.dayTimeSmooth);
			this.sprite.setFrame(this.dayTimeSmooth > 0.5 ? 0 : 1);
			this.sprite.angle = (5 * this.velocity.x * Phaser.Math.DEG_TO_RAD);

			// Shooting bullets
			this.shootTimer += delta/1000;
			if (this.shootTimer > SHOOTING_TIMER) {
				this.shootTimer = 0;

				let pos = new Phaser.Math.Vector2(this.x, this.y - 0.4*this.sprite.displayHeight);
				let dir = this.facing.clone();
				dir.setLength(300);
				// const angle = 20;

				// pos.add({x:-50,y:0})
				this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate( -angle * Phaser.Math.DEG_TO_RAD);
				// pos.add({x:50,y:0})
				// this.emit("shoot", this.dayTime, pos, dir);
				// dir.rotate(2*angle * Phaser.Math.DEG_TO_RAD);
				// pos.add({x:50,y:0})
				// this.emit("shoot", this.dayTime, pos, dir);
			}
		}


		// Hurt animation
		this.hurtTimer -= delta/1000;
		if (this.hurtTimer > 0 || !this.alive) {
			let blink = (Math.sin(50*time/1000) > 0);
			blink = true;
			this.sprite.setTint(blink ? 0xFF0000 : 0xFFFFFF);
			this.sprite.setAlpha(0.75);
			// this.sprite.setOrigin(0.5 + 0.01 * Math.sin(35*time/1000), 0.5);
			this.hurtTimer = 0;
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
		this.graphics.fillStyle(0xFF0000, 0.75);
		this.graphics.fillCircleShape(this.bodyArea);
	}

	onDayToggle() {
		// ...
	}


	handleInput() {
		this.inputVec.reset();

		// Keyboard input to vector
		if (!this.isTouched) {
			this.inputVec.x = (this.keys.left.isDown||this.keys.left2.isDown ? -1 : 0) + (this.keys.right.isDown||this.keys.right2.isDown ? 1 : 0);
			this.inputVec.y = (this.keys.up.isDown||this.keys.up2.isDown ? -1 : 0) + (this.keys.down.isDown||this.keys.down2.isDown ? 1 : 0);
		}
		// Touch to input vector
		else {
			this.inputVec.copy(this.touchPos);
			this.inputVec.x -= this.x;
			this.inputVec.y -= this.y;
			// if (this.inputVec.length() < 8) {
				// this.inputVec.reset();
			// }
			this.inputVec.scale(1/50);
		}
	}

	touchStart(x: number, y: number) {
		this.isTouched = true;
		this.isTapped = false;
		this.touchPos.x = x;
		this.touchPos.y = y;

		if (this.touchInsideBody(x, y)) {
			this.isTapped = true;
			this.tappedTimer = TAPPING_TIMER;
		}
	}

	touchDrag(x: number, y: number) {
		this.touchPos.x = x;
		this.touchPos.y = y;

		if (this.isTapped && !this.touchInsideBody(x, y)) {
			this.isTapped = false;
		}
	}

	touchEnd(x: number, y: number) {
		if (this.isTapped && this.tappedTimer > 0) {
			this.emit("toggle");
		}

		this.isTouched = false;
		this.isTapped = false;
	}


	touchInsideBody(x: number, y: number) {
		return Phaser.Math.Distance.Between(this.x, this.y, x, y) < 0.5 * this.sprite.displayHeight;
	}

	insideBody(bullet: Bullet): boolean {
		return this.checkCollision(this.bodyArea, bullet);

		// let angle = Phaser.Math.Angle.BetweenPoints(this, bullet);
		// let bAngle = bullet.angle * Phaser.Math.DEG_TO_RAD;

		// // bullet.displayWidth;

		// // let r = Math.sqrt(1 / ( 2*Math.pow(Math.sin(angle), 2) + 2*Math.pow(Math.cos(angle), 2) ));

		// let xRadius = 86/256/2*bullet.sprite.displayWidth;
		// let yRadius = 50/256/2*bullet.sprite.displayHeight;

		// let calcAngle = angle - bAngle;
		// let radiuskn = (yRadius * xRadius) / (Math.sqrt(Math.pow(Math.sin(calcAngle) * xRadius, 2)+Math.pow(Math.cos(calcAngle) * yRadius, 2)));

		// this.scene.debugText.setText(`angle: ${angle.toFixed(2)}\nbAngle: ${bAngle.toFixed(2)}\nxRadius: ${xRadius}\nyRadius: ${yRadius}\ncalcAngle: ${calcAngle.toFixed(2)}\nradiuskn: ${radiuskn.toFixed(2)}`);

		// let dist = Phaser.Math.Distance.BetweenPoints(this, bullet);
		// return (dist < radiuskn);

		// return this.checkCollision(this.bodyArea, bullet);
		// return false;
	}
}
