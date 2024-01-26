import { gridsGapClass } from './gap.js';
import { gridsAutoColumnClass } from './gridsAutoColumn.js';
import { gridsAutoFlowClass } from './gridsAutoFlow.js';
import { gridsAutoRowClass } from './gridsAutoRow.js';
import { gridsColsClass } from './gridsCols.js';
import { gridsColsStartEndClass } from './gridsColsStartEnd.js';
import { gridsRowsClass } from './gridsRows.js';
import { gridsRowsStartEndClass } from './gridsRowsStartEnd.js';

export const gridsClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += gridsColsClass({ screen });
	css += gridsColsStartEndClass({ screen });
	css += gridsRowsClass({ screen });
	css += gridsRowsStartEndClass({ screen });
	css += gridsAutoFlowClass({ screen });
	css += gridsAutoColumnClass({ screen });
	css += gridsAutoRowClass({ screen });
	css += gridsGapClass({ screen });
	return css;
};
