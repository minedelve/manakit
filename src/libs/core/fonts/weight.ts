import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: 'thin',
		value: 100
	},
	{
		className: 'extralight',
		value: 200
	},
	{
		className: 'light',
		value: 300
	},
	{
		className: 'normal',
		value: 400
	},
	{
		className: 'medium',
		value: 500
	},
	{
		className: 'semibold',
		value: 600
	},
	{
		className: 'bold',
		value: 700
	},
	{
		className: 'extrabold',
		value: 800
	},
	{
		className: 'black',
		value: 900
	}
];

// class
export const weightClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-' + item.className,
			properties: {
				'font-weight': item.value
			},
			important: true
		});
	});

	return css;
};
