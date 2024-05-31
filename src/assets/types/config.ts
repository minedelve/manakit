export interface Breakpoints {
	[key: string]: string | number;
}

export interface Fonts {
	[key: string]: {
		[key: string]: string;
	};
}

export interface Themes {
	[key: string]: {
		[key: string]: string | { light?: string; dark?: string };
	};
}

export type Palette = 'manakit' | 'webkit' | string[];
export type Mode = 'light' | 'dark' | 'mixed';

export interface ConvertJSToCSSProps {
	mode: Mode;
	breakpoints: Breakpoints;
	fonts: Fonts;
	themes: Themes;
	palette: Palette;
	minimify: boolean;
}
