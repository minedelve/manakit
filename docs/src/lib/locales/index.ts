import { translateList } from './translations';

import commonEn from './en/common.json';
import navigationEn from './en/navigation.json';

export default {
	en: translateList({
		common: commonEn,
		nav: navigationEn
	})
};
