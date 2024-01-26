const classMap = (classObj: { [k: string]: string | boolean | undefined }): string => {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name, value]) => {
			if ((name === 'default' && value) || name === 'component') {
				// $$props.class // component class
				return `${value}`;
			} else {
				// components class
				return typeof value === 'boolean' ? name : `${name}-${value}`;
			}
		})
		.join(' ');
};

export default classMap;
