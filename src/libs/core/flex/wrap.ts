import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'nowrap',
		properties: {
			'flex-wrap': 'nowrap'
		}
	},
	{
		className: 'wrap',
		properties: {
			'flex-wrap': 'wrap'
		}
	},
	{
		className: 'wrap-reverse',
		properties: {
			'flex-wrap': 'wrap-reverse'
		}
	}
];

// class
export const wrapClass = ({ screen }: { screen: string }) => {
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
