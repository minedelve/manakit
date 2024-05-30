import * as sass from 'sass';
import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import {
	globalSCSS,
	headSCSS,
	modulesSCSS,
	paletteSCSS,
	variablesSCSS
} from './utils/path-scss.js';
import { convertJStoSCSS } from './utils/convert-js-to-scss.js';
import { convertJStoCSS } from './utils/convert-js-to-css.js';

const directory = process.cwd();

export async function makeManakitImporterConfig() {
	let config = undefined;
	try {
		const file = await fsPromises.readFile(path.resolve(directory, '.manakit.cjs'), 'utf-8');

		if (
			file.match(/export\s+default\s+(\{[^]*?\});/) &&
			file.match(/export\s+default\s+(\{[^]*?\});/) !== null &&
			file.match(/export\s+default\s+(\{[^]*?\});/)!.length > 1
		) {
			const code = `return ${file.match(/export\s+default\s+(\{[^]*?\});/)![1]}`;
			config = await new Function(code)();
		}
		// eslint-disable-next-line no-empty
	} catch (err) {}

	let variables = '';
	let style = '';

	headSCSS.map((pathFile) => (variables += fs.readFileSync(pathFile, 'utf-8')));
	variables += convertJStoSCSS(config);
	variablesSCSS.map((pathFile) => (variables += fs.readFileSync(pathFile, 'utf-8')));

	style += variables;
	if (config?.palette) {
		for (const [palette, pathFile] of Object.entries(paletteSCSS)) {
			if (typeof config?.palette === 'string' && palette === config?.palette) {
				style += fs.readFileSync(pathFile, 'utf-8');
			} else if (typeof config?.palette === 'object') {
				config?.palette.map((params: string) => {
					if (params === palette) style += fs.readFileSync(pathFile, 'utf-8');
				});
			}
		}
	}
	modulesSCSS.map((pathFile) => (style += fs.readFileSync(pathFile, 'utf-8')));
	globalSCSS.map((pathFile) => (style += fs.readFileSync(pathFile, 'utf-8')));

	fsPromises.writeFile(path.resolve(`node_modules/manakit/dist`, '_variables.scss'), variables);
	fsPromises.writeFile(
		path.resolve(`node_modules/manakit/dist`, 'style.css'),
		sass.compileString(style)?.css
	);
	fsPromises.writeFile(path.resolve(`node_modules/manakit/dist`, 'stylev2.css'), convertJStoCSS());
}
