import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.chip-xs',
		properties: {
			height: '0.75rem',
			'font-size': '0.75rem',
			'line-height': '0.75rem',
			'padding-left': '0.313rem',
			'padding-right': '0.313rem'
		}
	},
	{
		className: '.chip-sm',
		properties: {
			height: '1rem',
			'font-size': '0.75rem',
			'line-height': '1rem',
			'padding-left': '0.438rem',
			'padding-right': '0.438rem'
		}
	},
	{
		className: '.chip-md',
		properties: {
			height: '1.25rem',
			'font-size': '0.875rem',
			'line-height': '1.25rem',
			'padding-left': '0.563rem',
			'padding-right': '0.563rem'
		}
	},
	{
		className: '.chip-lg',
		properties: {
			height: '1.5rem',
			'font-size': '1rem',
			'line-height': '1.5rem',
			'padding-left': '0.688rem',
			'padding-right': '0.688rem'
		}
	}
];

const propertiesIcon = [
	{
		className: '.chip-xs svg',
		properties: {
			width: '0.75rem',
			height: '0.75rem'
		}
	},
	{
		className: '.chip-sm svg',
		properties: {
			width: '0.75rem',
			height: '0.75rem'
		}
	},
	{
		className: '.chip-md svg',
		properties: {
			width: '0.875rem',
			height: '0.875rem'
		}
	},
	{
		className: '.chip-lg svg',
		properties: {
			width: '1rem',
			height: '1rem'
		}
	}
];

// class
export const chipResponsiveClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	propertiesIcon.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
