import chalk from 'chalk';
import path from 'path';
import fsPromises from 'fs/promises';

export async function checkInstall() {
	const msg = `${chalk.bold('manakit')} ${chalk.cyan('info')}`;
	const directory = process.cwd();

	try {
		console.log(`${msg}`);
		await fsPromises.readFile(path.resolve(directory, '.manakit.cjs'), 'utf-8');
	} catch (err) {
		console.log(`${msg} ${chalk.grey('initialisation...')}`);

		await fsPromises.copyFile(
			path.resolve(`node_modules/manakit/dist/assets/presets`, 'default.js'),
			path.resolve(directory, '.manakit.cjs')
		);

		console.log(`${msg} ${chalk.grey('initialisation set!')}`);
		console.log(
			`${msg} ${chalk.grey('in your project, manakit add new configuration file named:')} ${chalk.blue('.manakit.cjs')}`
		);
	}

	console.log(`${msg} ${chalk.green('manakit')} is ready`);
	console.log(`${msg}`);
}
