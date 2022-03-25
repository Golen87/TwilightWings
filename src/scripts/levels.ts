import { EnemyParams } from "./interfaces";
import MyEnemy from "./patterns/MyEnemy";
import TestEnemy from "./patterns/TestEnemy";
// import * as patterns from "./patterns";
// import alternatingRings from "./patterns/alternatingRings";
// import arrowRing from "./patterns/arrowRing";
// import easyArcs from "./patterns/easyArcs";
// import fastCircle from "./patterns/fastCircle";
// import golen from "./patterns/golen";
// import lumie2 from "./patterns/lumie2";
// import misc from "./patterns/misc";
// import misc2 from "./patterns/misc2";
// import mook from "./patterns/mook";
// import Pattern from "./patterns/Pattern";
// import random from "./patterns/random";
// import sixFiveFour from "./patterns/sixFiveFour";
// import unknown1 from "./patterns/unknown1";
// import unknown2 from "./patterns/unknown2";
// import unknown3 from "./patterns/unknown3";
// import wallPatternPt1 from "./patterns/wallPatternPt1";
// import wallPatternPt2 from "./patterns/wallPatternPt2";
// import wallPatternPt3 from "./patterns/wallPatternPt3";
// import wallPatternPt4 from "./patterns/wallPatternPt4";
// import arrow from "./patterns/arrow";
// import boss from "./patterns/boss";
// import fireballs from "./patterns/fireballs";
// import fourWay from "./patterns/fourWay";
// import hardArcs from "./patterns/hardArcs";
// import laser from "./patterns/laser";
// import lumie from "./patterns/lumie";
// import spiral from "./patterns/spiral";
// import tightArcs from "./patterns/tightArcs";
// import zigzag from "./patterns/zigzag";

export interface StageEnemy {
	// type: string;
	// health: number;
	// pattern?: any;
	// phases?: any;
	// x: number;
	// y: number;
	// spawnDelay: number;
}

export interface Stage {
	// delay: number;
	// duration?: number;
	enemies: EnemyParams[];
	// enemies: StageEnemy[];

}




let levelData: Stage[] = [
	{
		enemies: [
			MyEnemy
		]
	},
	{
		enemies: [
			TestEnemy
		]
	},

	// {
	// 	delay: 1,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_imp",
	// 			movement: figureEight
	// 			pattern: alternatingRings,
	// 			health: 200, x: 0, y: -0.5, spawnDelay: 0,
	// 		},
	// 	]
	// },

	// {
	// 	delay: 1,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_angel",
	// 			pattern: arrowRing,
	// 			health: 150, x: 0.5, y: -0.5, spawnDelay: 0,
	// 		},
	// 		{
	// 			type: "small_imp",
	// 			pattern: arrowRing,
	// 			health: 150, x: -0.5, y: -0.5, spawnDelay: 6,
	// 		}
	// 	]
	// },

	// {
	// 	delay: 2,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_angel",
	// 			pattern: [fourWay[0], laser[0]],
	// 			health: 200, x: 0, y: -0.5, spawnDelay: 0,
	// 		},
	// 	]
	// },

	// {
	// 	delay: 0.5,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_imp",
	// 			pattern: [fastCircle[0], sixFiveFour[0]],
	// 			health: 160, x: -0.5, y: -0.5, spawnDelay: 0,
	// 		},
	// 		{
	// 			type: "small_angel",
	// 			pattern: [easyArcs[0], sixFiveFour[0]],
	// 			health: 160, x: 0.5, y: -0.5, spawnDelay: 1.7,
	// 		}
	// 	]
	// },

	// {
	// 	delay: 2,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "boss",
	// 			phases: [
	// 				lumie,
	// 				lumie2,
	// 				random
	// 			],
	// 			health: 1000, x: 0, y: -0.5, spawnDelay: 2.0
	// 		}
	// 	]
	// },

	// {
	// 	delay: 2,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_imp",
	// 			pattern: [hardArcs[0], sixFiveFour[0]],
	// 			health: 170, x: -0.5, y: -0.5, spawnDelay: 0,
	// 		},
	// 		{
	// 			type: "small_angel",
	// 			pattern: [zigzag[0], sixFiveFour[0]],
	// 			health: 170, x: 0.5, y: -0.5, spawnDelay: 1.7,
	// 		}
	// 	]
	// },

	// {
	// 	delay: 1,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_angel",
	// 			pattern: mook,
	// 			health: 150, x: -0.5, y: -0.5, spawnDelay: 0,
	// 		},
	// 		{
	// 			type: "small_imp",
	// 			pattern: fireballs,
	// 			health: 200, x: 0, y: -0.5, spawnDelay: 1.7,
	// 		},
	// 		{
	// 			type: "small_angel",
	// 			pattern: mook,
	// 			health: 150, x: 0.5, y: -0.5, spawnDelay: 1.7,
	// 		}
	// 	]
	// },

	// {
	// 	delay: 2,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "small_imp",
	// 			pattern: golen,
	// 			health: 170, x: -0.5, y: -0.5, spawnDelay: 0,
	// 		},
	// 		{
	// 			type: "small_angel",
	// 			pattern: [spiral[0], laser[0]],
	// 			health: 170, x: 0.5, y: -0.5, spawnDelay: 1.7,
	// 		}
	// 	]
	// },

	// {
	// 	delay: 0,
	// 	duration: 10,
	// 	enemies: [
	// 		{
	// 			type: "boss",
	// 			phases: [
	// 				wallPatternPt1,
	// 				wallPatternPt2,
	// 				wallPatternPt3,
	// 				wallPatternPt4,
	// 			],
	// 			health: 1500, x: 0, y: -0.5, spawnDelay: 2
	// 		}
	// 	]
	// },

];

export {
	levelData
};