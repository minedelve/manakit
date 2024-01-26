import createClass from '../helpers/styles/createClass.js';

const properties = [
	{
		className: 'top',
		properties: {
			'align-content': 'flex-start'
		}
	},
	{
		className: 'end',
		properties: {
			'align-content': 'flex-end'
		}
	},
	{
		className: 'center',
		properties: {
			'align-content': 'center'
		}
	}
];

// class
export const modalClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.align-content-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
