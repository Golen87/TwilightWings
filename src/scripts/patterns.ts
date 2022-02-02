
let golen = [
	{type: true, radius:  6, speed: 200, amount: 1, degrees:  90, wait: 0.2}, // Triple 5s
	{type: true, radius:  6, speed: 200, amount: 2, degrees:  10*2, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 3, degrees:  10*3, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 4, degrees:  10*4.1, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 5, degrees:  10*5.2, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 6, degrees:  10*6.4, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 7, degrees:  10*7.6, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 8, degrees:  10*8.9, wait: 0.2},
	{type: true, radius:  6, speed: 200, amount: 9, degrees:  10*10.5, wait: 2},

	// 5-5-5 at different speeds
	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 0},

	// Huge ring
	{type: true, radius: 12, speed: 120, amount: 180, degrees: 360, wait: 2},

	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 2},

	{type: false, radius: 6, speed: [220,240,260], amount:   5, degrees:  45, wait: 1},

	{type: false,   radius: 12, speed: 120,      amount: 180, degrees: 360, wait: 2}, // Ring
];


// boss.patterns = [
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false,   radius: 12, speed: 120,      amount: 180, degrees: 360, wait: 0}, // Ring
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2}, // Alternating
// 	{type: false, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: false, radius:  6, speed: 200, amount:   1, degrees:  10*1, wait: 0.2},
// 	{type: true, radius:  6, speed: 200, amount:   2, degrees:  10*2, wait: 0.2}, 
// 	{type: false, radius:  6, speed: 200, amount:   3, degrees:  10*3, wait: 0.2},
// 	{type: true,   radius: 12, speed: 120,      amount: 180, degrees: 360, wait: 0}, // Ring
// ];

// boss.patterns = [
// 	{type: false, radius: 8, speed: 180, amount: 30, offset: 35, degrees: 60, wait: 0},
// 	{type: false, radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
// 	{type: false, radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
// 	{type: false, radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
// 	{type: false, radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
// 	{type: false, radius: 8, speed: 180, amount: 30, offset: 325, degrees: 60, wait: 0},
// 	{type: false, radius: 6, speed: 220, amount: 20, offset: 9, degrees: 360, wait: 0.05},
// 	{type: false, radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.05, x: 0, y: 0, angle: 90},
// 	{type: false, radius: 6, speed: 220, amount: 20, offset: 0, degrees: 360, wait: 0.05},
// 	{type: false, radius: 16, speed: 320, amount: 90, offset: 180, degrees: 300, wait: 0.25, x: 0, y: 0, angle: 90},
// ];

// boss.patterns = [
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
	// {type: false, radius: 6, speed: 180, amount: 10, offset: 20, degrees: 45, wait: 0.025, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 12, degrees: 360, wait: 0.1},
	// {type: true, radius: 4, speed: 120, amount: 15, offset: 0, degrees: 360, wait: 0.05},
	// {type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
	// {type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
	// {type: false, radius: 6, speed: 180, amount: 10, offset: -20, degrees: 45, wait: 0.025, angle: 90},
// ];

