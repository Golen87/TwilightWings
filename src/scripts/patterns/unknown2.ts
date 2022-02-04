import Pattern from "./Pattern";

// testp by Lumie
const testp: Pattern[][] = [
	[
		{type: true, radius: [7,12], speed: [200,130], amount: [80,80], offset: [0,0], degrees: [320,320], x: -1, y: 0.5, angle: 170, wait: 2*0.25},
		{type: false, radius: [7,12], speed: [200,130], amount: [80,80], offset: [0,0], degrees: [320,320], x: -1, y: 0.5, angle: 170, wait: 2*0.25},
		{type: true, radius: [7,12], speed: [200,130], amount: [80,80], offset: [0,0], degrees: [320,320], x: 1, y: 0.5, angle: 10, wait: 2*0.25},
		{type: false, radius: [7,12], speed: [200,130], amount: [80,80], offset: [0,0], degrees: [320,320], x: 1, y: 0.5, angle: 10, wait: 2*0.25},
	],
	[
		{type: true, radius: 4, speed: 130, amount: 66, offset: 180, degrees: 330, wait: 2*0.2},
		{type: false, radius: 8, speed: 130, amount: 66, offset: 180, degrees: 330, wait: 2*0.2},
	],
	[
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: 0.6, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: -0.6, y: -1, angle: 90, wait: 2*0.35},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: 0.45, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: -0.45, y: -1, angle: 90, wait: 2*0.35},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: 0.3, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: -0.3, y: -1, angle: 90, wait: 2*0.35},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: 0.15, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: -0.15, y: -1, angle: 90, wait: 2*0.35},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [130, 125, 120, 115, 110], amount: 1, offset: 0, degrees: 0, x: 0, y: -1, angle: 90, wait: 2*1.7},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: -0.1, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: 0.1, y: -1, angle: 90, wait: 2*0.1},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: -0.3, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: 0.3, y: -1, angle: 90, wait: 2*0.1},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: -0.5, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: 0.5, y: -1, angle: 90, wait: 2*0.1},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: -0.7, y: -1, angle: 90, wait: 2*0},
		{type: true, radius: [8, 6, 4, 3, 2], speed: [160, 140, 130, 120, 110], amount: 1, offset: 0, degrees: 0, x: 0.7, y: -1, angle: 90, wait: 2*2.1},
		

		{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, x:0.1, y:-0.5, varx: 0.05, vary: 0, angle: 95, degrees: 30, wait: 2*0.75},
		{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, x:-0.1, y:-0.5, varx: 0.05, vary: 0, angle: 85, degrees: 30, wait: 2*0.75},
		{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, x:0.2, y:-0.5, varx: 0.05, vary: 0, angle: 100, degrees: 30, wait: 2*0.75},
		{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, x:-0.2, y:-0.5, varx: 0.05, vary: 0, angle: 80, degrees: 30, wait: 2*0.75},
		{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, x:0, y:-0.5, varx: 0.05, vary: 0, angle: 0, degrees: 30, wait: 2*2},
		
		{type: true, radius: [9,9,9,9], speed: [110,100,90,80], amount: [10,10,10,10], offset: [0,18,0,18], x:-1, y:0, varx: 0, vary: 0.1, angle: 0, degrees: 324, wait: 2*1.5},
		{type: true, radius: [9,9,9,9], speed: [110,100,90,80], amount: [10,10,10,10], offset: [0,18,0,18], x:1, y:0, varx: 0, vary: 0.1, angle: 180, degrees: 324, wait: 2*3.5},

	],
	[
		{type: false, radius: [10,12,10,12,10,12], speed: [110,100,90,80,70,60], amount: [20,20,20,20,20,20], offset: [0,9,0,9,0,9], x:0, y:-1, varx: 0, vary: 0.1, angle: 180, degrees: 342, wait: 2*4.5},
		{type: false, radius: 3, speed: 60, amount: 36, offset: 0, x:0, y:1, varx: 0, vary: 0.1, angle: 270, degrees: 350, wait: 2*0.5},
		{type: false, radius: 3, speed: 60, amount: 36, offset: 0, x:0, y:1, varx: 0, vary: 0.1, angle: 270, degrees: 350, wait: 2*4.5},
		{type: false, radius: 20, speed: 130, amount: 1, offset: 0, x:0, y:-1, varx: 0.1, vary: 0, angle: 90, degrees: 0, wait: 2*1.5},
		{type: false, radius: 30, speed: 120, amount: 1, offset: 0, x:0, y:-1, varx: 0.1, vary: 0, angle: 90, degrees: 0, wait: 2*1.5},
		{type: false, radius: 35, speed: 110, amount: 1, offset: 0, x:0, y:-1, varx: 0.1, vary: 0, angle: 90, degrees: 0, wait: 2*4.5},
		{type: false, radius: 4, speed: [150,145,140,135,130], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,0.5,1.5,2.5,3.5], wait: 2*1},
		{type: false, radius: 4, speed: [150,145,140,135,130], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,0.5,1.5,2.5,3.5], wait: 2*1},
		{type: false, radius: 4, speed: [150,145,140,135,130], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,0.5,1.5,2.5,3.5], wait: 2*5},
	]
];

export default testp;
