import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'start',
		properties: {
			'align-items': 'flex-start'
		}
	},
	{
		className: 'end',
		properties: {
			'align-items': 'flex-end'
		}
	},
	{
		className: 'center',
		properties: {
			'align-items': 'center'
		}
	},
	{
		className: 'baseline',
		properties: {
			'align-items': 'baseline'
		}
	},
	{
		className: 'stretch',
		properties: {
			'align-items': 'stretch'
		}
	}
];

// class
export const alignItemsClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.align-items-' + item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
