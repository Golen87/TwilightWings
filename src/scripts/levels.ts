import * as patterns from "./patterns";

export interface StageEnemy {
	type: string;
	health: number;
	pattern?: any;
	phases?: any;
	x: number;
	y: number;
	spawnDelay: number;
}

export interface Stage {
	delay: number;
	duration?: number;
	enemies: StageEnemy[];
}


let levelData: Stage[] = [

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: [patterns.alternatingRings],
				health: 200, x: 0, y: -0.5, spawnDelay: 1,
			},
		]
	},

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: patterns.arrowRing,
				health: 150, x: 0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_imp",
				pattern: patterns.arrowRing,
				health: 150, x: -0.5, y: -0.5, spawnDelay: 3,
			}
		]
	},

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: [patterns.fourWay, patterns.laser],
				health: 200, x: 0, y: -0.5, spawnDelay: 0,
			},
		]
	},

	{
		delay: 0.5,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: [patterns.fastCircle, patterns.SixFiveFour],
				health: 160, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_angel",
				pattern: [patterns.easyArcs, patterns.SixFiveFour],
				health: 160, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "boss",
				phases: [
					patterns.lumie,
					patterns.lumie2,
					patterns.random
				],
				health: 1000, x: 0, y: -0.5, spawnDelay: 2.0
			}
		]
	},

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: [patterns.golen],
				health: 170, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_angel",
				pattern: [patterns.spiral, patterns.laser],
				health: 170, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 2,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: [patterns.hardArcs, patterns.SixFiveFour],
				health: 170, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_angel",
				pattern: [patterns.zigzag, patterns.SixFiveFour],
				health: 170, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: [patterns.mook],
				health: 150, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_imp",
				pattern: [patterns.fireballs],
				health: 200, x: 0, y: -0.5, spawnDelay: 1.7,
			},
			{
				type: "small_angel",
				pattern: [patterns.mook],
				health: 150, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 0,
		duration: 10,
		enemies: [
			{
				type: "boss",
				pattern: patterns.boss,
				health: 700, x: 0, y: -0.5, spawnDelay: 2
			}
		]
	},

];

export {
	levelData
};