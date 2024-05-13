import chalk from 'chalk';
import packageVersions from 'pkg-versions';
import pkg from '../package.json' assert { type: 'json' };

export async function checkVersion() {
	let lastestVersion;
	try {
		const versions = await packageVersions('manakit');
		const format = new Set(versions);
		const list = Array.from(format);
		lastestVersion = list[list.length - 1];
	} catch (error) {
		console.log(
			chalk.red(
				`The manakit version check with the remote server failed, check your internet connection or your proxy configuration`
			)
		);
		console.log(
			chalk.red(
				`(verification is not mandatory, you can desactivate it in the manakit configuration)`
			)
		);
	}

	if (lastestVersion && pkg.version !== lastestVersion) {
		console.log(
			chalk.bold(
				`\n\nManakit update available ` +
					chalk.red(`${pkg.version}`) +
					' -> ' +
					chalk.green(`${lastestVersion}`)
			)
		);

		console.log(chalk.bold('Run ' + chalk.blue(`npm i --dev manakit@${lastestVersion}\n\n`)));
	}
}
