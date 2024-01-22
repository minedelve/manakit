/* eslint-disable @typescript-eslint/no-explicit-any */
interface StyleMapValue {
	[index: number]: string | object;
}

interface ScreenProperties {
	[key: string]: string;
}

const styleMap = (styleObj: {
	[k: string]: string | StyleMapValue | undefined;
}): string | undefined => {
	const response = Object.entries(styleObj)
		.filter(([name, value]) => name && value)
		.map(([name, value]) => {
			if (name === 'default') {
				return ` ${value};`;
			} else if (typeof value === 'object' && name === 'sizing') {
				return ` ${getSizeWithMediaQueries(value[0], value[1] as any)}`;
			} else if (typeof value === 'string' || value === undefined) {
				return getStyleString(name, value);
			}
		});

	return response.length > 0 ? response.join('').trim() : undefined;
};

export default styleMap;

// tools
const getStyleString = (name: string, value: string | undefined): string => {
	if (!value) return '';

	if (value.includes('$$')) {
		return ` ${name}: var(--color-${value.replaceAll('$$', '')});`;
	} else if (value.includes('--')) {
		return ` ${name}: var(${value});`;
	} else {
		return ` ${name}: ${value};`;
	}
};

const getSizeWithMediaQueries = (property: any, screen: ScreenProperties): string => {
	const properties = ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight'];
	let response = '';

	properties.forEach((prop) => {
		if (property?.[prop]) {
			const value = property[prop];
			const cssProperty = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
			const index = findBreakpoint(screen[0], value);
			if (index && index !== null) {
				const breakpointValue = typeof value === 'string' ? value : value[index];

				if (breakpointValue) {
					response += ` ${cssProperty}: ${breakpointValue};`;
				}
			}
		}
	});

	return response;
};

function findBreakpoint(
	screenWidth: string | null,
	sizes: { [key: string]: string }
): string | null {
	let numericSize = 0;
	if (screenWidth !== null) numericSize = parseInt(screenWidth, 10);

	const breakpoints: { [key: string]: string } = {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		xxl: '1536px'
	};

	const sortedEntries = Object.entries(sizes).sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
	const sortedSizes: { [key: string]: string } = {};
	for (const entry of sortedEntries) {
		sortedSizes[entry[0]] = entry[1];
	}

	for (const [breakpoint] of Object.entries(sortedSizes)) {
		const point = parseInt(breakpoints[breakpoint], 10) || 0;
		const minPoint = parseInt(breakpoints['sm'], 10) || 0;

		if (numericSize >= point) {
			return breakpoint;
		} else if (numericSize < minPoint) {
			return 'sm';
		}
	}

	return null;
}
