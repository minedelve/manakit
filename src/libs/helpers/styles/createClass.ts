/* eslint-disable @typescript-eslint/no-explicit-any */
import propertie from './createPropertieCss.js';

const createClass = ({ parentClassName, className, properties, important, screen }: any) => {
	let css = '';
	const regex = /(\d)\./g;
	const startByDot = className.startsWith('.');

	if (properties) {
		if (startByDot) {
			const classNameClearDot = className.slice(1);
			const formatClassName = classNameClearDot.replace(regex, '$1\\.');
			css +=
				screen && screen !== 'none'
					? parentClassName
						? `${parentClassName}.${screen}\\:${formatClassName} {\n`
						: `.${screen}\\:${formatClassName} {\n`
					: parentClassName
						? `${parentClassName}.${formatClassName} {\n`
						: `.${formatClassName} {\n`;
		} else {
			const formatClassName = className.replace(regex, '\\.');
			css += parentClassName
				? `${parentClassName}${formatClassName} {\n`
				: `${formatClassName} {\n`;
		}

		for (const [key, value] of Object.entries(properties)) {
			css += propertie({ key, value, important });
		}
		css += '}\n';
	}

	return css;
};

export default createClass;
