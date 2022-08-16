/**
 * createRounded
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createRounded = (configInit: any, configCustom?: any) => {
  let rounded = configInit.sys.rounded;
  if (configCustom && configCustom.sys && configCustom.sys?.rounded) {
    rounded = concatObject(rounded, configCustom?.rounded);
  }

  return rounded;
};

export default createRounded;
