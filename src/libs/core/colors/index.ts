/* eslint-disable @typescript-eslint/no-explicit-any */
import { colorsClass } from './class.js';
import { colorsRoot } from './root.js';

export const colorRoot = ({ themes, dark }: { themes: any; dark: boolean }) => {
	let css = '';
	// var
	css += colorsRoot({ themes, dark });
	return css;
};

export const colorClass = ({ themes }: { themes: any }) => {
	let css = '';
	// class
	css += colorsClass({ themes });
	return css;
};
