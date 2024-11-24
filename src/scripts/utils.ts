// Return interpolated color between two color1 and color2 at value (0-1)
export function interpolateColor(
	color1: number,
	color2: number,
	value: number
): number {
	return Phaser.Display.Color.ObjectToColor(
		Phaser.Display.Color.Interpolate.ColorWithColor(
			Phaser.Display.Color.ValueToColor(color1),
			Phaser.Display.Color.ValueToColor(color2),
			255,
			value * 255
		)
	).color;
}
