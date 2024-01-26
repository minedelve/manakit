import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'footer',
		properties: {
			display: 'grid',
			width: '100%',
			'grid-auto-flow': 'row',
			'place-items': 'start',
			'column-gap': '1rem',
			'row-gap': '2.5rem',
			'font-size': '0.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: 'footer > *',
		properties: {
			display: 'grid',
			'place-items': 'start',
			gap: '0.5rem'
		}
	},
	{
		className: 'footer-title',
		properties: {
			'margin-bottom': '0.5rem',
			'font-weight': 700,
			'text-transform': 'uppercase',
			opacity: 0.6
		}
	}
];

// class
export const footerStaticClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.' + item.className,
			properties: item.properties,
			important: true
		});
	});

	return css;
};
