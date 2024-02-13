import createClass from '../../libs/helpers/styles/createClass.js';

const properties = [
	{
		ignore: 'none',
		className: '.drawer-open>.drawer-side',
		properties: {
			'pointer-events': 'auto',
			visibility: 'visible',
			position: 'sticky',
			display: 'block',
			width: 'auto',
			'overscroll-behavior': 'auto'
		}
	},
	{
		className: '.drawer-open>.drawer-side>*:not(.drawer-overlay)',
		properties: {
			transform: 'translate(0)'
		}
	}
];

// class
export const drawerResponsiveClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		if (screen !== item?.ignore) {
			css += createClass({
				className: item.className,
				properties: item.properties,
				screen,
				important: true
			});
		}
	});

	return css;
};
