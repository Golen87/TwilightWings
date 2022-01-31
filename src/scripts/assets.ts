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

interface Audio {
	key: string;
	path: string;
	volume: number;
	rate?: number;
}


/* Images */

import bg_night_moon from "../assets/images/backgrounds/bg_night_moon.png";
import bg_night_stars from "../assets/images/backgrounds/bg_night_stars.png";
import bg_night_light from "../assets/images/backgrounds/bg_night_light.png";
import bg_night from "../assets/images/backgrounds/bg_night.png";
import bg_day_sun from "../assets/images/backgrounds/bg_day_sun.png";
import bg_clouds from "../assets/images/backgrounds/bg_clouds2.png";
import bg_day from "../assets/images/backgrounds/bg_day.png";

import ui_text from "../assets/images/ui/ui_text.png";
import ui_bg from "../assets/images/ui/ui_bg.png";
import ui_heart from "../assets/images/ui/ui_heart.png";
import ui_heart_empty from "../assets/images/ui/ui_heart_empty.png";
import ui_bomb from "../assets/images/ui/ui_bomb.png";
import ui_healthbar from "../assets/images/ui/ui_healthbar.png";
import america_outline from "../assets/images/backgrounds/America_Outline.png";
import america_outline2 from "../assets/images/backgrounds/America_Outline2.png";
import owl_outline from "../assets/images/backgrounds/Owl_Outline.png";
import owl_outline2 from "../assets/images/backgrounds/Owl_Outline2.png";

import boss from "../assets/images/characters/boss.png";
import angel from "../assets/images/characters/angel.png";
import small_angel from "../assets/images/characters/small_angel.png";
import small_imp from "../assets/images/characters/small_imp.png";
import face from "../assets/images/face.png";

import CoverArtImp from "../assets/images/CoverArtImp.png";
import CoverArtAngel from "../assets/images/CoverArtAngel.png";
import CoverArtBird from "../assets/images/CoverArtBird.png";
import CoverArtBg from "../assets/images/CoverArtBg.png";
import BirdTut1 from "../assets/images/BirdTut1.png";
import BirdTut2 from "../assets/images/BirdTut2.png";
import BirdTut3 from "../assets/images/BirdTut3.png";

const images: Asset[] = [
	{ key: "bg_night_moon",	path: bg_night_moon },
	{ key: "bg_night_stars",	path: bg_night_stars },
	{ key: "bg_night_light",	path: bg_night_light },
	{ key: "bg_night",	path: bg_night },
	{ key: "bg_day_sun",	path: bg_day_sun },
	{ key: "bg_clouds",	path: bg_clouds },
	{ key: "bg_day",	path: bg_day },

	{ key: "ui_text",	path: ui_text },
	{ key: "ui_bg",	path: ui_bg },
	{ key: "ui_heart",	path: ui_heart },
	{ key: "ui_heart_empty",	path: ui_heart_empty },
	{ key: "ui_bomb",	path: ui_bomb },
	{ key: "ui_healthbar",	path: ui_healthbar },
	{ key: "america_outline",	path: america_outline },
	{ key: "america_outline2",	path: america_outline2 },
	{ key: "owl_outline",	path: owl_outline },
	{ key: "owl_outline2",	path: owl_outline2 },

	{ key: "boss",	path: boss },
	// { key: "angel",	path: angel },
	{ key: "small_angel",	path: small_angel },
	{ key: "small_imp",	path: small_imp },
	{ key: "face",	path: face },

	{ key: "CoverArtImp",	path: CoverArtImp },
	{ key: "CoverArtAngel",	path: CoverArtAngel },
	{ key: "CoverArtBird",	path: CoverArtBird },
	{ key: "CoverArtBg",	path: CoverArtBg },
	{ key: "BirdTut1",	path: BirdTut1 },
	{ key: "BirdTut2",	path: BirdTut2 },
	{ key: "BirdTut3",	path: BirdTut3 },
];


/* Spritesheets */

import ui_clock from "../assets/images/ui/ui_clock.png";

import player from "../assets/images/characters/player.png";

import explosion from "../assets/images/explosion.png";
import bullet_core from "../assets/images/bullet_core.png";
import bullet_glow from "../assets/images/bullet_glow.png";
import feather from "../assets/images/feather.png";

