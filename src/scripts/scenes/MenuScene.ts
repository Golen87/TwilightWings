import { BaseScene } from "./BaseScene";
import { RoundRectangle } from "../components/RoundRectangle";


export class MenuScene extends BaseScene {

	constructor() {
		super({key: "MenuScene"});
	}

	create(): void {
		// this.fade(false, 200, 0x000000);

		this.scene.start("OverworldScene", { level: 0 });
		// this.scene.start("GameScene", { level: 0 });
	}

	update(time: number, delta: number) {
	}
}