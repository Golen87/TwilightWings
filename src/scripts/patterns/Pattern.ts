export default interface Pattern {
	type: boolean; // If true, bullet will be the same daytime as the enemy
	wait: number; // Seconds the pattern stalls til the next attack

	// These can be made as arrays as a compact mean to play multiple variants
	radius?: number | number[]; // Bullet radius - Default: 6
	speed?: number | number[]; // Bullet speed - Default: 100
	amount?: number | number[]; // Amount of bullets spawned - Default: 1
	offset?: number | number[]; // Offset angle added to `angle` - Default: 0
	degrees?: number | number[]; // Total angle of arc - Default: 360

	angle?: number; // Direction of attack - Default: facing towards player
	x?: number; // Origin or attack - Default: enemy position
	y?: number;
	varx?: number; // Variable random offset from origin point - Default: 0
	vary?: number;
}
