import { normalizeGlobal } from './global.js';
import { normalizeHTML } from './html.js';

export const normalize = () => {
	let css = '';

	css += normalizeGlobal();
	css += normalizeHTML();

	return css;
};
