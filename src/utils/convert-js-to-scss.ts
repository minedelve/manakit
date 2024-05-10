/* eslint-disable @typescript-eslint/no-explicit-any */
export function convertJStoSCSS(configuration: any) {
	let css = '';

	if (configuration) {
		for (const [category, categoryData] of Object.entries(configuration)) {
			if (categoryData && typeof categoryData !== 'string' && typeof categoryData !== 'number') {
				let typeSection = undefined;
				for (const [, sectionData] of Object.entries(categoryData)) {
					typeSection = typeof sectionData;
				}

				if (typeSection === 'string' || typeSection === 'number') {
					css += `$${category}-custom: (`;
					for (const [key, value] of Object.entries(categoryData)) {
						css += `${key}: ${value},`;
					}
					css += ');';
				} else if (typeSection === 'object') {
					if (category === 'themes') {
						css += `$${category}-custom: (`;

						if (!Object.prototype.hasOwnProperty.call(categoryData, 'default')) {
							css += `default: ( light:(), dark: ()),`;
						}
						for (const [section, sectionData] of Object.entries(categoryData)) {
							css += `${section}: (`;
							css += `light: (`;
							for (const [nuance, color] of Object.entries(sectionData)) {
								if (typeof color === 'string') {
									css += `${nuance}: ${color},`;
								} else if (typeof color === 'object' && color !== null && color !== undefined) {
									if (color && (('light' in color) as unknown)) {
										css += `${nuance}: ${(color as any)?.light},`;
									}
								}
							}
							css += '),';
							css += `dark: (`;
							for (const [nuance, color] of Object.entries(sectionData)) {
								if (typeof color === 'string') {
									css += `${nuance}: ${color},`;
								} else if (typeof color === 'object' && color !== null && color !== undefined) {
									if (color && (('dark' in color) as unknown)) {
										css += `${nuance}: ${(color as any)?.dark},`;
									}
								}
							}
							css += '),';
							css += '),';
						}
						css += ');';
					} else {
						css += `$${category}-custom: (`;

						if (!Object.prototype.hasOwnProperty.call(categoryData, 'default')) {
							css += `default: (),`;
						}
						for (const [section, sectionData] of Object.entries(categoryData)) {
							css += `${section}: (`;
							for (const [key, value] of Object.entries(sectionData)) {
								css += `${key}: ${value},`;
							}
							css += '),';
						}
						css += ');';
					}
				}
			}
		}
	}

	return css;
}
