import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		size: '0',
		value: 0
	},
	{
		size: 'px',
		value: '1px'
	},
	{
		size: '0.5',
		value: '0.125rem'
	},
	{
		size: '1',
		value: '0.25rem'
	},
	{
		size: '1.5',
		value: '0.375rem'
	},
	{
		size: '2',
		value: '0.5rem'
	},
	{
		size: '2.5',
		value: '0.625rem'
	},
	{
		size: '3',
		value: '0.75rem'
	},
	{
		size: '3.5',
		value: '0.875rem'
	},
	{
		size: '4',
		value: '1rem'
	},
	{
		size: '5',
		value: '1.25rem'
	},
	{
		size: '6',
		value: '1.5rem'
	},
	{
		size: '7',
		value: '1.75rem'
	},
	{
		size: '8',
		value: '2rem'
	},
	{
		size: '9',
		value: '2.25rem'
	},
	{
		size: '10',
		value: '2.5rem'
	},
	{
		size: '11',
		value: '2.75rem'
	},
	{
		size: '12',
		value: '3rem'
	},
	{
		size: '14',
		value: '3.5rem'
	},
	{
		size: '16',
		value: '4rem'
	},
	{
		size: '20',
		value: '5rem'
	},
	{
		size: '24',
		value: '6rem'
	},
	{
		size: '28',
		value: '7rem'
	},
	{
		size: '32',
		value: '8rem'
	},
	{
		size: '36',
		value: '9rem'
	},
	{
		size: '40',
		value: '10rem'
	},
	{
		size: '44',
		value: '11rem'
	},
	{
		size: '48',
		value: '12rem'
	},
	{
		size: '52',
		value: '13rem'
	},
	{
		size: '56',
		value: '14rem'
	},
	{
		size: '60',
		value: '15rem'
	},
	{
		size: '64',
		value: '16rem'
	},
	{
		size: '72',
		value: '18rem'
	},
	{
		size: '80',
		value: '20rem'
	},
	{
		size: '96',
		value: '24rem'
	}
];

// class
export const paddingClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.pt-' + item.size,
			properties: {
				'padding-top': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.pb-' + item.size,
			properties: {
				'margin-bottom': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.pl-' + item.size,
			properties: {
				'padding-left': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.pr-' + item.size,
			properties: {
				'padding-right': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.px-' + item.size,
			properties: {
				'padding-left': `${item?.value}`,
				'padding-right': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.py-' + item.size,
			properties: {
				'padding-top': `${item?.value}`,
				'padding-bottom': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.p-' + item.size,
			properties: {
				padding: `${item?.value}`
			},
			important: true,
			screen
		});
	});

	return css;
};
