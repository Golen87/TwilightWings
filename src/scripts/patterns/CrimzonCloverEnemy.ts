import { EnemyParams, EnemyShotPattern, BulletParams } from "../interfaces";
import { straightMovement } from "./bulletMovement";
import { enemyMoveFigureEight } from "./enemyMovement";

function* wingTurrets(): EnemyShotPattern {
	let bullet = new BulletParams({
		movement: straightMovement(),
		aimPlayer: false,
		fromEnemy: true,
	});

	let time = 0;

	while (true) {
		for (let a = 0; a < 12; a++) {
			let angle = (360 / 12) * (a + 0.7);

			for (let o = 0; o < 4; o++) {
				let originX = 25 + 4 * o;
				let originY = 0 - 1 * o;

				for (let s = -1; s < 2; s += 2) {
					// Left side fast
					yield bullet.modify({
						time,
						originX: s * originX,
						originY,
						angle: 90 + s * angle,
						speed: 70,
						radius: 8,
					});
					// Left side slow
					yield bullet.modify({
						time,
						originX: s * originX,
						originY,
						angle: 90 + s * angle,
						speed: 60,
						radius: 6,
					});
				}
			}
			time += 0.5;
		}
	}
}

function* centerTurrets(): EnemyShotPattern {
	let bullet = new BulletParams({
		movement: straightMovement(),
		aimPlayer: true,
		fromEnemy: true,
	});

	let time = 0;

	while (true) {
		for (let sign = -1; sign < 2; sign += 2) {
			for (let dx = 0; dx < 2; dx++) {
				for (let k = 0; k < 3; k++) {
					yield bullet.modify({
						time,
						originX: (7 + 7 * dx) * sign,
						originY: -5 - 2 * dx,
						speed: 70 - 5 * k,
						radius: 8 - 2 * dx,
						angle: -7 * dx * sign,
					});
				}
			}
		}
		time += 2.5;
	}
}

function slowSpin(direction: number): () => EnemyShotPattern {
	return function* () {
		let bullet = new BulletParams({
			movement: straightMovement(),
			aimPlayer: false,
			fromEnemy: true,
			originX: 20 * direction,
			originY: -15,
			radius: 10,
			audible: false,
		});

		let time = 0;

		while (true) {
			yield bullet.modify({
				time,
				angle: 20 * time * direction,
			});

			time += 0.1;
		}
	};
}

export const CrimzonCloverEnemy: EnemyParams = {
	type: "small_angel",
	health: 200,

	movement: enemyMoveFigureEight,
	patterns: {
		easy: [centerTurrets, slowSpin(1)],
		hard: [wingTurrets, slowSpin(-1)],
	},
};
