import { family } from './family.js';
import { alignClass } from './align.js';
import { decorationClass } from './decoration.js';
import { opacityClass } from './opacity.js';
import { transformClass } from './transform.js';

export const fonts = () => {
	const css = '';
	return css;
};

export const fontsRoot = () => {
	let css = '';

	// class
	css += family();
	return css;
};

export const fontsStaticClass = () => {
	let css = '';

	// class
	css += transformClass();
	return css;
};

export const fontsClass = ({ screen }: { screen: string }) => {
	let css = '';

	// class
	css += alignClass({ screen });
	css += decorationClass({ screen });
	css += opacityClass({ screen });
	return css;
};
