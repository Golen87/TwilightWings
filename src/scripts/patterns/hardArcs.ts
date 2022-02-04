import Pattern from "./Pattern";

// Hard arcs by Lumie
const hardArcs: Pattern[][] = [[
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [10, 0, -10, -20, -30, -40], degrees: 0, wait: 1},
	{type: true, radius: 6, speed: [140, 130, 120, 110, 100, 90], amount: 1, offset: [-10, 0, 10, 20, 30, 40], degrees: 0, wait: 2},
	{type: true, radius: 6, speed: [180, 170, 160, 150, 140, 130], amount: 1, offset: [15, 5, -5, -15, -25, -35], degrees: 0, wait: 1},
	{type: true, radius: 6, speed: [180, 170, 160, 150, 140, 130], amount: 1, offset: [-15, -5, 5, 15, 25, 35], degrees: 0, wait: 2},
]];

export default hardArcs;
