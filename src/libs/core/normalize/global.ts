import createClass from '../../helpers/styles/createClass.js';

export const normalizeGlobal = () => {
	let css = '';

	css += createClass({
		className: '*, :before, :after',
		properties: {
			'box-sizing': 'border-box',
			'border-width': 0,
			'border-style': 'solid',
			'border-color': '#e5e7eb'
		}
	});

	css += createClass({
		className: 'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre',
		properties: {
			margin: 0
		}
	});

	css += createClass({
		className: 'h1, h2, h3, h4, h5, h6',
		properties: {
			'font-size': 'inherit',
			'font-weight': 'inherit',
			'font-family': 'var(--font-title)'
		}
	});

	css += createClass({
		className: 'img, svg, video, canvas, audio, iframe, embed, object',
		properties: {
			display: 'block',
			'vertical-align': 'middle'
		}
	});

	css += createClass({
		className: 'code, kbd, samp, pre',
		properties: {
			'font-family':
				' ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Vazirmatn,Courier New,monospace',
			'font-feature-settings': 'normal',
			'font-variation-settings': 'normal',
			'font-size': '1em'
		}
	});

	css += createClass({
		className:
			':root:has(:is(.modal-open,.modal:target,.modal-toggle:checked+.modal,.modal[open]))',
		properties: {
			overflow: 'hidden'
		}
	});

	css += createClass({
		className: ':root:has(:is(.drawer-open,.drawer-toggle:checked+.drawer))',
		properties: {
			overflow: 'hidden'
		}
	});

	return css;
};
