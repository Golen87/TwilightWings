import Pattern from "./Pattern";

// Shoots two arrows and one large ring
const arrowRing: Pattern[][] = [[
	{type: true, radius: 6, speed: [146,138,129,120,110], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,8,15,23,32], wait: 4},
	{type: true, radius: 6, speed: [146,138,129,120,110], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,8,15,23,32], wait: 4},
	{type: true, radius: 8, speed: 90, amount: 120, degrees: 360, wait: 4}
]];

export default arrowRing;
