import Pattern from "./Pattern";

// Zigzag motion
const zigzag: Pattern[][] = [[
	{type: true, radius: 4, speed: 120, amount: 1, offset: -30, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -20, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -10, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 0, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 10, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 20, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 30, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 20, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 10, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 0, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -10, degrees: 0, wait: 0.25},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -20, degrees: 0, wait: 0.25},
]];

export default zigzag;
