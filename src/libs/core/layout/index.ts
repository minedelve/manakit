import { displayClass } from './display.js';
import { positionClass } from './position.js';

export const layoutClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += displayClass({ screen });
	css += positionClass({ screen });
	return css;
};
