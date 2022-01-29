import { GameScene } from "../scenes/GameScene";
import { interpolateColor } from "../utils";


export class UI extends Phaser.GameObjects.Container {
	public scene: GameScene;

	private background: Phaser.GameObjects.Image;


	constructor(scene: GameScene) {
		super(scene);
		this.scene = scene;
		scene.add.existing(this);

		const cx = scene.CX;
		const cy = scene.CY;

		this.background = scene.add.image(cx, cy, "ui_bg");
		scene.containToScreen(this.background);
		this.add(this.background);

		let textDump = scene.add.image(cx, cy, "ui_text");
		scene.containToScreen(textDump);
		this.add(textDump);
	}


	update(time: number, delta: number, dayTimeSmooth: number) {
		this.background.setTint( interpolateColor(0xb8c5ff, 0xf7e3af, dayTimeSmooth) );
	}
}
