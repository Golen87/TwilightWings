import { Character } from "../components/Character";
import { Point, EnemyParams, EnemyMovement, EnemyMovementProps, EnemyShotPattern, BulletParams, BulletMovement, BulletMovementProps } from "../interfaces";
import { straightMovement, acceleratedMovement, shapeMovement } from "./bulletMovement";


function figureEight(enemy: Character, time: number, p: EnemyMovementProps) {
	return {
		x: p.originX + 60 * Math.sin(time),
		y: p.originY + 30 * Math.sin(2*time)
	};
}

function* wavePattern(): EnemyShotPattern {
	let accBullet = new BulletParams({
		movement: acceleratedMovement(5),
		time: 0,
		radius: 6,
		speed: 140,
		angle: 0,
		aimPlayer: false,
		fromEnemy: false
	});

	let time = 0;
	let waveCols = [10, 30, 70, 90];
	let waveWidth = 5;
	let waveFreq = 2*Math.PI*4/100;

	while (true) {

		// Wave-like lines from top to bottom
		for (let y=0; y<100; y+=1.25*Math.PI) {
			for (let x of waveCols) {

				yield accBullet.modify({
					time,
					angle: 90 - Math.atan(waveWidth*waveFreq*Math.cos(waveFreq*y)) * Phaser.Math.RAD_TO_DEG,
					originX: x + waveWidth * Math.sin(waveFreq*y),
					originY: y
				});
			}
			time += 0.05;
		}
		time += 4;
	}
}

function* polygonPattern(): EnemyShotPattern {
	let accBullet = new BulletParams({
		speed: 220,
	});

	let leftRotation = shapeMovement(-1);
	let rightRotation = shapeMovement(1);

	function scale(radius: number, points: number[][]): number[][] {
		return points.map(p => p.map(x => x*radius));
	}

	let time = 0;
	let shapes = [
		// Hexagon
		scale(70, [ [1,0],[-1,0],[-.5,-.87],[.5,-.87],[-.5,.87],[.5,.87] ]),
		// Square
		scale(56, [ [1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1] ]),
		// Triangle
		scale(83, [ [1,0],[-.5,-.87],[-.5,.87],[.25,.43],[-.5,0],[.25,-.43] ]),
	];
	let index = 0;

	while (true) {

		// Bullets spawning in two circles next to enemy
		for (let x of [-20, 20]) {
			for (let point of shapes[index%3]) {
				yield accBullet.modify({
					time,
					movement: [leftRotation, rightRotation][index%2],
					originX: x,
					originY: 0,
					offsetX: point[0],
					offsetY: point[1]
				});
			}
			time += 1.5;
			index += 1;
		}
	}
}


const MyEnemy: EnemyParams = {
	type: "small_imp",
	health: 200,

	movement: figureEight,
	patterns: {
		easy: [polygonPattern],
		hard: [wavePattern]
	},
};

export default MyEnemy;
