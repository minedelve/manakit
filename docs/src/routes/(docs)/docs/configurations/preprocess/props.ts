export const dataProps = [
	{
		class: 'version',
		type: 'boolean',
		default: 'true',
		description: 'Check version manakit install in your project'
	},
	{
		class: 'install',
		type: 'boolean',
		default: 'true',
		description: 'Check your manakit install on your project is valid'
	},
	{
		class: 'preprocessor',
		type: 'string | undefined',
		default: 'undefined',
		description: 'Add preprocessor stying for use variables sass manakit on your project'
	},
	{
		class: 'colorPalette',
		type: "'manakit' | 'webkit' | ['manakit', 'webkit']",
		default: 'manakit',
		description: 'Use color palette on your project, with list root css'
	},
	{
		class: 'minimify',
		type: 'boolean',
		default: 'false',
		description: 'minimify CSS manakit'
	}
];
