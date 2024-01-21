export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			console.log('manakit Resolved');
		}
	};
}
