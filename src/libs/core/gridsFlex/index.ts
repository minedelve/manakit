import { columnClass } from './column.js';
import { orderClass } from './order.js';
import { rowClass } from './row.js';

export const gridsFlexStaticClass = () => {
	let css = '';
	// class
	css += rowClass();
	return css;
};

export const gridsFlexClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += columnClass({ screen });
	css += orderClass({ screen });
	return css;
};
