import { GameScene } from "../scenes/GameScene";
import { interpolateColor } from "../utils";
import BendWaves2 from "../pipelines/BendWavesPostFX2";

const EDGE = 0.235;
const PAD = 13;
const FONT_SIZE = 25;
const STROKE = 3;


export class UI extends Phaser.GameObjects.Container {
	public scene: GameScene;

	private background: Phaser.GameObjects.Image;

	private outlineNight: Phaser.GameObjects.Image;
	private outlineDay: Phaser.GameObjects.Image;

	private clock: Phaser.GameObjects.Sprite;

	private health: Phaser.GameObjects.Container;
	private healthBox: Phaser.GameObjects.Image;
	private healthBg: Phaser.GameObjects.Rectangle;
	private healthBar: Phaser.GameObjects.Rectangle;

	private hearts: Phaser.GameObjects.Image[];

	public debug: Phaser.GameObjects.Text;
	public world: Phaser.GameObjects.Text;
	public stage: Phaser.GameObjects.Text;
	public highscore: Phaser.GameObjects.Text;
	public score: Phaser.GameObjects.Text;
	public gameover: Phaser.GameObjects.Container;
	public playagain: Phaser.GameObjects.Text;


	constructor(scene: GameScene) {
		super(scene);
		this.scene = scene;
		scene.add.existing(this);

		const cx = scene.CX;
		const cy = scene.CY;

		const rx = (1-EDGE)*scene.W + PAD;
		const lx = EDGE*scene.W - PAD;

		this.background = scene.add.image(cx, cy, "ui_bg");
		scene.containToScreen(this.background);
		this.add(this.background);

		this.outlineDay = scene.add.image(0, cy, "america_outline2");
		this.outlineDay.setOrigin(0, 0.5);
		// this.outlineDay.setBlendMode(Phaser.BlendModes.ADD);
		this.outlineDay.setScale(0.5);
		this.add(this.outlineDay);

		this.outlineNight = scene.add.image(0, cy, "owl_outline2");
		this.outlineNight.setOrigin(0, 0.5);
		// this.outlineNight.setBlendMode(Phaser.BlendModes.ADD);
		this.outlineNight.setScale(0.5);
		this.add(this.outlineNight);


		// Clock

		this.clock = scene.add.sprite(0.99*scene.W, 0.55 * scene.H, "ui_clock", 0);
		this.clock.setOrigin(1, 0.5);
		this.clock.setScale(0.5);
		this.add(this.clock);


		// Boss health

		this.health = scene.add.container();
		this.health.setVisible(false);
		this.add(this.health);

		this.healthBox = scene.add.image(cx, 0.06*cy, "ui_healthbar");
		this.healthBox.setScale(0.5);
		this.health.add(this.healthBox);

		const w = this.healthBox.displayWidth - 5;
		const h = this.healthBox.displayHeight - 5;

		this.healthBg = scene.add.rectangle(this.healthBox.x - w/2, this.healthBox.y - h/2, w, h, 0);
		this.healthBg.setOrigin(0);
		this.healthBg.setAlpha(0.6);
		this.health.add(this.healthBg);

		this.healthBar = scene.add.rectangle(this.healthBox.x - w/2, this.healthBox.y - h/2, w, h, 0);
		this.healthBar.setOrigin(0);
		this.health.add(this.healthBar);

		this.health.bringToTop(this.healthBox);


		// Hearts

		let hx = (1 - EDGE/2) * scene.W;
		let hy = 0.9 * scene.H;

		this.hearts = [];
		for (let i = 0; i < 3; i++) {
			let x = hx - 65 + 65*i;

			let heartBg = scene.add.image(x, hy, "ui_heart_empty");
			heartBg.setScale(0.5);
			this.add(heartBg);

			let heart = scene.add.image(x, hy, "ui_heart");
			heart.setScale(0.5);
			this.add(heart);
			this.hearts.push(heart);
		}


		// Text

		this.world = scene.createText(lx/2, 6*PAD, 1.4*FONT_SIZE, "#000", "World-1");
		this.world.setOrigin(0.5);
		this.world.setStroke("#FFFFFF", STROKE);
		this.add(this.world);

		// this.stage = scene.createText(lx/2, scene.H-4*PAD, FONT_SIZE, "#000", "Stage-1");
		// this.stage.setOrigin(0.5);
		// this.stage.setStroke("#FFFFFF", STROKE);
		// this.add(this.stage);


		let ty = 0.7 * PAD;

		let hsLabel = scene.createText(rx, ty, FONT_SIZE, "#000", "High score");
		hsLabel.setOrigin(0);
		hsLabel.setStroke("#FFFFFF", STROKE);
		this.add(hsLabel);

		ty += 1.0 * FONT_SIZE;
		this.highscore = scene.createText(rx, ty, FONT_SIZE, "#000", "00000");
		this.highscore.setOrigin(0, 0);
		this.highscore.setStroke("#FFFFFF", STROKE);
		this.add(this.highscore);

		ty += 1.4 * FONT_SIZE;
		let sLabel = scene.createText(rx, ty, FONT_SIZE, "#000", "Score");
		sLabel.setOrigin(0, 0);
		sLabel.setStroke("#FFFFFF", STROKE);
		this.add(sLabel);

		ty += 1.0 * FONT_SIZE;
		this.score = scene.createText(rx, ty, FONT_SIZE, "#000", "00000");
		this.score.setOrigin(0, 0);
		this.score.setStroke("#FFFFFF", STROKE);
		this.add(this.score);


		let livesLabel = scene.createText(rx, hy - 2*PAD, FONT_SIZE, "#000", "Lives");
		livesLabel.setOrigin(0, 1);
		livesLabel.setStroke("#FFFFFF", STROKE);
		this.add(livesLabel);

		this.debug = scene.createText(0, 0, FONT_SIZE/2, "#FFF", "LMAO");
		this.debug.setOrigin(0, 0);
		// this.debug.setStroke("#FFFFFF", STROKE);
		this.add(this.debug);


		this.gameover = scene.add.container(cx, cy);
		this.gameover.setVisible(false);
		this.gameover.setAlpha(0);
		this.add(this.gameover);

		let gameover = scene.createText(0, -2*PAD, 2.7*FONT_SIZE, "#FFF", "GAME OVER");
		gameover.setOrigin(0.5);
		gameover.setStroke("#000", 8);
		this.gameover.add(gameover);

		this.playagain = scene.createText(0, 3*PAD, FONT_SIZE, "#000", "Tap to play again");
		this.playagain.setOrigin(0.5);
		this.playagain.setStroke("#FFFFFF", STROKE);
		this.gameover.add(this.playagain);


		this.setScore(0);
	}


