/* eslint-disable @typescript-eslint/no-explicit-any */
import { colorsClass } from './class';
import { colorsRoot } from './root';

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
