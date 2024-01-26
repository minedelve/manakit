import { autoMarginClass } from './autoMargin.js';
import { marginClass } from './margin.js';
import { paddingClass } from './padding.js';

export const spacingClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += autoMarginClass({ screen });
	css += marginClass({ screen });
	css += paddingClass({ screen });
	return css;
};
