import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'row',
		properties: {
			'flex-direction': 'row'
		}
	},
	{
		className: 'column',
		properties: {
			'flex-direction': 'column'
		}
	},
	{
		className: 'row-reverse',
		properties: {
			'flex-direction': 'row-reverse'
		}
	},
	{
		className: 'column-reverse',
		properties: {
			'flex-direction': 'column-reverse'
		}
	}
];

// class
export const directionClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.flex-' + item.className,
			properties: item.properties,
			screen,
			important: true
		});
	});

	return css;
};
