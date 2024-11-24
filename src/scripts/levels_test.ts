/*
// import * as patterns from "./patterns";
import alternatingRings from "./patterns/alternatingRings";
import arrowRing from "./patterns/arrowRing";
import easyArcs from "./patterns/easyArcs";
import fastCircle from "./patterns/fastCircle";
import golen from "./patterns/golen";
import lumie2 from "./patterns/lumie2";
import misc from "./patterns/misc";
import misc2 from "./patterns/misc2";
import mook from "./patterns/mook";
import Pattern from "./patterns/Pattern";
import random from "./patterns/random";
import sixFiveFour from "./patterns/sixFiveFour";
import unknown1 from "./patterns/unknown1";
import unknown2 from "./patterns/unknown2";
import unknown3 from "./patterns/unknown3";
import wallPatternPt1 from "./patterns/wallPatternPt1";
import wallPatternPt2 from "./patterns/wallPatternPt2";
import wallPatternPt3 from "./patterns/wallPatternPt3";
import wallPatternPt4 from "./patterns/wallPatternPt4";
import arrow from "./patterns/arrow";
import boss from "./patterns/boss";
import fireballs from "./patterns/fireballs";
import fourWay from "./patterns/fourWay";
import hardArcs from "./patterns/hardArcs";
import laser from "./patterns/laser";
import lumie from "./patterns/lumie";
import spiral from "./patterns/spiral";
import tightArcs from "./patterns/tightArcs";
import zigzag from "./patterns/zigzag";
import bosspattern_hard1 from "./patterns/bosspattern_hard1";
import stress_p1 from "./patterns/stress_p1";

export interface StageEnemy {
	type: string;
	health: number;
	pattern?: any;
	phases?: any;
	x: number;
	y: number;
	spawnDelay: number;
}

export interface Stage {
	delay: number;
	duration?: number;
	enemies: StageEnemy[];
}


let levelData: Stage[] = [
	// {
	// 	delay: 1,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "boss",
	// 			phases: [
	// 				stress_p1
	// 			],
	// 			health: 4000, x: 0, y: -0.5, spawnDelay: 2.0
	// 		}
	// 	]
	// },

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "boss",
				phases: [
					bosspattern_hard1,
				],
				health: 1500, x: 0, y: -0.5, spawnDelay: 2.0
			}
		]
	},

	{
		delay: 1,
		duration: 10,
		enemies: [
			{
				type: "boss",
				phases: [
					lumie,
					lumie2,
					random
				],
				health: 1000, x: 0, y: -0.5, spawnDelay: 2.0
			}
		]
	},

];

export {
	levelData
};
*/
export {};
