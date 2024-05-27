import chalk from 'chalk';
import pkg from '../package.json' assert { type: 'json' };

export async function checkVersion() {
	const url = `https://registry.npmjs.org/${pkg.name}`;
	let latestVersion;

	try {
		const response = await fetch(url);
		if (!response.ok) console.error(`Network response was not ok: ${response.statusText}`);

		const data = await response.json();
		latestVersion = data['dist-tags'].latest;
	} catch (error) {
		console.error(`Error fetching the latest version of ${pkg.name}:`, error);
	}

	if (latestVersion && pkg.version !== latestVersion) {
		const msg = `${chalk.bold('manakit')} ${chalk.cyan('notice')}`;
		console.log(`${msg}`);
		console.log(
			`${msg} New version of manakit available! ${chalk.red(pkg.version)} -> ${chalk.green(latestVersion)}`
		);
		console.log(
			`${msg} Changelog: ${chalk.blue('https://github.com/minedelve/manakit/releases/tag/manakit@' + latestVersion)}`
		);
		console.log(
			`${msg} [npm] To update run: ${chalk.underline('npm install --save-dev ' + pkg.name + '@' + latestVersion)}`
		);
		console.log(
			`${msg} [yarn] To update run: ${chalk.underline('yarn add -D ' + pkg.name + '@' + latestVersion)}`
		);
		console.log(`${msg}`);
	}
}
