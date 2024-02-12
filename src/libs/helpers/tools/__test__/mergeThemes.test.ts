import { describe, it, expect } from 'vitest';
import { mergeThemes } from '../mergeThemes';

describe('tools mergeThemes', () => {
	const themes = {
		primary: { color: 'blue' },
		secondary: { color: 'red' }
	};

	it('only initial config', () => {
		const mergedThemesResult = mergeThemes(themes);

		expect(mergedThemesResult).toEqual({
			primary: { color: 'blue' },
			secondary: { color: 'red' }
		});
	});
});
