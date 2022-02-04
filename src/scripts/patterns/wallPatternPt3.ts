import Pattern from "./Pattern";

// Walling boss pattern that builds on itself
const wallPattern3: Pattern[][] = [
	[
		{type: true, radius: 22, speed: 90, amount: 60, offset: 0, degrees: 354, x: 0, y: -0.5, varx: 0.1, vary: 0.1, wait: 4},
		{type: false, radius: 22, speed: 90, amount: 60, offset: 0, degrees: 354, x: 0, y: -0.5, varx: 0.1, vary: 0.1, wait: 4},
	],
	[	
		{type: true, radius: 5, speed: [150,140,140,130,130,120,120,110,110], amount: [10,10,10,10,10,10,10,10,10], offset: [0,-1,1,2,-2,3,-3,4,-4], degrees: [324,324,324,324,324,324,324,324,324], wait: 2},
		{type: false, radius: 5, speed: [150,140,140,130,130,120,120,110,110], amount: [10,10,10,10,10,10,10,10,10], offset: [18,17,19,16,20,15,21,14,22], degrees: [324,324,324,324,324,324,324,324,324], wait: 2},
	],
	[
		{type: true, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:-1, angle:90, wait: 0},
		{type: false, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:1, angle:270, wait: 0},
		{type: true, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:1, angle:270, wait: 0},
		{type: true, radius: 45, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 0.5},

		{type: true, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:-1, angle:90, wait: 0},
		{type: false, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:1, angle:270, wait: 0},
		{type: true, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:1, angle:270, wait: 0},
		{type: true, radius: 35, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 0.5},

		{type: true, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:-1, angle:90, wait: 0},
		{type: false, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:1, angle:270, wait: 0},
		{type: true, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:1, angle:270, wait: 0},
		{type: true, radius: 25, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 0.5},

		{type: true, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:-1, angle:90, wait: 0},
		{type: false, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:1, angle:270, wait: 0},
		{type: true, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:-0.65, y:1, angle:270, wait: 0},
		{type: true, radius: 15, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 0.5},

		{type: false, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:-1, angle:90, wait: 0},
		{type: false, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:-1, angle:90, wait: 0},
		{type: false, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0, y:1, angle:270, wait: 0},
		{type: true, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 0},
		{type: true, radius: 5, speed: 110, amount: 1, offset: 0, degrees: 0, x:0.65, y:1, angle:270, wait: 6},

		{type: false, radius: 18, speed: 105, amount: 60, offset: 0, degrees: 354, x: -1, y: 0, varx: 0, vary: 0.15, wait: 1},
		{type: true, radius: 5, speed: 90, amount: 30, offset: 0, degrees: 348, x: -1, y: 0, varx: 0, vary: 0.15, wait: 5},
		{type: true, radius: 18, speed: 105, amount: 60, offset: 0, degrees: 354, x: -1, y: 0, varx: 0, vary: 0.15, wait: 1},
		{type: false, radius: 5, speed: 90, amount: 30, offset: 0, degrees: 348, x: -1, y: 0, varx: 0, vary: 0.15, wait: 5},
		{type: false, radius: 18, speed: 105, amount: 60, offset: 0, degrees: 354, x: 1, y: 0, varx: 0, vary: 0.15, wait: 1},
		{type: true, radius: 5, speed: 90, amount: 30, offset: 0, degrees: 348, x: 1, y: 0, varx: 0, vary: 0.15, wait: 5},
		{type: true, radius: 18, speed: 105, amount: 60, offset: 0, degrees: 354, x: 1, y: 0, varx: 0, vary: 0.15, wait: 1},
		{type: false, radius: 5, speed: 90, amount: 30, offset: 0, degrees: 348, x: 1, y: 0, varx: 0, vary: 0.15, wait: 9},
	]
];

export default wallPattern3;
