import { Bullet } from "./components/Bullet";
import { Character } from "./components/Character";
import { straightMovement } from "./patterns/bulletMovement";


// 2D point
interface Point {
	x: number;
	y: number;
}


// Bullet movement function props
interface BulletMovementProps {
	spawnTime: number;
	speed: number;
	angle: number;

	originX: number;
	originY: number;
	offsetX: number;
	offsetY: number;
	offsetAngle: number;
	offsetRadius: number;
	facingX: number;
	facingY: number;
}

// Bullet movement function
type BulletMovement = (bullet: Bullet, time: number, p: BulletMovementProps) => Point;


class BulletParams {
	movement: BulletMovement;
	time: number;
	radius: number;
	speed: number;
	angle: number;

	originX: number;
	originY: number;
	offsetX: number;
	offsetY: number;
	offsetAngle: number;
	offsetRadius: number;

	aimPlayer: boolean; // Adds enemy->player direction to angle
	fromEnemy: boolean; // Adds enemy position to start

	// type: boolean; // If true, bullet will be the same daytime as the enemy
	// wait: number; // Seconds the pattern stalls til the next attack

	// These can be made as arrays as a compact mean to play multiple variants
	// radius?: number | number[]; // Bullet radius - Default: 6
	// speed?: number | number[]; // Bullet speed - Default: 100
	// amount?: number | number[]; // Amount of bullets spawned - Default: 1
	// offset?: number | number[]; // Offset angle added to `angle` - Default: 0
	// degrees?: number | number[]; // Total angle of arc - Default: 360

	// angle?: number; // Direction of attack - Default: facing towards player
	// x?: number; // Origin or attack - Default: enemy position
	// y?: number;
	// varx?: number; // Variable random offset from origin point. Interpreted as range from -n/2 to +n/2 - Default: 0
	// vary?: number;
	// varoff?: number; // Variable random offset to angle. Added to "offset". Interpreted as range from -n/2 to +n/2 - Default: 0

	constructor(p) {
		this.movement = p.movement ?? straightMovement();
		this.time = p.time ?? 0;
		this.radius = p.radius ?? 6;
		this.speed = p.speed ?? 100;
		this.angle = p.angle ?? 0;

		this.originX = p.originX ?? 0;
		this.originY = p.originY ?? 0;
		this.offsetX = p.offsetX ?? 0;
		this.offsetY = p.offsetY ?? 0;
		// this.offsetAngle = p.offsetAngle ?? 0;
		// this.offsetRadius = p.offsetRadius ?? 0;

		this.aimPlayer = p.aimPlayer ?? true;
		this.fromEnemy = p.fromEnemy ?? true;
	}

	modify(changes: any) {
		for (let key in changes) {
			this[key] = changes[key];
		}
		return this;
	}
}


// Enemy movement function props
interface EnemyMovementProps {
	spawnTime: number;
	originX: number;
	originY: number;
}

// Enemy movement function
type EnemyMovement = (enemy: Character, time: number, p: EnemyMovementProps) => Point;

// Enemy shooting function
/**
 * - yields numbers
 * - returns strings
 * - can be passed in booleans
 */
type EnemyShotPattern = IterableIterator<BulletParams>;

interface EnemyPatterns {
	easy: (() => EnemyShotPattern)[];
	hard: (() => EnemyShotPattern)[];
};

// Enemy spawn data
interface EnemyParams {
	type: string;
	health: number;
	// pattern?: any;
	// phases?: any;
	// x: number;
	// y: number;
	// spawnDelay: number;
	movement: EnemyMovement;
	patterns: EnemyPatterns;
	// *generator(count:number): IterableIterator<number>;
}


export {
	Point,

	BulletParams,
	BulletMovement,
	BulletMovementProps,

	EnemyParams,
	EnemyMovement,
	EnemyMovementProps,
	EnemyShotPattern,
	EnemyPatterns,
}