const spritesheets: SpriteSheet[] = [
	{ key: "ui_clock",	path: ui_clock,		width: 400,	height: 320 },

	{ key: "player",	path: player,		width: 256,	height: 256 },

	{ key: "explosion",	path: explosion,	width: 200,	height: 282 },
	{ key: "bullet_core",	path: bullet_core,		width: 95,	height: 95 },
	{ key: "bullet_glow",	path: bullet_glow,		width: 128,	height: 128 },
	{ key: "feather",	path: feather,		width: 64,	height: 64 },
];


/* Sounds */

import a_boom from "../assets/sounds/memes/a_boom.ogg";
import c_bruh from "../assets/sounds/memes/c_bruh.ogg";
import d_bong from "../assets/sounds/memes/d_bong.ogg";
// import e_skull from "../assets/sounds/memes/e_skull.ogg";
// import f_clap from "../assets/sounds/memes/f_clap.ogg";
import g_dog from "../assets/sounds/memes/g_dog.ogg";
// import h_alien from "../assets/sounds/memes/h_alien.ogg";
// import i_bell from "../assets/sounds/memes/i_bell.ogg";
// import j_anger from "../assets/sounds/memes/j_anger.ogg";
// import k_steam from "../assets/sounds/memes/k_steam.ogg";
// import l_stop from "../assets/sounds/memes/l_stop.ogg";
// import m_phone from "../assets/sounds/memes/m_phone.ogg";
// import n_sunrise from "../assets/sounds/memes/n_sunrise.ogg";
// import o_whatsapp from "../assets/sounds/memes/o_whatsapp.ogg";
// import p_bonk from "../assets/sounds/memes/p_bonk.ogg";
// import q_alarm from "../assets/sounds/memes/q_alarm.ogg";
// import r_exclamation from "../assets/sounds/memes/r_exclamation.ogg";
// import s_crab from "../assets/sounds/memes/s_crab.ogg";
// import t_e from "../assets/sounds/memes/t_e.ogg";
// import u_pizza from "../assets/sounds/memes/u_pizza.ogg";
// import v_swan from "../assets/sounds/memes/v_swan.ogg";
import w_explosion from "../assets/sounds/memes/w_explosion.ogg";
// import x_americano from "../assets/sounds/memes/x_americano.ogg";
// import a_smw_coin from "../assets/sounds/memes/a_smw_coin.ogg";
// import b_smw_1up from "../assets/sounds/memes/b_smw_1up.ogg";
// import c_smw_spinjump from "../assets/sounds/memes/c_smw_spinjump.ogg";
// import d_smw_stomp2 from "../assets/sounds/memes/d_smw_stomp2.ogg";
// import e_smw_kick from "../assets/sounds/memes/e_smw_kick.ogg";
// import f_smw_stomp from "../assets/sounds/memes/f_smw_stomp.ogg";
// import g_smw_yoshi from "../assets/sounds/memes/g_smw_yoshi.ogg";
// import h_mariopaint_flower from "../assets/sounds/memes/h_mariopaint_flower.ogg";
// import i_mariopaint_car from "../assets/sounds/memes/i_mariopaint_car.ogg";
// import j_mariopaint_dog from "../assets/sounds/memes/j_mariopaint_dog.ogg";
// import k_mariopaint_cat from "../assets/sounds/memes/k_mariopaint_cat.ogg";
// import l_mariopaint_baby from "../assets/sounds/memes/l_mariopaint_baby.ogg";
// import a_shaker from "../assets/sounds/memes/a_shaker.ogg";
// import b_drums from "../assets/sounds/memes/b_drums.ogg";
// import c_hammer from "../assets/sounds/memes/c_hammer.ogg";
// import d_sidestick from "../assets/sounds/memes/d_sidestick.ogg";
// import e_ride2 from "../assets/sounds/memes/e_ride2.ogg";
// import f_buttonpop from "../assets/sounds/memes/f_buttonpop.ogg";
// import g_otto_on from "../assets/sounds/memes/g_otto_on.ogg";
// import h_otto_off from "../assets/sounds/memes/h_otto_off.ogg";
// import i_otto_happy from "../assets/sounds/memes/i_otto_happy.ogg";
// import j_otto_stress from "../assets/sounds/memes/j_otto_stress.ogg";
// import k_skipshot from "../assets/sounds/memes/k_skipshot.ogg";
// import l_samurai from "../assets/sounds/memes/l_samurai.ogg";
// import m_tab_sounds from "../assets/sounds/memes/m_tab_sounds.ogg";
// import n_tab_rows from "../assets/sounds/memes/n_tab_rows.ogg";
// import o_tab_actions from "../assets/sounds/memes/o_tab_actions.ogg";
// import p_tab_rooms from "../assets/sounds/memes/p_tab_rooms.ogg";
// import q_tonk from "../assets/sounds/memes/q_tonk.ogg";
// import r_adofaikick from "../assets/sounds/memes/r_adofaikick.ogg";
// import s_midspin from "../assets/sounds/memes/s_midspin.ogg";
// import t_cowbell from "../assets/sounds/memes/t_cowbell.ogg";
// import u_karateman_throw from "../assets/sounds/memes/u_karateman_throw.ogg";
// import v_karateman_hit from "../assets/sounds/memes/v_karateman_hit.ogg";
// import w_ook from "../assets/sounds/memes/w_ook.ogg";
// import x_star from "../assets/sounds/memes/x_star.ogg";
// import yb_fnf_left from "../assets/sounds/memes/yb_fnf_left.ogg";
// import yc_fnf_down from "../assets/sounds/memes/yc_fnf_down.ogg";
// import yd_fnf_up from "../assets/sounds/memes/yd_fnf_up.ogg";
// import ye_fnf_right from "../assets/sounds/memes/ye_fnf_right.ogg";
// import yf_fnf_death from "../assets/sounds/memes/yf_fnf_death.ogg";
// import y_gun from "../assets/sounds/memes/y_gun.ogg";
// import z_gnome from "../assets/sounds/memes/z_gnome.ogg";
// import za_disc from "../assets/sounds/memes/za_disc.ogg";
// import zb_party from "../assets/sounds/memes/zb_party.ogg";
// import zc_violin from "../assets/sounds/memes/zc_violin.ogg";
// import zd_slip from "../assets/sounds/memes/zd_slip.ogg";
// import ze_hehehehaw from "../assets/sounds/memes/ze_hehehehaw.ogg";
import a_necoarc from "../assets/sounds/memes/a_necoarc.ogg";
// import b_megalovania from "../assets/sounds/memes/b_megalovania.ogg";
// import c_undertale_encounter from "../assets/sounds/memes/c_undertale_encounter.ogg";
// import d_undertale_hit from "../assets/sounds/memes/d_undertale_hit.ogg";
// import e_undertale_crack from "../assets/sounds/memes/e_undertale_crack.ogg";
// import ea_gaster from "../assets/sounds/memes/ea_gaster.ogg";
// import eb_yahoo from "../assets/sounds/memes/eb_yahoo.ogg";
// import f_bup from "../assets/sounds/memes/f_bup.ogg";
// import ff_thwomp from "../assets/sounds/memes/ff_thwomp.ogg";
// import g_amongus from "../assets/sounds/memes/g_amongus.ogg";
// import h_amongdrip from "../assets/sounds/memes/h_amongdrip.ogg";
// import i_amogus from "../assets/sounds/memes/i_amogus.ogg";
// import j_gdcrash from "../assets/sounds/memes/j_gdcrash.ogg";
// import k_gdcrash_orbs from "../assets/sounds/memes/k_gdcrash_orbs.ogg";
// import l_gd_coin from "../assets/sounds/memes/l_gd_coin.ogg";
// import m_gd_orbs from "../assets/sounds/memes/m_gd_orbs.ogg";
// import n_gd_diamonds from "../assets/sounds/memes/n_gd_diamonds.ogg";
// import o_bwomp from "../assets/sounds/memes/o_bwomp.ogg";
// import q_isaac_hurt from "../assets/sounds/memes/q_isaac_hurt.ogg";
// import r_isaac_dead from "../assets/sounds/memes/r_isaac_dead.ogg";
// import ra_isaac_mantle from "../assets/sounds/memes/ra_isaac_mantle.ogg";
// import s_oof from "../assets/sounds/memes/s_oof.ogg";
// import sa_subaluwa from "../assets/sounds/memes/sa_subaluwa.ogg";
// import t_yoda from "../assets/sounds/memes/t_yoda.ogg";
// import a_noteblock_harp from "../assets/sounds/memes/a_noteblock_harp.ogg";
// import b_noteblock_bass from "../assets/sounds/memes/b_noteblock_bass.ogg";
// import c_noteblock_snare from "../assets/sounds/memes/c_noteblock_snare.ogg";
// import d_noteblock_click from "../assets/sounds/memes/d_noteblock_click.ogg";
// import e_noteblock_bell from "../assets/sounds/memes/e_noteblock_bell.ogg";
// import f_noteblock_chime from "../assets/sounds/memes/f_noteblock_chime.ogg";
// import g_noteblock_banjo from "../assets/sounds/memes/g_noteblock_banjo.ogg";
// import h_noteblock_pling from "../assets/sounds/memes/h_noteblock_pling.ogg";
// import i_noteblock_xylophone from "../assets/sounds/memes/i_noteblock_xylophone.ogg";
// import j_noteblock_bit from "../assets/sounds/memes/j_noteblock_bit.ogg";
// import k_minecraft_explosion from "../assets/sounds/memes/k_minecraft_explosion.ogg";
// import l_minecraft_bell from "../assets/sounds/memes/l_minecraft_bell.ogg";

