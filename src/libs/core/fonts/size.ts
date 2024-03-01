import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'xs',
		properties: {
			'font-size': '0.75rem',
			'line-height': '1rem'
		}
	},
	{
		className: 'sm',
		properties: {
			'font-size': '0.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: 'md',
		properties: {
			'font-size': '1rem',
			'line-height': '1.5rem'
		}
	},
	{
		className: 'lg',
		properties: {
			'font-size': '1.125rem',
			'line-height': '1.75rem'
		}
	},
	{
		className: 'xl',
		properties: {
			'font-size': '1.25rem',
			'line-height': '1.75rem'
		}
	},
	{
		className: '2xl',
		properties: {
			'font-size': '1.5rem',
			'line-height': '2rem'
		}
	},
	{
		className: '3xl',
		properties: {
			'font-size': '1.875rem',
			'line-height': '2.25rem'
		}
	},
	{
		className: '4xl',
		properties: {
			'font-size': '2.25rem',
			'line-height': '2.5rem'
		}
	},
	{
		className: '5xl',
		properties: {
			'font-size': '3rem',
			'line-height': 1
		}
	},
	{
		className: '6xl',
		properties: {
			'font-size': '3.75rem',
			'line-height': 1
		}
	},
	{
		className: '7xl',
		properties: {
			'font-size': '4.5rem',
			'line-height': 1
		}
	},
	{
		className: '8xl',
		properties: {
			'font-size': '6rem',
			'line-height': 1
		}
	},
	{
		className: '9xl',
		properties: {
			'font-size': '8rem',
			'line-height': 1
		}
	}
];

// class
export const sizeClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-' + item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
