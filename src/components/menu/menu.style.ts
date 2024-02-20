import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.menu-xs',
		properties: {
			'border-radius': '0.25rem',
			padding: '0.25rem 0.5rem',
			'font-size': '0.75rem',
			'line-height': '1rem'
		}
	},
	{
		className: '.menu-sm',
		properties: {
			'border-radius': '0.5rem',
			padding: '0.25rem 0.75rem',
			'font-size': '0.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: '.menu-md',
		properties: {
			'border-radius': '0.5rem',
			padding: '0.5rem 1rem',
			'font-size': '0.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: '.menu-lg',
		properties: {
			'border-radius': '0.5rem',
			padding: '0.75rem 1.5rem',
			'font-size': '1.125rem',
			'line-height': '1.75rem'
		}
	}
];

const propertiesPosition = [
	{
		className: '.menu-horizontal ',
		properties: {
			display: 'inline-flex',
			'flex-direction': 'row'
		}
	},
	{
		className: '.menu-vertical',
		properties: {
			display: 'flex',
			'flex-direction': 'column'
		}
	}
];

// class
export const menuResponsiveClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className + ' :where(li:not(.menu-title)) > *:not(ul, details, .menu-title)',
			properties: item.properties,
			screen,
			important: true
		});
		css += createClass({
			className: item.className + ' details > summary:not(.menu-title)',
			properties: item.properties,
			screen,
			important: true
		});
	});

	propertiesPosition.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen,
			important: true
		});
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
