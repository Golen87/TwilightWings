interface MusicData {
	offset: number;
	bpm: number;
	loop?: boolean;
	start?: number;
	end?: number;
}

const musicData: { [key: string]: MusicData } = {
	music_day: {
		offset: 4.151,
		bpm: 159,
		loop: true,
		start: 4.151,
		end: 56.981,
	},
	music_night: {
		offset: 4.151,
		bpm: 159,
		loop: true,
		start: 4.151,
		end: 56.981,
	},
	music_title: {
		offset: 0.424,
		bpm: 60,
		// loop: true,
		// start: 4.151,
		// end: 56.981,
	},
	music_miau: {
		offset: 3.285 - (60 / 150) * 2,
		bpm: 150,
		loop: true,
		start: 6.472,
		end: 6.472 + 76.8,
	},
};

export default musicData;
