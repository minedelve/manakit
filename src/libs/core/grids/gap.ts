import createClass from '../../helpers/styles/createClass.js';

const properties = [
	{
		className: '0',
		value: '0px'
	},
	{
		className: 'px',
		value: '1px'
	},
	{
		className: '0.5',
		value: '0.125rem'
	},
	{
		className: '1',
		value: '0.25rem'
	},
	{
		className: '1.5',
		value: '0.375rem'
	},
	{
		className: '2',
		value: '0.5rem'
	},
	{
		className: '2.5',
		value: '0.625rem'
	},
	{
		className: '3',
		value: '0.75rem'
	},
	{
		className: '3.5',
		value: '0.875rem'
	},
	{
		className: '4',
		value: '1rem'
	},
	{
		className: '5',
		value: '1.25rem'
	},
	{
		className: '6',
		value: '1.5rem'
	},
	{
		className: '7',
		value: '1.75rem'
	},
	{
		className: '8',
		value: '2rem'
	},
	{
		className: '9',
		value: '2.25rem'
	},
	{
		className: '10',
		value: '2.5rem'
	},
	{
		className: '11',
		value: '2.75rem'
	},
	{
		className: '12',
		value: '3rem'
	},
	{
		className: '14',
		value: '3.5rem'
	},
	{
		className: '16',
		value: '4rem'
	},
	{
		className: '20',
		value: '5rem'
	},
	{
		className: '24',
		value: '6rem'
	},
	{
		className: '28',
		value: '7rem'
	},
	{
		className: '32',
		value: '8rem'
	},
	{
		className: '36',
		value: '9rem'
	},
	{
		className: '40',
		value: '10rem'
	},
	{
		className: '44',
		value: '11rem'
	},
	{
		className: '48',
		value: '12rem'
	},
	{
		className: '52',
		value: '13rem'
	},
	{
		className: '56',
		value: '14rem'
	},
	{
		className: '60',
		value: '15rem'
	},
	{
		className: '64',
		value: '16rem'
	},
	{
		className: '72',
		value: '18rem'
	},
	{
		className: '80',
		value: '20rem'
	},
	{
		className: '96',
		value: '24rem'
	}
];

// class
export const gridsGapClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.gap-' + item.className,
			properties: {
				gap: item.value
			},
			screen
		});
		css += createClass({
			className: '.gap-x-' + item.className,
			properties: {
				'column-gap': item.value
			},
			screen
		});
		css += createClass({
			className: '.gap-y-' + item.className,
			properties: {
				'row-gap': item.value
			},
			screen
		});
	});

	return css;
};
