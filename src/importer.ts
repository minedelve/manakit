import * as sass from 'sass';
import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import chalk from 'chalk';
import { contentSCSS, headSCSS, modulesSCSS, paletteSCSS } from './utils/path-scss.js';
import { convertJStoSCSS } from './utils/convert-js-to-scss.js';

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
	} catch (err) {
		console.log(chalk.red('manakit configuration file not found !'));
	}

	let css = '';
	headSCSS.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	if (config?.palette) {
		for (const [palette, pathFile] of Object.entries(paletteSCSS)) {
			if (typeof config?.palette === 'string' && palette === config?.palette) {
				css += fs.readFileSync(pathFile, 'utf-8');
			} else if (typeof config?.palette === 'object') {
				config?.palette.map((params: string) => {
					if (params === palette) css += fs.readFileSync(pathFile, 'utf-8');
				});
			}
		}
	}

	css += convertJStoSCSS(config);

	modulesSCSS.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));
	contentSCSS.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));
	fsPromises.writeFile(
		path.resolve(`node_modules/manakit/dist`, 'style.css'),
		sass.compileString(css)?.css
	);
}
