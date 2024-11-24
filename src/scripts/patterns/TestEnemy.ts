import { Character } from "../components/Character";
import { Point, EnemyParams, EnemyMovement, EnemyMovementProps, EnemyShotPattern, BulletParams, BulletMovement, BulletMovementProps } from "../interfaces";
import { straightMovement, acceleratedMovement, shapeMovement } from "./bulletMovement";


function figureEight(enemy: Character, time: number, p: EnemyMovementProps): Point {
	return {
		x: p.originX + 60 * Math.sin(time),
		y: p.originY + 30 * Math.sin(2*time)
	};
}

function spinningBeams(startX: number, direction: number): () => EnemyShotPattern {
	return function*() {
		let bullet = new BulletParams({
			radius: 10,
			originX: startX,
			originY: 20,
			speed: 1000,
			fromEnemy: false,
			aimPlayer: false,
			movement: acceleratedMovement(0.1)
		});
		let time = 0;

		// let leftRotation = shapeMovement(-1);
		// let rightRotation = shapeMovement(1);

		while (true) {

			// Bullets spawning in two circles next to enemy
			const k = 6;
			for (let i = 0; i < k; i++) {

				yield bullet.modify({
					time,
					angle: 30 + direction * 10*time + 360 * (i/k)
				});
			}

			time += 0.01;
		}
	}
}


const TestEnemy: EnemyParams = {
	type: "small_imp",
	health: 200,

	movement: figureEight,
	patterns: {
		easy: [spinningBeams(25, 1)],
		hard: [spinningBeams(75, -1)]
	},
};

export default TestEnemy;
