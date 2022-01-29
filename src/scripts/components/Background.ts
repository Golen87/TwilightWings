import { GameScene } from "../scenes/GameScene";
import { interpolateColor } from "../utils";


export class Background extends Phaser.GameObjects.Container {
	public scene: GameScene;

	private dayImages: any[];
	private nightImages: any[];

	private stars: Phaser.GameObjects.TileSprite;
	private sun: Phaser.GameObjects.Image;
	private moon: Phaser.GameObjects.Image;
	private clouds: Phaser.GameObjects.TileSprite;


	constructor(scene: GameScene) {
		super(scene);
		this.scene = scene;
		scene.add.existing(this);

		const cx = scene.CX;
		const cy = scene.CY;

		this.dayImages = [];
		this.nightImages = [];


		// Day

		let day = scene.add.image(cx, cy, "bg_day");
		day.setBlendMode(Phaser.BlendModes.ADD);
		this.dayImages.push(day)
		scene.containToScreen(day);
		this.add(day);

		let night = scene.add.image(cx, cy, "bg_night");
		night.setBlendMode(Phaser.BlendModes.ADD);
		this.nightImages.push(night);
		scene.containToScreen(night);
		this.add(night);

		this.stars = scene.add.tileSprite(cx, cy, scene.W, scene.H, "bg_night_stars");
		this.stars.setBlendMode(Phaser.BlendModes.ADD);
		this.stars.tileScaleX = 0.5;
		this.stars.tileScaleY = 0.5;
		this.nightImages.push(this.stars);
		this.add(this.stars);

		let light = scene.add.image(cx, cy, "bg_night_light");
		light.setBlendMode(Phaser.BlendModes.ADD);
		light.setScale(0.5);
		this.nightImages.push(light);
		this.add(light);


		const sx = 0.48 * cx;
		const sy = 0.1 * cy;

		this.sun = scene.add.image(sx, sy, "bg_day_sun");
		this.sun.setScale(0.5);
		this.dayImages.push(this.sun)
		this.add(this.sun);

		this.moon = scene.add.image(sx, sy, "bg_night_moon");
		this.moon.setScale(0.5);
		this.nightImages.push(this.moon);
		this.add(this.moon);


		// Clouds

		// let clouds = scene.add.image(cx, cy, "bg_clouds");
		// clouds.setScale(0.25);

		// this.clouds = scene.add.tileSprite(400, 300, 800, 600, "bg_clouds");
		// this.clouds.tileScaleX = 0.2;
		// this.clouds.tileScaleY = 0.2;

		// clouds.setAlpha(0.2);
		// this.clouds.setBlendMode(Phaser.BlendModes.SCREEN);
	}


	update(time: number, delta: number, dayTimeSmooth: number) {

		// Change alpha depending on day time
		this.dayImages.forEach((image: Phaser.GameObjects.Image, index: number) => {
			image.setAlpha(dayTimeSmooth);
		});
		this.nightImages.forEach((image: Phaser.GameObjects.Image, index: number) => {
			image.setAlpha(1 - dayTimeSmooth);
		});

		// Rotate sun and moon
		this.sun.angle = time/400;
		this.moon.angle = time/400;

		// TileSprite
		this.stars.tilePositionX = 2 * time/1000;
		this.stars.tilePositionY = 15 * time/1000;
	}
}
