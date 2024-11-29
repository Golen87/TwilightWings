import { Character } from "../components/Character";
import { EnemyMovementProps, Point } from "../interfaces";

export function enemyStandStill(
	enemy: Character,
	time: number,
	p: EnemyMovementProps
) {
	return {
		x: p.originX,
		y: p.originY,
	};
}

export function enemyMoveFigureEight(
	enemy: Character,
	time: number,
	p: EnemyMovementProps
): Point {
	return {
		x: p.originX + 60 * Math.sin(time / 2),
		y: p.originY + 30 * Math.sin(time),
	};
}
