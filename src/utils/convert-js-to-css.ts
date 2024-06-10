import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import { loadCss } from './load-files.js';

import type { ConvertJSToCSSProps } from '../assets/types/config.js';
import { formatCSSMarkers } from './marker-css.js';
import { minimifyCSS } from './minimify-css.js';

export function convertJStoCSS(params: ConvertJSToCSSProps) {
	let _class: string[] = [];
	let cssFiles: string = '';
	let css: string = '';
	const files = loadCss();

	// PALETTE
	if (params.palette) {
		for (const [palette, pathFile] of Object.entries(files?.palette)) {
			if (typeof params.palette === 'string' && palette === params.palette) {
				css += fs.readFileSync(pathFile, 'utf-8');
			} else if (typeof params.palette === 'object') {
				params.palette.map((params: string) => {
					if (params === palette) css += fs.readFileSync(pathFile, 'utf-8');
				});
			}
		}
	}

	files?.global.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	// MODULES & STYLES
	files?.styles.map((pathFile) => (cssFiles += fs.readFileSync(pathFile, 'utf-8')));
	files?.modules.map((pathFile) => (cssFiles += fs.readFileSync(pathFile, 'utf-8')));

	const extract = formatCSSMarkers(
		cssFiles,
		'/* @manakit-breakpoint */',
		'/* !@manakit-breakpoint */'
	);

	css += extract.cleaned;

	for (const property in params.breakpoints) {
		if (property !== 'default') {
			css += `@media screen and (min-width: ${params.breakpoints[property]}) {`;
			css += extract.extracted.replaceAll('[breakpoint]', `.${property}\\:`);
			css += `}`;
		} else {
			css += extract.extracted.replaceAll('[breakpoint]', `.`);
		}
	}

	// THEMES
	for (const style in params.fonts) {
		css += style !== 'default' ? `.mk-fonts-${style} {` : ':root {';
		for (const [name, font] of Object.entries(params.fonts[style])) {
			css += `--font-${name}: ${font};\n`;
		}
		css += '}\n';
	}

	for (const theme in params.themes) {
		const light: { [key: string]: string } = {};
		const dark: { [key: string]: string } = {};

		for (const [name, colors] of Object.entries(params.themes[theme])) {
			if (typeof colors === 'string') {
				light[name] = colors;
				if (dark) dark[name] = colors;
			} else {
				if (colors && (('light' in colors) as unknown)) light[name] = colors.light!;
				if (colors && (('dark' in colors) as unknown)) dark[name] = colors.dark!;
			}

			_class = _class.concat([name]);
		}

		if (params.mode === 'light') css += theme !== 'default' ? `.mk-theme-${theme} {` : `:root {`;
		else css += theme !== 'default' ? `.mk-theme-${theme}.light {` : `.light {`;
		for (const [name, color] of Object.entries(light)) {
			css += `--${name}: ${color};\n`;
		}
		css += '}\n';

		if (params.mode === 'dark') css += theme !== 'default' ? `.mk-theme-${theme} {` : `:root {`;
		else css += theme !== 'default' ? `.mk-theme-${theme}.dark {` : `.dark {`;
		for (const [name, color] of Object.entries(dark)) {
			css += `--${name}: ${color};\n`;
		}
		css += '}\n';

		if (params.mode === 'mixed') {
			css += `@media (prefers-color-scheme: light) {`;
			css += theme !== 'default' ? `.mk-theme-${theme} {` : `:root {`;
			css += `color-scheme: light;`;
			for (const [name, color] of Object.entries(light)) {
				css += `--${name}: ${color};\n`;
			}
			css += '}}\n';

			css += `@media (prefers-color-scheme: dark) {`;
			css += theme !== 'default' ? `.mk-theme-${theme} {` : `:root {`;
			css += `color-scheme: dark;`;
			for (const [name, color] of Object.entries(dark)) {
				css += `--${name}: ${color};\n`;
			}
			css += '}}\n';
		}
	}

	if (_class && _class.length > 0) {
		_class.map((key: string) => {
			css += `.${key} {\n`;
			if (!key.includes('on-')) {
				if (_class.includes(`on-${key}`)) {
					css += `--background-color: var(--${key});`;
					css += `--color: var(--on-${key});`;
				} else {
					css += `--background-color: var(--${key});`;
				}
			} else {
				css += `--color: var(--${key});`;
			}
			css += `}\n`;

			css += `.${key}[class*='-outline'],\n .${key}[class*='-text'],\n .${key}[class*='-link'] {\n`;
			css += `--color: var(--${key});`;
			css += `}\n`;

			css += `.bg\\:${key} {\n`;
			css += `--background-color: var(--${key});`;
			css += `background-color: var(--${key});`;
			css += `}\n`;

			css += `.text\\:${key} {\n`;
			css += `--color: var(--${key});`;
			css += `color: var(--${key});`;
			css += `}\n`;

			css += `.border\\:${key} {\n`;
			css += `--border-color: var(--${key});`;
			css += `border-color: var(--${key});`;
			css += `}\n`;
		});
	}

	fsPromises.writeFile(
		path.resolve(`node_modules/manakit/dist`, 'style.css'),
		params.minimify ? minimifyCSS(css) : css
	);
}
