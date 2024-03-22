import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.breadcrumbs-xs',
		properties: {
			'font-size': '0.75rem',
			'line-height': '1rem'
		}
	},
	{
		className: '.breadcrumbs-xs .divider',
		properties: {
			padding: '0 4px'
		}
	},
	{
		className: '.breadcrumbs-xs > ul > li span',
		properties: {
			gap: '0.25rem'
		}
	},
	{
		className: '.breadcrumbs-sm',
		properties: {
			'font-size': '.875rem',
			'line-height': '1.25rem'
		}
	},
	{
		className: '.breadcrumbs-sm .divider',
		properties: {
			padding: '0 4px'
		}
	},
	{
		className: '.breadcrumbs-sm > ul > li span',
		properties: {
			gap: '0.25rem'
		}
	},
	{
		className: '.breadcrumbs-lg',
		properties: {
			'font-size': '1.125rem',
			'line-height': '1.75rem'
		}
	},
	{
		className: '.breadcrumbs-xl',
		properties: {
			'font-size': '1.25rem',
			'line-height': '1.75rem'
		}
	},
	{
		className: '.breadcrumbs-2xl',
		properties: {
			'font-size': '1.5rem',
			'line-height': '2rem'
		}
	},
	{
		className: '.breadcrumbs-2xl .divider',
		properties: {
			padding: '0 10px'
		}
	},
	{
		className: '.breadcrumbs-3xl > ul > li span',
		properties: {
			gap: '0.625rem'
		}
	},
	{
		className: '.breadcrumbs-3xl',
		properties: {
			'font-size': '1.875rem',
			'line-height': '2.25rem'
		}
	},
	{
		className: '.breadcrumbs-3xl .divider',
		properties: {
			padding: '0 12px'
		}
	},
	{
		className: '.breadcrumbs-3xl > ul > li span',
		properties: {
			gap: '0.625rem'
		}
	},
	{
		className: '.breadcrumbs-4xl',
		properties: {
			'font-size': '2.25rem',
			'line-height': '2.5rem'
		}
	},
	{
		className: '.breadcrumbs-4xl .divider',
		properties: {
			padding: '0 14px'
		}
	},
	{
		className: '.breadcrumbs-4xl > ul > li span',
		properties: {
			gap: '0.75rem'
		}
	},
	{
		className: '.breadcrumbs-5xl',
		properties: {
			'font-size': '3rem',
			'line-height': '1'
		}
	},
	{
		className: '.breadcrumbs-5xl .divider',
		properties: {
			padding: '0 16px'
		}
	},
	{
		className: '.breadcrumbs-5xl > ul > li span',
		properties: {
			gap: '0.825rem'
		}
	},
	{
		className: '.breadcrumbs-6xl',
		properties: {
			'font-size': '3.75rem',
			'line-height': '1'
		}
	},
	{
		className: '.breadcrumbs-6xl .divider',
		properties: {
			padding: '0 18px'
		}
	},
	{
		className: '.breadcrumbs-sm > ul > li span',
		properties: {
			gap: '1rem'
		}
	}
];

// class
export const breadcrumbsResponsiveClass = ({ screen }: { screen: string }) => {
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
