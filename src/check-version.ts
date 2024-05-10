import chalk from 'chalk';
import packageVersions from 'pkg-versions';
import pkg from '../package.json' assert { type: 'json' };

export async function checkVersion() {
	const versions = await packageVersions('manakit');
	const format = new Set(versions);
	const list = Array.from(format);
	const lastestVersion = list[list.length - 1];

	if (pkg.version !== lastestVersion) {
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
