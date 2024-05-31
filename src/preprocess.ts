import { checkInstall } from './check-install.js';
import { checkVersion } from './check-version.js';
import { makeManakitImporter } from './importer.js';

import type { ManakitVite } from './assets/types/preprocess.js';

export function manakit(params?: ManakitVite) {
	const _verifVersion = params?.verif?.version ? params?.verif?.version : true;
	const _verifInstall = params?.verif?.install ? params?.verif?.install : true;
	const _stylePreprocessor = params?.style?.preprocessor ? params?.style?.preprocessor : undefined;
	const _styleColorPalette = params?.style?.colorPalette ? params?.style?.colorPalette : 'manakit';
	const _styleMinimify = params?.style?.minimify ? params?.style?.minimify : false;

	const context = {
		preprocessor: _stylePreprocessor,
		colorPalette: _styleColorPalette,
		minimify: _styleMinimify
	};

	return {
		name: 'manakit-preprocess',
		async buildStart() {
			if (_verifVersion) await checkVersion();
			if (_verifInstall) await checkInstall();
		},
		async configResolved() {
			await makeManakitImporter(context);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async configureServer(server: any) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('.manakit.cjs')) {
					await makeManakitImporter(context);
				}
			});
		}
	};
}
