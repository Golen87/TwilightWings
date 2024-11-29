import { EnemyParams, EnemyShotPattern, BulletParams } from "../interfaces";
import { acceleratedMovement } from "./bulletMovement";
import { enemyMoveFigureEight } from "./enemyMovement";

function spinningBeams(
	startX: number,
	direction: number
): () => EnemyShotPattern {
	return function* () {
		let bullet = new BulletParams({
			radius: 10,
			originX: startX,
			originY: 20,
			speed: 1000,
			fromEnemy: false,
			aimPlayer: false,
			movement: acceleratedMovement(0.1),
		});
		let time = 0;

		while (true) {
			// Bullets spawning in two circles next to enemy
			const k = 6;
			for (let i = 0; i < k; i++) {
				yield bullet.modify({
					time,
					angle: 30 + direction * 10 * time + 360 * (i / k),
				});
			}

			time += 0.01;
		}
	};
}

const TestEnemy: EnemyParams = {
	type: "small_imp",
	health: 200,

	movement: enemyMoveFigureEight,
	patterns: {
		easy: [spinningBeams(25, 1)],
		hard: [spinningBeams(75, -2)],
	},
};

export default TestEnemy;
