/* eslint-disable @typescript-eslint/no-explicit-any */
import propertie from './createPropertieCss.js';

const createClass = ({ parentClassName, className, properties, important, screen }: any) => {
	let css = '';
	const haveDot = /^\./.test(className);

	if (properties) {
		if (haveDot) {
			const classNameClearDot = formatClassWithNumberDot(className).slice(1);
			css +=
				screen && screen !== 'none'
					? parentClassName
						? `${parentClassName}.${screen}\\:${classNameClearDot} {\n`
						: `.${screen}\\:${classNameClearDot} {\n`
					: parentClassName
						? `${parentClassName}.${classNameClearDot} {\n`
						: `.${classNameClearDot} {\n`;
		} else {
			css += parentClassName
				? `${parentClassName}${formatClassWithNumberDot(className)} {\n`
				: `${className} {\n`;
		}

		for (const [key, value] of Object.entries(properties)) {
			css += propertie({ key, value, important });
		}
		css += '}\n';
	}

	return css;
};

export default createClass;

function formatClassWithNumberDot(className: string) {
	const regex = /(\d)\.(\d)/g;
	return className.replace(regex, '$1\\.$2');
}
