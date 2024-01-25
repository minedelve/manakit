import { familyClass, familyRoot } from './family.js';
import { alignClass } from './align.js';
import { decorationClass } from './decoration.js';
import { opacityClass } from './opacity.js';
import { transformClass } from './transform.js';
import { sizeClass } from './size.js';

export const fonts = () => {
	const css = '';
	return css;
};

export const fontsRoot = () => {
	let css = '';

	// class
	css += familyRoot();
	return css;
};

export const fontsStaticClass = () => {
	let css = '';

	// class
	css += transformClass();
	css += familyClass();
	return css;
};

export const fontsClass = ({ screen }: { screen: string }) => {
	let css = '';

	// class
	css += alignClass({ screen });
	css += decorationClass({ screen });
	css += opacityClass({ screen });
	css += sizeClass({ screen });
	return css;
};