import death from "../assets/sounds/Death.ogg";
import enemyShotDay from "../assets/sounds/EnemyShotDay.ogg";
import enemyShotNight from "../assets/sounds/EnemyShotNight.ogg";
import graze from "../assets/sounds/Graze.ogg";
import playerShot from "../assets/sounds/PlayerShot.ogg";
import dayShift from "../assets/sounds/DayShift.ogg";
import nightShift from "../assets/sounds/NightShift.ogg";
import flightLoop from "../assets/sounds/FlightLoop.ogg";
import damage from "../assets/sounds/Damage.ogg";
import bossDamage from "../assets/sounds/BossDamage.ogg";
import complete from "../assets/sounds/Complete.ogg";
import score from "../assets/sounds/Score.ogg";


import music_day from "../assets/sounds/TwilightWings_Day.ogg";
import music_night from "../assets/sounds/TwilightWings_Night.ogg";
import music_title from "../assets/sounds/TwilightWings_Title.ogg";

const audios: Audio[] = [
	{ key: "music_day", path: music_day, volume: 0 },
	{ key: "music_night", path: music_night, volume: 0 },
	{ key: "music_title", path: music_title, volume: 0 },

	{ key: "wind", path: flightLoop, volume: 0.5 },
	{ key: "dayShift", path: dayShift, volume: 0.8 },
	{ key: "nightShift", path: nightShift, volume: 0.9 },

	// Player
	{ key: "playerDamage", path: damage, volume: 0.8, rate: 0.4 },
	{ key: "playerDeath", path: damage, volume: 0.9, rate: 0.5 },
	{ key: "playerDestroy", path: death, volume: 0.7, rate: 0.7 },

	// Enemy
	{ key: "enemyDeath", path: death, volume: 0.6, rate: 0.9 },
	{ key: "enemyDestroy", path: complete, volume: 0.6, rate: 0.9 },
	{ key: "enemyDamage", path: enemyShotNight, volume: 0.1, rate: 0.9 },
	{ key: "enemyDamageHigh", path: graze, volume: 0.15, rate: 0.5 },
	{ key: "enemyDamageLow", path: graze, volume: 0.2, rate: 0.4 },
	{ key: "bossSpawn", path: death, volume: 0.8, rate: 0.5 },

	{ key: "enemyShotDay", path: enemyShotDay, volume: 0.2 },
	{ key: "enemyShotNight", path: enemyShotNight, volume: 0.2 },
	{ key: "playerShot", path: playerShot, volume: 0.6 },
	{ key: "score", path: score, volume: 0.5 },
	{ key: "graze", path: graze, volume: 0.1, rate: 0.8 },

	{ key: "boom", path: a_boom, volume: 0.5 },
	{ key: "bruh", path: c_bruh, volume: 0.5 },
	{ key: "bong", path: d_bong, volume: 0.5 },
	// { key: "skull", path: e_skull, volume: 0.5 },
	// { key: "clap", path: f_clap, volume: 0.5 },
	{ key: "dog", path: g_dog, volume: 0.5 },
	// { key: "alien", path: h_alien, volume: 0.5 },
	// { key: "bell", path: i_bell, volume: 0.5 },
	// { key: "anger", path: j_anger, volume: 0.5 },
	// { key: "steam", path: k_steam, volume: 0.5 },
	// { key: "stop", path: l_stop, volume: 0.5 },
	// { key: "phone", path: m_phone, volume: 0.5 },
	// { key: "sunrise", path: n_sunrise, volume: 0.5 },
	// { key: "whatsapp", path: o_whatsapp, volume: 0.5 },
	// { key: "bonk", path: p_bonk, volume: 0.5 },
	// { key: "alarm", path: q_alarm, volume: 0.5 },
	// { key: "exclamation", path: r_exclamation, volume: 0.5 },
	// { key: "crab", path: s_crab, volume: 0.5 },
	// { key: "e", path: t_e, volume: 0.5 },
	// { key: "pizza", path: u_pizza, volume: 0.5 },
	// { key: "swan", path: v_swan, volume: 0.5 },
	{ key: "explosion", path: w_explosion, volume: 0.5 },
	// { key: "americano", path: x_americano, volume: 0.5 },
	// { key: "smw_coin", path: a_smw_coin, volume: 0.5 },
	// { key: "smw_1up", path: b_smw_1up, volume: 0.5 },
	// { key: "smw_spinjump", path: c_smw_spinjump, volume: 0.5 },
	// { key: "smw_stomp2", path: d_smw_stomp2, volume: 0.5 },
	// { key: "smw_kick", path: e_smw_kick, volume: 0.5 },
	// { key: "smw_stomp", path: f_smw_stomp, volume: 0.5 },
	// { key: "smw_yoshi", path: g_smw_yoshi, volume: 0.5 },
	// { key: "mariopaint_flower", path: h_mariopaint_flower, volume: 0.5 },
	// { key: "mariopaint_car", path: i_mariopaint_car, volume: 0.5 },
	// { key: "mariopaint_dog", path: j_mariopaint_dog, volume: 0.5 },
	// { key: "mariopaint_cat", path: k_mariopaint_cat, volume: 0.5 },
	// { key: "mariopaint_baby", path: l_mariopaint_baby, volume: 0.5 },
	// { key: "shaker", path: a_shaker, volume: 0.5 },
	// { key: "drums", path: b_drums, volume: 0.5 },
	// { key: "hammer", path: c_hammer, volume: 0.5 },
	// { key: "sidestick", path: d_sidestick, volume: 0.5 },
	// { key: "ride2", path: e_ride2, volume: 0.5 },
	// { key: "buttonpop", path: f_buttonpop, volume: 0.5 },
	// { key: "otto_on", path: g_otto_on, volume: 0.5 },
	// { key: "otto_off", path: h_otto_off, volume: 0.5 },
	// { key: "otto_happy", path: i_otto_happy, volume: 0.5 },
	// { key: "otto_stress", path: j_otto_stress, volume: 0.5 },
	// { key: "skipshot", path: k_skipshot, volume: 0.5 },
	// { key: "samurai", path: l_samurai, volume: 0.5 },
	// { key: "tab_sounds", path: m_tab_sounds, volume: 0.5 },
	// { key: "tab_rows", path: n_tab_rows, volume: 0.5 },
	// { key: "tab_actions", path: o_tab_actions, volume: 0.5 },
	// { key: "tab_rooms", path: p_tab_rooms, volume: 0.5 },
	// { key: "tonk", path: q_tonk, volume: 0.5 },
	// { key: "adofaikick", path: r_adofaikick, volume: 0.5 },
	// { key: "midspin", path: s_midspin, volume: 0.5 },
	// { key: "cowbell", path: t_cowbell, volume: 0.5 },
	// { key: "karateman_throw", path: u_karateman_throw, volume: 0.5 },
	// { key: "karateman_hit", path: v_karateman_hit, volume: 0.5 },
	// { key: "ook", path: w_ook, volume: 0.5 },
	// { key: "star", path: x_star, volume: 0.5 },
	// { key: "fnf_left", path: yb_fnf_left, volume: 0.5 },
	// { key: "fnf_down", path: yc_fnf_down, volume: 0.5 },
	// { key: "fnf_up", path: yd_fnf_up, volume: 0.5 },
	// { key: "fnf_right", path: ye_fnf_right, volume: 0.5 },
	// { key: "fnf_death", path: yf_fnf_death, volume: 0.5 },
	// { key: "gun", path: y_gun, volume: 0.5 },
	// { key: "gnome", path: z_gnome, volume: 0.5 },
	// { key: "disc", path: za_disc, volume: 0.5 },
	// { key: "party", path: zb_party, volume: 0.5 },
	// { key: "violin", path: zc_violin, volume: 0.5 },
	// { key: "slip", path: zd_slip, volume: 0.5 },
	// { key: "hehehehaw", path: ze_hehehehaw, volume: 0.5 },
	{ key: "necoarc", path: a_necoarc, volume: 0.5 },
	// { key: "megalovania", path: b_megalovania, volume: 0.5 },
	// { key: "undertale_encounter", path: c_undertale_encounter, volume: 0.5 },
	// { key: "undertale_hit", path: d_undertale_hit, volume: 0.5 },
	// { key: "undertale_crack", path: e_undertale_crack, volume: 0.5 },
	// { key: "gaster", path: ea_gaster, volume: 0.5 },
	// { key: "yahoo", path: eb_yahoo, volume: 0.5 },
	// { key: "bup", path: f_bup, volume: 0.5 },
	// { key: "thwomp", path: ff_thwomp, volume: 0.5 },
	// { key: "amongus", path: g_amongus, volume: 0.5 },
	// { key: "amongdrip", path: h_amongdrip, volume: 0.5 },
	// { key: "amogus", path: i_amogus, volume: 0.5 },
	// { key: "gdcrash", path: j_gdcrash, volume: 0.5 },
	// { key: "gdcrash_orbs", path: k_gdcrash_orbs, volume: 0.5 },
	// { key: "gd_coin", path: l_gd_coin, volume: 0.5 },
	// { key: "gd_orbs", path: m_gd_orbs, volume: 0.5 },
	// { key: "gd_diamonds", path: n_gd_diamonds, volume: 0.5 },
	// { key: "bwomp", path: o_bwomp, volume: 0.5 },
	// { key: "isaac_hurt", path: q_isaac_hurt, volume: 0.5 },
	// { key: "isaac_dead", path: r_isaac_dead, volume: 0.5 },
	// { key: "isaac_mantle", path: ra_isaac_mantle, volume: 0.5 },
	// { key: "oof", path: s_oof, volume: 0.5 },
	// { key: "subaluwa", path: sa_subaluwa, volume: 0.5 },
	// { key: "yoda", path: t_yoda, volume: 0.5 },
	// { key: "noteblock_harp", path: a_noteblock_harp, volume: 0.5 },
	// { key: "noteblock_bass", path: b_noteblock_bass, volume: 0.5 },
	// { key: "noteblock_snare", path: c_noteblock_snare, volume: 0.5 },
	// { key: "noteblock_click", path: d_noteblock_click, volume: 0.5 },
	// { key: "noteblock_bell", path: e_noteblock_bell, volume: 0.5 },
	// { key: "noteblock_chime", path: f_noteblock_chime, volume: 0.5 },
	// { key: "noteblock_banjo", path: g_noteblock_banjo, volume: 0.5 },
	// { key: "noteblock_pling", path: h_noteblock_pling, volume: 0.5 },
	// { key: "noteblock_xylophone", path: i_noteblock_xylophone, volume: 0.5 },
	// { key: "noteblock_bit", path: j_noteblock_bit, volume: 0.5 },
	// { key: "minecraft_explosion", path: k_minecraft_explosion, volume: 0.5 },
	// { key: "minecraft_bell", path: l_minecraft_bell, volume: 0.5 },
];


/* Export */

export {
	images,
	spritesheets,
	audios
};