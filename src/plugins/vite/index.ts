import { initialTheme } from '$lib/libs/core/colors/theme.js';
import { mergeThemes } from '$lib/libs/helpers/tools/mergeThemes.js';
import { initialize } from './env.js';
import { initialResponsive } from '../integrations/responsive.js';
import { buildCSS } from '../integrations/process.js';

export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			const value = await initialize();

			const themes = mergeThemes(initialTheme, value?.themes);
			const responsive = value?.screens
				? { ...initialResponsive, ...value?.screens }
				: initialResponsive;

			buildCSS({ dark: value?.dark || false, themes, responsive });
			return console.log('manakit is up', value);
		}
	};
}
