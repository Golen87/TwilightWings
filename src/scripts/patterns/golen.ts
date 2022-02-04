import Pattern from "./Pattern";

const golen: Pattern[][] = [[
	// Broad 1-9 triangle attack
	{type: true, radius:  6, speed: 200, amount: 1, degrees:  90, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 2, degrees:  10*2, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 3, degrees:  10*3, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 4, degrees:  10*4.1, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 5, degrees:  10*5.2, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 6, degrees:  10*6.4, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 7, degrees:  10*7.6, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 8, degrees:  10*8.9, wait: 0.5},
	{type: true, radius:  6, speed: 200, amount: 9, degrees:  10*10.5, wait: 4},

	// 3x5 at different speeds
	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 0},

	// Huge ring
	{type: true, radius: 12, speed: 120, amount: 180, degrees: 360, wait: 4},

	// 3x5 at different speeds
	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 4},
	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 2},

	// Huge ring
	{type: false,   radius: 12, speed: 120,      amount: 180, degrees: 360, wait: 4}, // Ring
]];

export default golen;
