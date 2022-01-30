import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";


export class MenuScene extends BaseScene {
	public CoverArtImp: Phaser.GameObjects.Image;
	public CoverArtAngel: Phaser.GameObjects.Image;
	public CoverArtBird: Phaser.GameObjects.Image;
	public CoverArtBg: Phaser.GameObjects.Image;

	public title: Phaser.GameObjects.Text;
	public subtitle: Phaser.GameObjects.Text;


	constructor() {
		super({key: "MenuScene"});
	}

	create(): void {
		this.fade(false, 200, 0x000000);


		this.CoverArtBg = this.add.image(this.CX, this.CY, "CoverArtBg");
		this.containToScreen(this.CoverArtBg);
		this.CoverArtBird = this.add.image(this.CX, this.CY, "CoverArtBird");
		this.containToScreen(this.CoverArtBird);
		this.CoverArtImp = this.add.image(this.CX, this.CY, "CoverArtImp");
		this.containToScreen(this.CoverArtImp);
		this.CoverArtAngel = this.add.image(this.CX, this.CY, "CoverArtAngel");
		this.containToScreen(this.CoverArtAngel);


		this.title = this.createText(this.W-50, this.H-100, 60, "#000", "Twilight Wings");
		this.title.setOrigin(1);
		this.title.setStroke("#FFFFFF", 8);

		this.subtitle = this.createText(this.W-50, this.H-50, 30, "#000", "Tap to start");
		this.subtitle.setOrigin(1);
		this.subtitle.setStroke("#FFFFFF", 3);


		// Input

		this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on('down', this.progress, this);
		this.input.on('pointerdown', this.progress, this);
	}

	update(time: number, delta: number) {
		this.CoverArtBird.x		= this.CX + 30 * Math.cos(0.4*time/1000);

		this.CoverArtImp.x		= this.CX + 5 * Math.sin(time/1000+Math.PI/4);
		this.CoverArtAngel.x	= this.CX - 5 * Math.sin(time/1000);
		this.CoverArtImp.y		= this.CY + 10 * Math.sin(0.6*time/1000+Math.PI/4);
		this.CoverArtAngel.y	= this.CY - 10 * Math.sin(0.6*time/1000);

		this.subtitle.setScale(1.0 + 0.02*Math.sin(5*time/1000));
	}

	progress() {
		this.fade(true, 1000, 0x000000);
		this.addEvent(550, () => {
			this.scene.start("GameScene");
		});
	}
}