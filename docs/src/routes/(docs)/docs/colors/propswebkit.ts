interface ColorVariants {
	light: string;
	dark: string;
	accessibleLight: string;
	accessibleDark: string;
	vibrantLight?: string;
	vibrantDark?: string;
	vibrantAccessibleLight?: string;
	vibrantAccessibleDark?: string;
}

export interface PaletteWebkit {
	[color: string]: ColorVariants;
}

export const paletteWebkit: PaletteWebkit = {
	red: {
		light: 'rgb(255, 59, 48)',
		dark: 'rgb(255, 69, 58)',
		accessibleLight: 'rgb(215, 0, 21)',
		accessibleDark: 'rgb(255, 105, 97)',
		vibrantLight: 'rgb(255, 49, 38)',
		vibrantDark: 'rgb(255, 79, 68)',
		vibrantAccessibleLight: 'rgb(194, 6, 24)',
		vibrantAccessibleDark: 'rgb(255, 65, 54)'
	},
	orange: {
		light: 'rgb(255, 149, 0)',
		dark: 'rgb(255, 159, 10)',
		accessibleLight: 'rgb(201, 52, 0)',
		accessibleDark: 'rgb(255, 179, 64)',
		vibrantLight: 'rgb(245, 139, 0)',
		vibrantDark: 'rgb(255, 169, 20)',
		vibrantAccessibleLight: 'rgb(173, 58, 0)',
		vibrantAccessibleDark: 'rgb(255, 179, 64)'
	},
	yellow: {
		light: 'rgb(255, 204, 0)',
		dark: 'rgb(255, 214, 10)',
		accessibleLight: 'rgb(160, 90, 0)',
		accessibleDark: 'rgb(255, 212, 38)',
		vibrantLight: 'rgb(245, 194, 0)',
		vibrantDark: 'rgb(255, 224, 20)',
		vibrantAccessibleLight: 'rgb(146, 81, 0)',
		vibrantAccessibleDark: 'rgb(255, 212, 38)'
	},
	green: {
		light: 'rgb(40, 205, 65)',
		dark: 'rgb(50, 215, 75)',
		accessibleLight: 'rgb(0, 125, 27)',
		accessibleDark: 'rgb(49, 222, 75)',
		vibrantLight: 'rgb(30, 195, 55)',
		vibrantDark: 'rgb(60, 225, 85)',
		vibrantAccessibleLight: 'rgb(0, 112, 24)',
		vibrantAccessibleDark: 'rgb(49, 222, 75)'
	},
	mint: {
		light: 'rgb(0, 199, 190)',
		dark: 'rgb(102, 212, 207)',
		accessibleLight: 'rgb(12, 129, 123)',
		accessibleDark: 'rgb(102, 212, 207)',
		vibrantLight: 'rgb(0, 189, 180)',
		vibrantDark: 'rgb(108, 224, 219)',
		vibrantAccessibleLight: 'rgb(11, 117, 112)',
		vibrantAccessibleDark: 'rgb(102, 212, 207)'
	},
	teal: {
		light: 'rgb(89, 173, 196)',
		dark: 'rgb(106, 196, 220)',
		accessibleLight: 'rgb(0, 130, 153)',
		accessibleDark: 'rgb(93, 212, 207)',
		vibrantLight: 'rgb(46, 167, 189)',
		vibrantDark: 'rgb(68, 212, 237)',
		vibrantAccessibleLight: 'rgb(0, 103, 150)',
		vibrantAccessibleDark: 'rgb(112, 215, 255)'
	},
	cyan: {
		light: 'rgb(85, 190, 240)',
		dark: 'rgb(90, 200, 245)',
		accessibleLight: 'rgb(0, 113, 164)',
		accessibleDark: 'rgb(112, 215, 255)',
		vibrantLight: 'rgb(65, 175, 220)',
		vibrantDark: 'rgb(90, 205, 250)',
		vibrantAccessibleLight: 'rgb(0, 103, 150)',
		vibrantAccessibleDark: 'rgb(112, 215, 255)'
	},
	blue: {
		light: 'rgb(0, 122, 255)',
		dark: 'rgb(10, 132, 255)',
		accessibleLight: 'rgb(0, 64, 221)',
		accessibleDark: 'rgb(64, 156, 255)',
		vibrantLight: 'rgb(0, 122, 245)',
		vibrantDark: 'rgb(20, 142, 255)',
		vibrantAccessibleLight: 'rgb(0, 64, 221)',
		vibrantAccessibleDark: 'rgb(64, 156, 255)'
	},
	indigo: {
		light: 'rgb(88, 86, 214)',
		dark: 'rgb(94, 92, 230)',
		accessibleLight: 'rgb(54, 52, 163)',
		accessibleDark: 'rgb(125, 122, 255)',
		vibrantLight: 'rgb(84, 82, 204)',
		vibrantDark: 'rgb(99, 97, 242)',
		vibrantAccessibleLight: 'rgb(54, 52, 163)',
		vibrantAccessibleDark: 'rgb(125, 122, 255)'
	},
	purple: {
		light: 'rgb(175, 82, 222)',
		dark: 'rgb(191, 90, 242)',
		accessibleLight: 'rgb(173, 68, 171)',
		accessibleDark: 'rgb(218, 143, 255)',
		vibrantLight: 'rgb(159, 75, 201)',
		vibrantDark: 'rgb(204, 101, 255)',
		vibrantAccessibleLight: 'rgb(173, 68, 171)',
		vibrantAccessibleDark: 'rgb(218, 143, 255)'
	},
	pink: {
		light: 'rgb(255, 45, 85)',
		dark: 'rgb(255, 55, 95)',
		accessibleLight: 'rgb(211, 15, 69)',
		accessibleDark: 'rgb(255, 100, 130)',
		vibrantLight: 'rgb(245, 35, 75)',
		vibrantDark: 'rgb(255, 65, 105)',
		vibrantAccessibleLight: 'rgb(193, 16, 50)',
		vibrantAccessibleDark: 'rgb(255, 58, 95)'
	},
	brown: {
		light: 'rgb(162, 132, 94)',
		dark: 'rgb(172, 142, 104)',
		accessibleLight: 'rgb(127, 101, 69)',
		accessibleDark: 'rgb(181, 148, 105)',
		vibrantLight: 'rgb(152, 122, 84)',
		vibrantDark: 'rgb(182, 152, 114)',
		vibrantAccessibleLight: 'rgb(119, 93, 59)',
		vibrantAccessibleDark: 'rgb(181, 148, 105)'
	},
	gray: {
		light: 'rgb(142, 142, 147)',
		dark: 'rgb(152, 152, 157)',
		accessibleLight: 'rgb(105, 105, 110)',
		accessibleDark: 'rgb(152, 152, 157)',
		vibrantLight: 'rgb(132, 132, 137)',
		vibrantDark: 'rgb(162, 162, 167)',
		vibrantAccessibleLight: 'rgb(97, 97, 101)',
		vibrantAccessibleDark: 'rgb(152, 152, 157)'
	},
	systemGray: {
		light: 'rgb(142, 142, 147)',
		dark: 'rgb(142, 142, 147)',
		accessibleLight: 'rgb(108, 108, 112)',
		accessibleDark: 'rgb(174, 174, 178)'
	},
	systemGray2: {
		light: 'rgb(174, 174, 178)',
		dark: 'rgb(99, 99, 102)',
		accessibleLight: 'rgb(142, 142, 147)',
		accessibleDark: 'rgb(124, 124, 128)'
	},
	systemGray3: {
		light: 'rgb(199, 199, 204)',
		dark: 'rgb(72, 72, 74)',
		accessibleLight: 'rgb(174, 174, 178)',
		accessibleDark: 'rgb(84, 84, 86)'
	},
	systemGray4: {
		light: 'rgb(209, 209, 214)',
		dark: 'rgb(58, 58, 60)',
		accessibleLight: 'rgb(188, 188, 192)',
		accessibleDark: 'rgb(68, 68, 70)'
	},
	systemGray5: {
		light: 'rgb(229, 229, 234)',
		dark: 'rgb(44, 44, 46)',
		accessibleLight: 'rgb(216, 216, 220)',
		accessibleDark: 'rgb(54, 54, 56)'
	},
	systemGray6: {
		light: 'rgb(242, 242, 247)',
		dark: 'rgb(28, 28, 30)',
		accessibleLight: 'rgb(235, 235, 240)',
		accessibleDark: 'rgb(36, 36, 38)'
	}
};
