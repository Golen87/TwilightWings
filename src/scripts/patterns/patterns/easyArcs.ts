import Pattern from "./Pattern";

// Two enemies doing difficult patterns
const easyArcs: Pattern[][] = [[
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 1.5},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 1.5},
]];

export default easyArcs;
