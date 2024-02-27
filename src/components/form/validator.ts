/* eslint-disable @typescript-eslint/no-explicit-any */
export const validatorProcess = (validator: any, values?: any) => {
	const formData = {};

	for (const key in values) {
		// console.log(`${key}: ${values[key]}`);
		const name = key;
		const value = values[key];
		let error = false;

		if (validator && validator[name]) {
			const { type, min, max, rules, required } = validator[name];

			// type
			if (type && typeof value !== type) error = true;

			// is required
			if (required && (value === undefined || value === null || value.trim() === '')) error = true;

			//length
			if (
				(!error &&
					type === 'string' &&
					(typeof value !== 'string' ||
						(min && value.length < min) ||
						(max && value.length > max))) ||
				(!error &&
					type === 'number' &&
					(isNaN(Number(value)) || (min && Number(value) < min) || (max && Number(value) > max)))
			)
				error = true;

			// regex
			if (rules) {
				if (!RegExp(rules).test(value)) error = true;
			}
		}

		(formData as any)[name] = { hasError: error };
	}

	return formData;
};
