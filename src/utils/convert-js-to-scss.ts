import path from 'path';
import fsPromises from 'fs/promises';

import type { Breakpoints } from '../assets/types/config.js';

export function convertJStoSCSS(breakpoints?: Breakpoints) {
	let scss = '';

	scss += '$breakpoints: (';
	for (const property in breakpoints) {
		scss += `${property}: ${breakpoints[property]},`;
	}
	scss += ') !default;';

	fsPromises.writeFile(path.resolve(`node_modules/manakit/dist`, '_variables.scss'), scss);
}
