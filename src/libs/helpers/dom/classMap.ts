const classMap = (classObj: {
	[k: string]: string | boolean | { [k: string]: string | boolean | number } | undefined;
}): string => {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name, value]) => {
			if ((name === 'default' && value) || name === 'component') {
				// $$props.class // component class
				return `${value}`;
			} else {
				// components class
				if (typeof value === 'object') {
					let css = '';
					for (const property in value) {
						if (Object.prototype.hasOwnProperty.call(value, property)) {
							css += ` ${property === '0' ? name : `${property}:${name}`}-${value[property]}`;
						}
					}
					return css.trim();
				}

				return typeof value === 'boolean' ? name : `${name}-${value}`;
			}
		})
		.join(' ');
};

export default classMap;
