/**
 * createBreakpoint
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createBreakpoint = (configInit: any, configCustom?: any) => {
  let breakpoint = configInit.sys.breakpoint;

  if (configCustom && configCustom?.sys && configCustom?.sys?.breakpoint) {
    breakpoint = concatObject(breakpoint, configCustom?.sys?.breakpoint);
  }

  return breakpoint;
};

export default createBreakpoint;
