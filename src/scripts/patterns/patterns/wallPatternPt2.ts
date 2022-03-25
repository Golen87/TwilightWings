import Pattern from "./Pattern";

// Walling boss pattern that builds on itself
const wallPattern2: Pattern[][] = [
	[
		{type: true, radius: 22, speed: 90, amount: 60, offset: 0, degrees: 354, x: 0, y: -0.5, varx: 0.1, vary: 0.1, wait: 4},
		{type: false, radius: 22, speed: 90, amount: 60, offset: 0, degrees: 354, x: 0, y: -0.5, varx: 0.1, vary: 0.1, wait: 4},
	],
	[	
		{type: true, radius: 5, speed: [150,140,140,130,130,120,120,110,110], amount: [10,10,10,10,10,10,10,10,10], offset: [0,-1,1,2,-2,3,-3,4,-4], degrees: [324,324,324,324,324,324,324,324,324], wait: 2},
		{type: false, radius: 5, speed: [150,140,140,130,130,120,120,110,110], amount: [10,10,10,10,10,10,10,10,10], offset: [18,17,19,16,20,15,21,14,22], degrees: [324,324,324,324,324,324,324,324,324], wait: 2},
	]
];

export default wallPattern2;
