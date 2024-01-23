import { alignContentClass } from './alignContent.js';
import { alignSelfClass } from './alignSelf.js';
import { directionClass } from './direction.js';
import { justifyClass } from './justify.js';
import { shortlandClass } from './shortland.js';
import { growShrinkClass } from './growShrink.js';
import { wrapClass } from './wrap.js';

export const flexClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += alignContentClass({ screen });
	css += shortlandClass({ screen });
	css += directionClass({ screen });
	css += justifyClass({ screen });
	css += alignSelfClass({ screen });
	css += wrapClass({ screen });
	css += growShrinkClass({ screen });
	return css;
};
