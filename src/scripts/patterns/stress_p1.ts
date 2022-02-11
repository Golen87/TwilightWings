import Pattern from "./Pattern";

// Zigzag motion
const stress_p1: Pattern[][] = [
	[
		{type: false, radius: 6, speed: 250, amount: 2, offset: 0, degrees: 20, wait: 0.2},
	],
	[
		{type: false, radius: 5, speed: 200, amount: 2, offset: 0, degrees: 20, x:-0.9, y: 1, varx: 0.2, wait: 0},
		{type: false, radius: 5, speed: 200, amount: 2, offset: 0, degrees: 20, x: 0.9, y: 1, varx: 0.2, wait: 0.25},
	],
	[
		{type: false, radius: [12,12,12], speed: [120, 110, 100], amount: [24,24,24], offset: [0,7.5,0], degrees: [345,345,345], x:0, y:-0.5, varx: 0.3, vary: 0, varoff: 30, wait: 3},
		{type: false, radius: [12,12,12], speed: [120, 110, 100], amount: [24,24,24], offset: [0,7.5,0], degrees: [345,345,345], x:0, y:-0.5, varx: 0.3, vary: 0, varoff: 30, wait: 5},
		{type: false, radius: [14,14,14,14,14,14], speed: [130,120,110,100,90,80], amount: [24,24,24,24,24,24], offset: [0,7.5,0,7.5,0,7.5], degrees: [345,345,345,345,345,345], x:0, y:-0.5, varx: 0.3, vary: 0, varoff: 30, wait: 5},
	],
	[
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:0, y:-0.9, varx: 0.5, vary: 0.2, varoff: 30, wait: 2},
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:0.9, y:-0.6, varx: 0.2, vary: 0.4, varoff: 30, wait: 0},
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:-0.9, y:-0.6, varx: 0.2, vary: 0.4, varoff: 30, wait: 1},
		{type: true, radius: 8, speed: 180, amount: 36, offset: 0, degrees: 350, x:1, y:-0.4, varx: 0, vary: 0.4, varoff: 10, wait: 0},
		{type: true, radius: 8, speed: 180, amount: 36, offset: 0, degrees: 350, x:-1, y:-0.4, varx: 0, vary: 0.4, varoff: 10, wait: 1},
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:0, y:-0.9, varx: 0.5, vary: 0.2, varoff: 30, wait: 2},
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:0.9, y:-0.6, varx: 0.2, vary: 0.4, varoff: 30, wait: 0},
		{type: true, radius: [2,3,4,5,5,5,4,3,2], speed: [160,155,150,145,140,135,130,125,120], amount: [24,24,24,24,24,24,24,24,24], offset: [0,0,0,0,0,0,0,0,0], degrees: [345,345,345,345,345,345,345,345,345], x:-0.9, y:-0.6, varx: 0.2, vary: 0.4, varoff: 30, wait: 1},
		{type: true, radius: 10, speed: 150, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0.125},
		{type: true, radius: 10, speed: 150, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0.125},
		{type: true, radius: 10, speed: 150, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0.125},
		{type: true, radius: 10, speed: 150, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0.125},
		{type: true, radius: 10, speed: 150, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 6, speed: 170, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 0},
		{type: true, radius: 3, speed: 190, amount: 1, offset: 0, degrees: 0, varoff: 25, wait: 1.5},
	],
];

export default stress_p1;
