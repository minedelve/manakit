/* eslint-disable @typescript-eslint/no-explicit-any */
import createClass from '../../helpers/styles/createClass.js';

// class
export const colorsClass = ({ themes }: { themes: any }) => {
	let css = '';

	const result = new Set();
	Object.values(themes).forEach((theme) => {
		if (typeof theme === 'object' && theme !== null) {
			Object.keys(theme).forEach((key) => {
				result.add(key);
			});
		}
	});

	result.forEach((key) => {
		css += createClass({
			className: `.bg\\:${key}`,
			properties: {
				'background-color': `var(--color-${key})!important`
			}
		});

		css += createClass({
			className: `.text\\:${key}`,
			properties: {
				color: `var(--color-${key})!important`
			}
		});

		css += createClass({
			className: `.border\\:${key}`,
			properties: {
				'border-color': `var(--color-${key})!important`
			}
		});

		css += createClass({
			className: `.${key}:not(.btn):not(.card)`,
			properties: {
				'background-color': `var(--color-${key}) !important`,
				color: `var(--color-on-${key}, --color-on-surface) !important`
			}
		});

		css += createClass({
			className: `.${key}.btn`,
			properties: {
				'--btn-background': `var(--color-${key}) !important`,
				'--btn-color': `var(--color-on-${key}) !important`
			}
		});

		css += createClass({
			className: `.${key}.card`,
			properties: {
				'--card-background': `var(--color-${key}) !important`,
				'--card-color': `var(--color-on-${key}) !important`
			}
		});
	});

	return css;
};
