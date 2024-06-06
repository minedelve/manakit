export const dataSlot = [{ name: 'default', desc: 'The default Svelte slot' }];

export const dataProps = [
	{
		name: 'tag',
		type: '`button` | `a` | `input`',
		default: 'button',
		desc: 'Sets the DOM tag on the component'
	},
	{ name: 'dark', type: 'boolean', default: 'false', desc: 'force use dark mode theme' },
	{ name: 'light', type: 'boolean', default: 'false', desc: 'force use light mode theme' },
	{ name: 'disabled', type: 'boolean', default: 'false', desc: 'disabled button' },
	{ name: 'square', type: 'boolean', default: 'false', desc: 'button square with rounded corners' },
	{ name: 'circle', type: 'boolean', default: 'false', desc: 'button circle ' },
	{
		name: 'outline',
		type: 'boolean',
		default: 'false',
		desc: 'Button with fine border and transparent background'
	},
	{ name: 'rounded', type: 'boolean', default: 'false', desc: 'Button with full radius' },
	{
		name: 'text',
		type: 'boolean',
		default: 'false',
		desc: 'Button with background transparent and no border'
	},
	{
		name: 'link',
		type: 'boolean',
		default: 'false',
		desc: 'force style button with link style standard'
	},
	{ name: 'info', type: 'boolean', default: 'false', desc: 'Use style info state' },
	{ name: 'success', type: 'boolean', default: 'false', desc: 'Use style success state' },
	{ name: 'warning', type: 'boolean', default: 'false', desc: 'Use style warning state' },
	{ name: 'error', type: 'boolean', default: 'false', desc: 'Use style error state' },
	{ name: 'wide', type: 'boolean', default: 'false', desc: 'force size button to `16rem`' },
	{ name: 'block', type: 'boolean', default: 'false', desc: 'Use style display `block`' }
];
