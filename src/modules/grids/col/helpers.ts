/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatClassCss(className: string, value: any) {
	let response: string | undefined = undefined;
	if (typeof value === 'string' || typeof value === 'number') {
		response = `${className}-${value}`;
	} else if (typeof value === 'object') {
		for (const breakpoint in value) {
			if (value[breakpoint] !== null && value[breakpoint] !== undefined) {
				response = response
					? `${response} ${breakpoint}:${className}-${value[breakpoint]}`
					: `${breakpoint}:${className}-${value[breakpoint]}`;
			}
		}
	}
	return response;
}
