import { heightClass } from './height.js';
import { widthClass } from './width.js';

export const sizingClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += widthClass({ screen });
	css += heightClass({ screen });
	return css;
};
