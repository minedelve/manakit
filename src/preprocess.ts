import { checkInstall } from './check-install.js';
import { checkVersion } from './check-version.js';
import { makeManakitImporterConfig } from './importer.js';

interface ManakitVite {
	verif?: {
		version?: boolean | undefined;
		install?: boolean | undefined;
	};
}

export function manakit(params?: ManakitVite) {
	let verifVersion = true;
	let verifInstall = true;

	if (params?.verif?.version !== undefined) verifVersion = params?.verif?.version;
	if (params?.verif?.install !== undefined) verifInstall = params?.verif?.install;
	return {
		name: 'manakit-preprocess',
		async buildStart() {
			if (verifVersion) await checkVersion();
			if (verifInstall) await checkInstall();
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