	update(time: number, delta: number, dayTimeSmooth: number) {
		this.outlineDay.setAlpha(0.25 * (dayTimeSmooth));
		this.outlineNight.setAlpha(0.25 * (1 - dayTimeSmooth));

		this.background.setTint( interpolateColor(0xb8c5ff, 0xf7e3af, dayTimeSmooth) );
		this.healthBox.setTint( interpolateColor(0xDDEEFF, 0x110900, dayTimeSmooth) );
		this.healthBar.fillColor = interpolateColor(0xd81b60, 0x43a047, dayTimeSmooth);
		this.healthBg.fillColor = interpolateColor(0, 0xAABBFF, dayTimeSmooth);

		this.clock.setFrame(this.scene.dayTime ? 0 : 1);
		this.gameover.alpha += Phaser.Math.Clamp((this.gameover.visible ? 1 : 0) - this.gameover.alpha, -delta/1000, delta/1000);
		this.playagain.setScale(1.0 + 0.02*Math.sin(5*time/1000));
	}

	setBossHealth(healthPerc: number) {
		this.health.setVisible(true);
		this.healthBar.width = healthPerc * (this.healthBox.displayWidth - 5);
	}

	setPlayerHealth(health: number) {
		for (let i = 0; i < 3; i++) {
			this.hearts[i].setVisible(i < health);
		}
	}

	setScore(score: number) {
		this.score.setText(score.toString().padStart(8, '0'));
		this.highscore.setText(score.toString().padStart(8, '0'));
	}

	showGameover() {
		this.gameover.setVisible(true);
	}
}
