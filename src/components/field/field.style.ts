import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.field-xs',
		properties: {
			height: '1.5rem',
			'padding-left': '0.5rem',
			'padding-right': '0.5rem',
			'font-size': '0.75rem',
			'line-height': '1rem'
		}
	},
	{
		className: '.field-sm',
		properties: {
			height: '2rem',
			'padding-left': '0.75rem',
			'padding-right': '0.75rem',
			'font-size': '0.875rem',
			'line-height': '2rem'
		}
	},
	{
		className: '.field-md',
		properties: {
			height: '3rem',
			'padding-left': '1rem',
			'padding-right': '1rem',
			'font-size': '0.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: '.field-lg',
		properties: {
			height: '4rem',
			'padding-left': '1.5rem',
			'padding-right': '1.5rem',
			'font-size': '1.125rem',
			'line-height': '1.75rem'
		}
	}
];

// class
export const fieldResponsiveClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
