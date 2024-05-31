import presetBreakpoints from './assets/presets/breakpoints.js';
import presetFonts from './assets/presets/fonts.js';
import presetThemes from './assets/presets/themes.js';

import { convertJStoCSS } from './utils/convert-js-to-css.js';
import { convertJStoSCSS } from './utils/convert-js-to-scss.js';
import { loadConfig } from './utils/load-files.js';
import merge from './utils/merge.js';

import type { ContextImporter } from './assets/types/preprocess.js';

export async function makeManakitImporter(params: ContextImporter) {
	const config = await loadConfig();

	// merge configuration
	const mode = config?.mode ? config?.mode : 'light';
	const breakpoints = { ...presetBreakpoints, ...config?.breakpoints };
	const fonts = merge(presetFonts, config?.fonts);
	const themes = merge(presetThemes, config?.themes);

	// preprocessor
	if (params?.preprocessor === 'sass') convertJStoSCSS(breakpoints);

	// css
	convertJStoCSS({
		mode: mode,
		breakpoints: breakpoints,
		fonts: fonts,
		themes: themes,
		palette: params.colorPalette,
		minimify: params.minimify
	});
}
