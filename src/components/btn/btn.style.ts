import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.btn-xs:not(.btn-square):not(.btn-circle)',
		properties: {
			height: '1.5rem',
			'min-height': '1.5rem',
			'padding-left': '0.5rem',
			'padding-right': '0.5rem',
			'font-size': '0.75rem'
		}
	},
	{
		className: '.btn-sm:not(.btn-square):not(.btn-circle)',
		properties: {
			height: '2rem',
			'min-height': '2rem',
			'padding-left': '0.75rem',
			'padding-right': '0.75rem',
			'font-size': '0.875rem'
		}
	},
	{
		className: '.btn-md:not(.btn-square):not(.btn-circle)',
		properties: {
			height: '3rem',
			'min-height': '3rem',
			'padding-left': '1rem',
			'padding-right': '1rem',
			'font-size': '0.875rem'
		}
	},
	{
		className: '.btn-lg:not(.btn-square):not(.btn-circle)',
		properties: {
			height: '4rem',
			'min-height': '4rem',
			'padding-left': '1.5rem',
			'padding-right': '1.5rem',
			'font-size': '1.125rem'
		}
	},
	{
		className: '.btn-xs.btn-square',
		properties: {
			height: '1.5rem',
			width: '1.5rem',
			'min-height': '1.5rem'
		}
	},
	{
		className: '.btn-sm.btn-square',
		properties: {
			height: '2rem',
			width: '2rem',
			'min-height': '2rem'
		}
	},
	{
		className: '.btn-md.btn-square',
		properties: {
			height: '3rem',
			width: '3rem',
			'min-height': '3rem'
		}
	},
	{
		className: '.btn-lg.btn-square',
		properties: {
			height: '4rem',
			width: '4rem',
			'min-height': '4rem'
		}
	},
	{
		className: '.btn-xs.btn-circle',
		properties: {
			height: '1.5rem',
			width: '1.5rem',
			'min-height': '1.5rem'
		}
	},
	{
		className: '.btn-sm.btn-circle',
		properties: {
			height: '2rem',
			width: '2rem',
			'min-height': '2rem'
		}
	},
	{
		className: '.btn-md.btn-circle',
		properties: {
			height: '3rem',
			width: '3rem',
			'min-height': '3rem'
		}
	},
	{
		className: '.btn-lg.btn-circle',
		properties: {
			height: '4rem',
			width: '4rem',
			'min-height': '4rem'
		}
	}
];

const propertiesIcon = [
	{
		className: '.btn-xs svg',
		properties: {
			width: '1.15rem',
			height: '1.15rem'
		}
	},
	{
		className: '.btn-sm svg',
		properties: {
			width: '1.25rem',
			height: '1.25rem'
		}
	},
	{
		className: '.btn-md svg',
		properties: {
			width: '1.5rem',
			height: '1.5rem'
		}
	},
	{
		className: '.btn-lg svg',
		properties: {
			width: '1.75rem',
			height: '1.75rem'
		}
	}
];

// class
export const btnResponsiveClass = ({ screen }: { screen: string }) => {
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
