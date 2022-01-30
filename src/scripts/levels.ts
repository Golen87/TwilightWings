import * as patterns from "./patterns";

// patterns.lumie
// patterns.zigzag
// patterns.tightArcs
// patterns.hardArcs
// patterns.boss
// patterns.misc

let levelData = [

	{
		delay: 1,
		duration: 10,
		enemies: [{
			type: "small_imp",
			pattern: patterns.laser,
			health: 20, x: 0, y: -0.5, spawnDelay: 0,
		}]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: patterns.arrow,
				health: 30, x: 0, y: -0.5, spawnDelay: 0,
			},
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: patterns.arrow,
				health: 40, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_imp",
				pattern: patterns.arrow,
				health: 40, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: patterns.circles,
				health: 40, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_angel",
				pattern: patterns.easyArcs,
				health: 40, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "boss",
				pattern: patterns.boss,
				health: 150, x: 0, y: -0.5, spawnDelay: 1
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: patterns.fourWay,
				health: 30, x: 0, y: -0.5, spawnDelay: 0,
			},
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_imp",
				pattern: patterns.golen,
				health: 60, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_angel",
				pattern: patterns.spiral,
				health: 60, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "small_angel",
				pattern: patterns.mook,
				health: 60, x: -0.5, y: -0.5, spawnDelay: 0,
			},
			{
				type: "small_imp",
				pattern: patterns.fireballs,
				health: 70, x: 0, y: -0.5, spawnDelay: 1.7,
			},
			{
				type: "small_angel",
				pattern: patterns.mook,
				health: 60, x: 0.5, y: -0.5, spawnDelay: 1.7,
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "boss",
				pattern: patterns.boss,
				health: 400, x: 0, y: -0.5, spawnDelay: 1
			}
		]
	},

];

export {
	levelData
};