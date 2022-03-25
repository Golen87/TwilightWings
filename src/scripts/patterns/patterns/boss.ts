import Pattern from "./Pattern";

// Boss
const boss: Pattern[][] = [
	[
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.025, angle: 90},
		{type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 4*0.025, angle: 90},
		{type: false, radius: 6, speed: 180, amount: 10, offset: 20, degrees: 45, wait: 4*0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 4*0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 4*0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 4*0.025, angle: 90},
		{type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 4*0.025, angle: 90},
		{type: false, radius: 6, speed: 180, amount: 10, offset: -20, degrees: 45, wait: 4*0.025, angle: 90},
	],
	[
		{type: true, radius: 20, speed: 140, amount: 1, offset: 0, degrees: 45, wait: 4*4},
	],
	[
		{type: false, radius: [15, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 3, offset: 0, degrees: 30, wait: 4*3},
	]
];

export default boss;
