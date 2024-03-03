import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		className: '.divider-vertical',
		properties: {
			'margin-left': '0.5rem',
			'margin-right': '0.5rem',
			'margin-top': 0,
			'margin-bottom': 0,
			height: 'auto',
			width: '1rem',
			'flex-direction': 'column'
		}
	}
];

// class
export const dividerResponsiveClass = ({ screen }: { screen: string }) => {
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
