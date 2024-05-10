import chalk from 'chalk';
import path from 'path';
import fsPromises from 'fs/promises';

export async function checkInstall() {
	const directory = process.cwd();

	try {
		console.log(chalk.yellowBright('Manakit loading ...'));
		await fsPromises.readFile(path.resolve(directory, '.manakit.cjs'), 'utf-8');
	} catch (err) {
		console.log(chalk.red('No configuration exist, please wait...'));
		console.log(chalk.red('Manakit create new configuration file in your project, .manakit.cjs'));
		await fsPromises.copyFile(
			path.resolve(`node_modules/manakit/dist/assets/presets`, 'default.js'),
			path.resolve(directory, '.manakit.cjs')
		);
	}

	console.log(chalk.bold.green('\nManakit is up !\n'));
}
