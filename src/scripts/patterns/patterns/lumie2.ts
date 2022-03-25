import Pattern from "./Pattern";

// Boss pattern by Lumie
const lumie2: Pattern[][] = [
	[
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 0, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180, degrees: [0, 2, 6, 10, 14], wait: 1},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 30, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+30, degrees: [0, 2, 6, 10, 14], wait: 1},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 60, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+60, degrees: [0, 2, 6, 10, 14], wait: 1},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 90, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+90, degrees: [0, 2, 6, 10, 14], wait: 1},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 120, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+120, degrees: [0, 2, 6, 10, 14], wait: 1},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 150, degrees: [0, 2, 6, 10, 14], wait: 0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+150, degrees: [0, 2, 6, 10, 14], wait: 1},
	],
	[
		{type: true, amount: 0, wait: 0.5},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: 0, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180, degrees: 0, wait: 1},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -30, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-30, degrees: 0, wait: 1},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -60, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-60, degrees: 0, wait: 1},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -90, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-90, degrees: 0, wait: 1},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -120, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-120, degrees: 0, wait: 1},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -150, degrees: 0, wait: 0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-150, degrees: 0, wait: 1-0.5},
	],
	[
		{type: true, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 3},
		{type: true, radius: 4, speed: 160, amount: 36, offset: 5, degrees: 350, wait: 0},
		{type: false, radius: 4, speed: 160, amount: 36, offset: 0, degrees: 350, wait: 3},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 3},
		{type: false, radius: 12, speed:100, amount: 120, offset: 0, degrees: 357, wait: 3},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 0},
		{type: false, radius: 8, speed: 150, amount: 36, offset: 0, degrees: 350, wait: 3},
		{type: true, radius: 4, speed: 160, amount: 36, offset: 0, degrees: 350, wait: 0},
		{type: false, radius: 4, speed: 160, amount: 36, offset: 5, degrees: 350, wait: 3},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 3},
		{type: true, radius: 12, speed: 150, amount: 120, offset: 0, degrees: 357, wait: 3},
	]
];

export default lumie2;
