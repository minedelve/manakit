import { checkInstall } from './check-install.js';
import { checkVersion } from './check-version.js';
import { makeManakitImporterConfig } from './importer.js';

export function manakit() {
	return {
		name: 'manakit-preprocess',
		async buildStart() {
			await checkVersion();
			await checkInstall();
		},
		async configResolved() {
			await makeManakitImporterConfig();
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async configureServer(server: any) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('.manakit.cjs')) {
					await makeManakitImporterConfig();
				}
			});
		}
	};
}
