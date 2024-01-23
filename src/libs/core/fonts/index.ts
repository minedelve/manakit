import { family } from './family';
import { alignClass } from './align';
import { decorationClass } from './decoration';
import { opacityClass } from './opacity';
import { transformClass } from './transform';

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