let lumie = [
	{type: true, radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
	{type: true, radius:  20, speed: 130, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: true, radius:  15, speed: 120, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: true, radius:  10, speed: 110, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: false, radius:  40, speed: 120, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  30, speed: 110, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  20, speed: 100, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  10, speed: 90, amount:   1, offset: 0, degrees:  120, wait: 3},
	{type: false, radius:  8, speed: 90, amount:   24, offset: 7.5, degrees:  360, wait: 0, angle: 90},
	{type: false, radius:  16, speed: 140, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 130, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 120, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 110, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 100, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: true, radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
	{type: true, radius:  40, speed: 130, amount:   6, offset: 0, degrees:  120, wait: 3, angle: 90},
	{type: true, radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
	{type: true, radius:  20, speed: 130, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: true, radius:  15, speed: 120, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: true, radius:  10, speed: 110, amount:   8, offset: 0, degrees:  140, wait: 0, angle: 90},
	{type: false, radius:  40, speed: 120, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  30, speed: 110, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  20, speed: 100, amount:   1, offset: 0, degrees:  120, wait: 0},
	{type: false, radius:  10, speed: 90, amount:   1, offset: 0, degrees:  120, wait: 3},
	{type: false, radius:  8, speed: 90, amount:   24, offset: 7.5, degrees:  360, wait: 0, angle: 90},
	{type: false, radius:  16, speed: 140, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 130, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 120, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 110, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: false, radius:  16, speed: 100, amount:   3, offset: 0, degrees:  60, wait: 0},
	{type: true, radius:  10, speed: 90, amount:   18, offset: 9, degrees:  360, wait: 0, angle: 90},
	{type: true, radius:  40, speed: 130, amount:   6, offset: 0, degrees:  120, wait: 1, angle: 90},
	{type: true, radius:  20, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0, x: -1, y: 0},
	{type: true, radius:  20, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0.5, x: 1, y: 0},
	{type: true, radius:  10, speed: 90, amount:   24, offset: 9, degrees:  360, wait: 0, x: 1, y: 0.60},
	{type: true, radius:  10, speed: 110, amount:   24, offset: 0, degrees:  360, wait: 0.1, x: -1, y: -0.60},
	{type: true, radius:  8, speed: 90, amount:   36, offset: 13, degrees:  360, wait: 0, x: 1, y: 0.20},
	{type: true, radius:  8, speed: 90, amount:   36, offset: 4, degrees:  360, wait: 0.1, x: -1, y: -0.40},
	{type: true, radius:  6, speed: 90, amount:   36, offset: 11, degrees:  360, wait: 0, x: 1, y: 0.45},
	{type: true, radius:  6, speed: 90, amount:   36, offset: 2, degrees:  360, wait: 0.1, x: -1, y: -0.15},
	{type: true, radius:  8, speed: 90, amount:   36, offset: 9, degrees:  360, wait: 0, x: 1, y: -0.40},
	{type: true, radius:  8, speed: 90, amount:   36, offset: 0, degrees:  360, wait: 0.1, x: -1, y: 0.20},
	{type: true, radius:  6, speed: 90, amount:   36, offset: 2, degrees:  360, wait: 0, x: 1, y: -0.15},
	{type: true, radius:  6, speed: 90, amount:   36, offset: 11, degrees:  360, wait: 0.1, x: -1, y: 0.45},
	{type: true, radius:  10, speed: 110, amount:   24, offset: 9, degrees:  360, wait: 0, x: 1, y: -0.60},
	{type: true, radius:  10, speed: 110, amount:   24, offset: 0, degrees:  360, wait: 1, x: -1, y: 0.60},
];


let arrow = [
	{type: true, radius: 6, speed: [150,140,130,120,110], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,5,10,15,20], wait: 1},
];


let spiral = [
	{type: true, radius:  5, speed: 130, amount:   18, offset: 0, degrees:  360, wait: 0.4, angle: 0},
	{type: true, radius:  5, speed: 130, amount:   18, offset: 2, degrees:  360, wait: 0.4, angle: 0},
	{type: true, radius:  5, speed: 130, amount:   18, offset: 4, degrees:  360, wait: 0.4, angle: 0},
	{type: true, radius:  5, speed: 130, amount:   18, offset: 6, degrees:  360, wait: 0.4, angle: 0},
	{type: true, radius:  5, speed: 130, amount:   18, offset: 8, degrees:  360, wait: 0.4, angle: 0},
];

let laser = [
	{type: false, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, degrees: 30, wait: 0.8}
];

let fourWay = [
	{type: true, radius: [16,14,14,12,12,10,10], speed: 120, amount: [5, 5, 5, 5, 5, 5, 5], offset: [45, 40, 50, 35, 55, 30, 60], degrees: 360, wait: 2},
];

let tightArcs = [
	{type: true, radius: 4, speed: 100, amount: 7, offset: 0, degrees: 60, wait: 0.05},
	{type: true, radius: 4, speed: 100, amount: 7, offset: 5, degrees: 60, wait: 0.05},
	{type: true, radius: 4, speed: 100, amount: 7, offset: 0, degrees: 60, wait: 1},
];

let zigzag = [
	{type: true, radius: 4, speed: 120, amount: 1, offset: -30, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -20, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -10, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 0, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 10, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 20, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 30, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 20, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 10, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: 0, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -10, degrees: 0, wait: 2*0.05},
	{type: true, radius: 4, speed: 120, amount: 1, offset: -20, degrees: 0, wait: 2*0.05},
];

let fireballs = [
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.3, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.3, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.6, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.6, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.9, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.9, y: -1, angle: 90, wait: 1.25},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.15, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.15, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.45, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.45, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: 0.75, y: -1, angle: 90, wait: 0},
	{type: true, radius: [14, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 1, offset: 0, degrees: 0, x: -0.75, y: -1, angle: 90, wait: 1.25},
];


let hardArcs = [
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 2*0.25},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 2*0.5},
	{type: true, radius: 6, speed: [180, 170, 160, 150, 140, 130], amount: 1, offset: [15, 5, -5, -15, -25, -35], degrees: 0, wait: 2*0.25},
	{type: true, radius: 6, speed: [180, 170, 160, 150, 140, 130], amount: 1, offset: [-15, -5, 5, 15, 25, 35], degrees: 0, wait: 2*0.5},
];

