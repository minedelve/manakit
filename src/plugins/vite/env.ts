import { pathConfiguration, pathPackage, pathRoot } from '../path.js';
import { getConfig } from '../../libs/helpers/config/get.js';
import { setConfig } from '../../libs/helpers/config/set.js';

export const initialize = async () => {
	try {
		return await getConfig({ path: pathConfiguration });
	} catch (err) {
		return await setConfig({
			path: pathPackage,
			dest: pathRoot
		});
	}
};
