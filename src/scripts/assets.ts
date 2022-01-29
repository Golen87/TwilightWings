/* Interface */

interface Asset {
	key: string;
	path: string;
}

interface SpriteSheet {
	key: string;
	path: string;
	width: number;
	height: number;
}


/* Images */

import bg_night_moon from "../assets/images/backgrounds/bg_night_moon.png";
import bg_night_stars from "../assets/images/backgrounds/bg_night_stars.png";
import bg_night_light from "../assets/images/backgrounds/bg_night_light.png";
import bg_night from "../assets/images/backgrounds/bg_night.png";
import bg_day_sun from "../assets/images/backgrounds/bg_day_sun.png";
import bg_clouds from "../assets/images/backgrounds/bg_clouds.png";
import bg_day from "../assets/images/backgrounds/bg_day.png";

import ui_text from "../assets/images/ui/ui_text.png";
import ui_bg_day from "../assets/images/ui/ui_bg_day.png";
import ui_bg_night from "../assets/images/ui/ui_bg_night.png";
import ui_bg from "../assets/images/ui/ui_bg.png";
import ui_heart from "../assets/images/ui/ui_heart.png";
import ui_bomb from "../assets/images/ui/ui_bomb.png";

import angel from "../assets/images/characters/angel.png";

const images: Asset[] = [
	{ key: "bg_night_moon",	path: bg_night_moon },
	{ key: "bg_night_stars",	path: bg_night_stars },
	{ key: "bg_night_light",	path: bg_night_light },
	{ key: "bg_night",	path: bg_night },
	{ key: "bg_day_sun",	path: bg_day_sun },
	{ key: "bg_clouds",	path: bg_clouds },
	{ key: "bg_day",	path: bg_day },

	{ key: "ui_text",	path: ui_text },
	{ key: "ui_bg_day",	path: ui_bg_day },
	{ key: "ui_bg_night",	path: ui_bg_night },
	{ key: "ui_bg",	path: ui_bg },
	{ key: "ui_heart",	path: ui_heart },
	{ key: "ui_bomb",	path: ui_bomb },

	{ key: "angel",	path: angel },
];


/* Spritesheets */

import ui_clock from "../assets/images/ui/ui_clock.png";

import boss from "../assets/images/characters/boss.png";
import player from "../assets/images/characters/player.png";

import explosion from "../assets/images/explosion.png";
import bullet from "../assets/images/bullet_circle.png";
import feather from "../assets/images/feather.png";

const spritesheets: SpriteSheet[] = [
	{ key: "ui_clock",	path: ui_clock,		width: 400,	height: 320 },

	{ key: "boss",		path: boss,			width: 512,	height: 512 },
	{ key: "player",	path: player,		width: 256,	height: 256 },

	{ key: "explosion",	path: explosion,	width: 200,	height: 282 },
	{ key: "bullet",	path: bullet,		width: 128,	height: 128 },
	{ key: "feather",	path: feather,		width: 64,	height: 64 },
];


/* Export */

export {
	images,
	spritesheets
};