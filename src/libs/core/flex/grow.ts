import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'grow',
		value: 1
	},
	{
		className: 'grow-0',
		value: 0
	}
];

// class
export const growClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.' + item.className,
			properties: {
				'flex-grow': item.value
			},
			screen,
			important: true
		});
	});

	return css;
};
