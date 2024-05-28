import { derived, writable } from 'svelte/store';
import translations from './locales';

export const locale = writable('en');
export const locales = Object.keys(translations);

function translate(locale: string, key: string | number, vars: { [x: string]: never }) {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let text = (translations as any)[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);