let boss = [
	[
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
		{type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
		{type: false, radius: 6, speed: 180, amount: 10, offset: 20, degrees: 45, wait: 0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.05, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 7.5, degrees: 345, wait: 0.1, angle: 90},
		{type: true, radius: 3, speed: 120, amount: 24, offset: 0, degrees: 345, wait: 0.05, angle: 90},
		{type: true, radius: 16, speed: 280, amount: 90, offset: 180, degrees: 300, wait: 0.025, angle: 90},
		{type: false, radius: 16, speed: 200, amount: 60, offset: 180, degrees: 260, wait: 0.025, angle: 90},
		{type: false, radius: 6, speed: 180, amount: 10, offset: -20, degrees: 45, wait: 0.025, angle: 90},
	],
	[
		{type: true, radius: 20, speed: 140, amount: 1, offset: 0, degrees: 45, wait: 4},
	],
	[
		{type: false, radius: [15, 11, 8, 6, 5], speed: [130, 120, 110, 100, 90], amount: 3, offset: 0, degrees: 30, wait: 3},
	]
];

let mook = [
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 0.5},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 0.5},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 0.5},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 2.5},
];

let misc = [
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: -20, degrees: 30, wait: 0},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 20, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: -40, degrees: 30, wait: 0},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 40, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: -60, degrees: 30, wait: 0},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 60, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: -40, degrees: 30, wait: 0},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 40, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: -20, degrees: 30, wait: 0},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 20, degrees: 30, wait: 0.2},
	{type: true, radius: [2,3,4,5,4,3,2], speed: [135,140,145,150,155,160,165], amount: [3, 3, 3, 3, 3, 3, 3], offset: 0, degrees: 30, wait: 1.8},
];

let misc2 = [
	{type: false, radius: [16,14,14,12,12,10,10], speed: 120, amount: [4, 4, 4, 4, 4, 4, 4], offset: [45, 40, 50, 35, 55, 30, 60], degrees: 270, angle: 90, wait: 1.5},
	{type: false, radius: [16,14,14,12,12,10,10], speed: 120, amount: [4, 4, 4, 4, 4, 4, 4], offset: [45, 40, 50, 35, 55, 30, 60], degrees: 270, angle: 45, wait: 1.5},
];

let lumie2 = [
	[
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 0, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 30, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+30, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 60, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+60, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 90, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+90, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 120, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+120, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 150, degrees: [0, 2, 6, 10, 14], wait: 2*0},
		{type: false, radius: 4, speed: [160, 150, 140, 130, 120], amount: [1, 2, 3, 4, 5], offset: 180+150, degrees: [0, 2, 6, 10, 14], wait: 2*0.2},
	],
	[
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: 0, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180, degrees: 0, wait: 2*0.2},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -30, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-30, degrees: 0, wait: 2*0.2},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -60, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-60, degrees: 0, wait: 2*0.2},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -90, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-90, degrees: 0, wait: 2*0.2},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -120, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-120, degrees: 0, wait: 2*0.2},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -150, degrees: 0, wait: 2*0},
		{type: true, radius: 8, speed: [200, 190, 180, 170, 160, 150, 140], amount: 1, offset: -180-150, degrees: 0, wait: 2*0.2},
	],
	[
		{type: true, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 2*0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 2*0.75},
		{type: true, radius: 4, speed: 160, amount: 36, offset: 5, degrees: 350, wait: 2*0},
		{type: false, radius: 4, speed: 160, amount: 36, offset: 0, degrees: 350, wait: 2*0.75},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 2*0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 2*0.75},
		{type: false, radius: 12, speed:100, amount: 120, offset: 0, degrees: 357, wait: 2*0.75},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 2*0},
		{type: false, radius: 8, speed: 150, amount: 36, offset: 0, degrees: 350, wait: 2*0.75},
		{type: true, radius: 4, speed: 160, amount: 36, offset: 0, degrees: 350, wait: 2*0},
		{type: false, radius: 4, speed: 160, amount: 36, offset: 5, degrees: 350, wait: 2*0.75},
		{type: true, radius: 8, speed: 120, amount: 36, offset: 5, degrees: 350, wait: 2*0},
		{type: false, radius: 8, speed: 120, amount: 36, offset: 0, degrees: 350, wait: 2*0.75},
		{type: true, radius: 12, speed: 150, amount: 120, offset: 0, degrees: 357, wait: 2*0.75},
	]
];

