export const dataDefaultProps = [
	{ class: 'rounded-{value}', properties: 'border-radius' },
	{ class: 'rounded-t-{value}', properties: 'border-top-left-radius | border-top-right-radius' },
	{ class: 'rounded-tr-{value}', properties: 'border-top-right-radius' },
	{ class: 'rounded-tl-{value}', properties: 'border-top-left-radius' },
	{
		class: 'rounded-b-{value}',
		properties: 'border-bottom-left-radius | border-bottom-right-radius'
	},
	{ class: 'rounded-br-{value}', properties: 'border-bottom-right-radius' },
	{ class: 'rounded-bl-{value}', properties: 'border-bottom-left-radius' }
];

export const dataValueProps = [
	{ class: '0', properties: 'border-radius: 0;' },
	{ class: 'sm', properties: 'border-radius: 0.125rem;' },
	{ class: '', properties: 'border-radius: 0.25rem;' },
	{ class: 'lg', properties: 'border-radius: 0.5rem;' },
	{ class: 'xl', properties: 'border-radius: 1.5rem;' },
	{ class: 'pill', properties: 'border-radius: 9999px;' },
	{ class: 'circle', properties: 'border-radius: 50%;' }
];
