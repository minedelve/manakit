/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClass } from '../../helpers';

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
	});

	return css;
};
