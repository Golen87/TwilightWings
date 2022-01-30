
let golen_1 = [
	[
		{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  90, wait: 0.2}, // Triple 5s
		{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   4, offset: 0, degrees:  10*4, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   5, offset: 0, degrees:  10*5, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   6, offset: 0, degrees:  10*6, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   7, offset: 0, degrees:  10*7, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   8, offset: 0, degrees:  10*8, wait: 0.2},
		{type: "enemy-night", radius:  6, speed: 200, amount:   9, offset: 0, degrees:  10*9, wait: 2},

		// 5-4-5 at different speeds
		{type: "enemy-day", radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0},
		{type: "enemy-day", radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
		{type: "enemy-day", radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 1},

		// Huge ring
		{type: "enemy-night", radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 2},

		{type: "enemy-day",   radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0}, // Triple 5s
		{type: "enemy-day",   radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
		{type: "enemy-day",   radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 2},

		{type: "enemy-night",   radius:  6, speed: 200+20*1, amount:   5, offset: 0, degrees:  45, wait: 0}, // Triple 5s
		{type: "enemy-night",   radius:  6, speed: 200+20*2, amount:   4, offset: 0, degrees:  45, wait: 0},
		{type: "enemy-night",   radius:  6, speed: 200+20*3, amount:   5, offset: 0, degrees:  45, wait: 1},

		{type: "enemy-day",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 2}, // Ring
	]
];


// boss.patterns = [
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 0}, // Ring
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-night",   radius: 12, speed: 120,      amount: 180, offset: 0, degrees: 360, wait: 0}, // Ring
// ];

// boss.patterns = [
// 	{type: "enemy-day", radius: 8, speed: 180, amount: 30, offset: 35, degrees: 60, wait: 0},
// 	{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
// 	{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
// 	{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
// 	{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
// 	{type: "enemy-day", radius: 8, speed: 180, amount: 30, offset: 325, degrees: 60, wait: 0},
// 	{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
// 	{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
// 	{type: "enemy-day", radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
// 	{type: "enemy-day", radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
// ];

// boss.patterns = [
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: "enemy-day", radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
	// {type: "enemy-day", radius: 6, speed: 180, amount: 10, offset: 20, degrees: 45, wait: 0.025, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: "enemy-night", radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: "enemy-night", radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: "enemy-day", radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
	// {type: "enemy-day", radius: 6, speed: 180, amount: 10, offset: -20, degrees: 45, wait: 0.025, angle: 90},
// ];

// boss.patterns = [
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
	
// 	{type: "enemy-night", radius:  6, speed: 300, amount:   1, offset: 0, degrees:  10*1, wait: 0.2}, // Alternating Speeds
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   2, offset: 0, degrees:  10*2, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 300, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   1, offset: 0, degrees:  10*1, wait: 0.2},
// 	{type: "enemy-night", radius:  6, speed: 300, amount:   2, offset: 0, degrees:  10*2, wait: 0.2}, 
// 	{type: "enemy-day", radius:  6, speed: 200, amount:   3, offset: 0, degrees:  10*3, wait: 0.2},
// ];

let lumie_1 = [
	[
		{type: "enemy-night", radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-night", radius:  20, speed: 130, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-night", radius:  15, speed: 120, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-night", radius:  10, speed: 110, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-day", radius:  40, speed: 120, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  30, speed: 110, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  20, speed: 100, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  10, speed: 90, amount:   1, offset: 0, degrees:  120, wait: 3},
		{type: "enemy-day", radius:  8, speed: 90, amount:   24, offset: 7.5, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-day", radius:  16, speed: 140, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 130, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 120, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 110, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 100, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-night", radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-night", radius:  40, speed: 130, amount:   6, offset: 0, degrees:  120, wait: 3, angle: 90},
		{type: "enemy-night", radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-night", radius:  20, speed: 130, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-night", radius:  15, speed: 120, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-night", radius:  10, speed: 110, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
		{type: "enemy-day", radius:  40, speed: 120, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  30, speed: 110, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  20, speed: 100, amount:   1, offset: 0, degrees:  120, wait: 0},
		{type: "enemy-day", radius:  10, speed: 90, amount:   1, offset: 0, degrees:  120, wait: 3},
		{type: "enemy-day", radius:  8, speed: 90, amount:   24, offset: 7.5, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-day", radius:  16, speed: 140, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 130, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 120, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 110, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-day", radius:  16, speed: 100, amount:   3, offset: 0, degrees:  60, wait: 0},
		{type: "enemy-night", radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
		{type: "enemy-night", radius:  40, speed: 130, amount:   6, offset: 0, degrees:  120, wait: 1, angle: 90},
		{type: "enemy-night", radius:  20, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0, x: -1, y: 0},
		{type: "enemy-night", radius:  20, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0.5, x: 1, y: 0},
		{type: "enemy-night", radius:  10, speed: 90, amount:   24, offset: 9, degrees:  360, wait: 0, x: 1, y: 0.60},
		{type: "enemy-night", radius:  10, speed: 110, amount:   24, offset: 0, degrees:  360, wait: 0.1, x: -1, y: -0.60},
		{type: "enemy-night", radius:  8, speed: 90, amount:   36, offset: 13, degrees:  360, wait: 0, x: 1, y: 0.20},
		{type: "enemy-night", radius:  8, speed: 90, amount:   36, offset: 4, degrees:  360, wait: 0.1, x: -1, y: -0.40},
		{type: "enemy-night", radius:  6, speed: 90, amount:   36, offset: 11, degrees:  360, wait: 0, x: 1, y: 0.45},
		{type: "enemy-night", radius:  6, speed: 90, amount:   36, offset: 2, degrees:  360, wait: 0.1, x: -1, y: -0.15},
		{type: "enemy-night", radius:  8, speed: 90, amount:   36, offset: 9, degrees:  360, wait: 0, x: 1, y: -0.40},
		{type: "enemy-night", radius:  8, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0.1, x: -1, y: 0.20},
		{type: "enemy-night", radius:  6, speed: 90, amount:   36, offset: 2, degrees:  360, wait: 0, x: 1, y: -0.15},
		{type: "enemy-night", radius:  6, speed: 90, amount:   36, offset: 11, degrees:  360, wait: 0.1, x: -1, y: 0.45},
		{type: "enemy-night", radius:  10, speed: 110, amount:   24, offset: 9, degrees:  360, wait: 0, x: 1, y: -0.60},
		{type: "enemy-night", radius:  10, speed: 110, amount:   24, offset: 0, degrees:  360, wait: 1, x: -1, y: 0.60},
	],
];

let spiral_1 = [
	[
		{type: "enemy-night", radius:  4, speed: 110, amount:   36, offset: 0, degrees:  360, wait: 0.15, angle: 0},
		{type: "enemy-night", radius:  4, speed: 110, amount:   36, offset: 2, degrees:  360, wait: 0.15, angle: 0},
		{type: "enemy-night", radius:  4, speed: 110, amount:   36, offset: 4, degrees:  360, wait: 0.15, angle: 0},
		{type: "enemy-night", radius:  4, speed: 110, amount:   36, offset: 6, degrees:  360, wait: 0.15, angle: 0},
		{type: "enemy-night", radius:  4, speed: 110, amount:   36, offset: 8, degrees:  360, wait: 0.15, angle: 0},
	]
]


// How to save:
// 1. Here: let xxx = [...];
// 2. Here: Add to export
// 3. GameScene: import { golen_1, xxx } from "../patterns";
// 4. GameScene: boss.setPatterns(xxx);

export {
	golen_1,
	lumie_1,
	spiral_1
};
