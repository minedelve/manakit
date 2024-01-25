import createClass from '../../helpers/styles/createClass.js';
import createRoot from '../../helpers/styles/createRoot.js';

export const initialFamily = {
	title: 'Roboto,sans-serif',
	body: 'Roboto,sans-serif'
};

const properties = [
	{
		className: 'title',
		value: 'Roboto,sans-serif'
	},
	{
		className: 'body',
		value: 'Roboto,sans-serif'
	}
];

// root
export const familyRoot = () => {
	let css = '';
	css += createRoot({ name: 'font', variables: initialFamily });
	return css;
};

// class
export const familyClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.font-' + item.className,
			properties: {
				'font-family': item.value
			},
			important: true
		});
	});

	return css;
};