let random = [
	{type: true, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.022, y: -0.462, angle:90, wait: 0.2},
	{type: false, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: -0.042, y: -0.575, angle:90, wait: 0.2},
	{type: true, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: -0.158, y: -0.582, angle:90, wait: 0.2},
	{type: false, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.008, y: -0.451, angle:90, wait: 0.2},
	{type: true, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.132, y: -0.423, angle:90, wait: 0.2},
	{type: false, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: 0.150, y: -0.463, angle:90, wait: 0.2},
	{type: true, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.078, y: -0.416, angle:90, wait: 0.2},
	{type: false, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.138, y: -0.499, angle:90, wait: 0.2},
	{type: true, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: 0.117, y: -0.411, angle:90, wait: 0.2},
	{type: false, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.043, y: -0.573, angle:90, wait: 0.2},
	{type: true, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: -0.105, y: -0.594, angle:90, wait: 0.2},
	{type: false, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: 0.006, y: -0.481, angle:90, wait: 0.2},

	{type: true, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.194, y: -0.463, angle:90, wait: 0.2},
	{type: false, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.160, y: -0.419, angle:90, wait: 0.2},
	{type: true, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: -0.198, y: -0.459, angle:90, wait: 0.2},
	{type: false, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: 0.042, y: -0.588, angle:90, wait: 0.2},
	{type: true, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.083, y: -0.571, angle:90, wait: 0.2},
	{type: false, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: -0.195, y: -0.483, angle:90, wait: 0.2},
	{type: true, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: 0.090, y: -0.577, angle:90, wait: 0.2},
	{type: false, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.182, y: -0.500, angle:90, wait: 0.2},
	{type: true, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: 0.030, y: -0.468, angle:90, wait: 0.2},
	{type: false, radius: 8, speed: 90, amount: 36, offset: 0, degrees: 350, x: -0.056, y: -0.483, angle:90, wait: 0.2},
	{type: true, radius: 6, speed: 110, amount: 36, offset: 0, degrees: 350, x: 0.157, y: -0.519, angle:90, wait: 0.2},
	{type: false, radius: 4, speed: 130, amount: 36, offset: 0, degrees: 350, x: 0.118, y: -0.479, angle:90, wait: 0.2},
];



/* Completed */

// Easy rings
let alternatingRings = [
	{type: true, radius: 10, speed: 100, amount: 90, degrees: 360, wait: 2},
	{type: false, radius: 10, speed: 100, amount: 90, degrees: 360, wait: 2},
];

// Total 6s. Two enemies with 3s offset.
let arrowRing = [[
	{type: true, radius: 6, speed: [146,138,129,120,110], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,8,15,23,32], wait: 2},
	{type: true, radius: 6, speed: [146,138,129,120,110], amount: [1, 2, 2, 2, 2], offset: 0, degrees: [0,8,15,23,32], wait: 2},
	{type: true, radius: 8, speed: 90, amount: 120, degrees: 360, wait: 2}
]];

// Two enemies doing difficult patterns
let easyArcs = [
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 0.75},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 0.75},
];
let fastCircle = [
	{type: true, radius: 4, speed: 120, amount: 36, offset: 0, degrees: 350, angle: 90, wait: 1.0},
	{type: true, radius: 4, speed: 120, amount: 36, offset: 5, degrees: 350, angle: 90, wait: 1.0},
];

let SixFiveFour = [
	{type: false, radius: 6, speed: [160,130,100], amount: [6,5,4], offset: 0, degrees: 50, wait: 4.0},
];



export {
	alternatingRings,
	arrowRing,
	easyArcs,
	fastCircle,
	SixFiveFour,

	golen,
	lumie,
	lumie2,
	random,
	arrow,
	spiral,
	laser,
	fourWay,
	tightArcs,
	zigzag,
	fireballs,
	hardArcs,
	boss,
	mook,
	misc,
	misc2
};
