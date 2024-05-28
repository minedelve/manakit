type Value = {
	[key: string]: string | Value;
};

export function translateList(obj: Value, parentKey = ''): { [key: string]: string } {
	let result: { [key: string]: string } = {};

	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			const nestedKeys = translateList(
				obj[key] as Value,
				key === 'common' ? '' : `${parentKey}${key}.`
			);
			result = { ...result, ...nestedKeys };
		} else {
			result[`${parentKey}${key}`] = obj[key] as string;
		}
	}

	return result;
}
