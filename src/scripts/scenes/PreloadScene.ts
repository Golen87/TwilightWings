import { BaseScene } from "./BaseScene";
import { images, spritesheets, audios } from "../assets";


export class PreloadScene extends BaseScene {
	constructor() {
		super({key: "PreloadScene"});
	}

	preload() {
		this.cameras.main.setBackgroundColor(0x000000);

		// Loading bar
		let width = 0.5 * this.W;
		let x = this.CX - width/2;
		let y = this.CY;
		let bg = this.add.rectangle(x, y, width, 4, 0x666666).setOrigin(0, 0.5);
		let bar = this.add.rectangle(x, y, 1, 8, 0xDDDDDD).setOrigin(0, 0.5);

		// Loading text
		let text = this.createText(x, y, 16, "#DDDDDD", "Loading...").setOrigin(0, 1.5);

		// Listener
		this.load.on("progress", (progress: number) => {
			bar.width = progress * width;
		});


		// Load assets

		for (let image of images) {
			this.load.image(image.key, image.path);
		}

		for (let image of spritesheets) {
			this.load.spritesheet(image.key, image.path, { frameWidth: image.width, frameHeight: image.height });
		}

		for (let audio of audios) {
			this.load.audio(audio.key, audio.path);
		}
	}

	create() {
		this.fade(true, 100, 0x000000);
		this.addEvent(110, () => {
			this.scene.start("MenuScene");
		});
	}
}