/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import fs from 'fs';

// node
const nodePath = 'node_modules/manakit/dist';

function load() {
	return {
		global: undefined,
		modules: [
			path.resolve(`${nodePath}/modules/app`, 'app.css'),
			path.resolve(`${nodePath}/modules/btn`, 'btn.css'),
			path.resolve(`${nodePath}/modules/card`, 'card.css'),
			path.resolve(`${nodePath}/modules/divider`, 'divider.css'),
			path.resolve(`${nodePath}/modules/drawer`, 'drawer.css'),
			path.resolve(`${nodePath}/modules/footer`, 'footer.css'),
			path.resolve(`${nodePath}/modules/grids/col`, 'col.css'),
			path.resolve(`${nodePath}/modules/grids/container`, 'container.css'),
			path.resolve(`${nodePath}/modules/grids/row`, 'row.css'),
			path.resolve(`${nodePath}/modules/grids/spacer`, 'spacer.css'),
			path.resolve(`${nodePath}/modules/hstack`, 'hstack.css'),
			path.resolve(`${nodePath}/modules/main`, 'main.css'),
			path.resolve(`${nodePath}/modules/modal`, 'modal.css'),
			path.resolve(`${nodePath}/modules/toolbar`, 'toolbar.css'),
			path.resolve(`${nodePath}/modules/vstack`, 'vstack.css')
		],
		breakpoint: [
			path.resolve(`${nodePath}/modules/divider`, 'divider.breakpoint.css'),
			path.resolve(`${nodePath}/modules/btn`, 'btn.breakpoint.css'),
			path.resolve(`${nodePath}/modules/drawer`, 'drawer.breakpoint.css'),
			path.resolve(`${nodePath}/modules/footer`, 'footer.breakpoint.css'),
			path.resolve(`${nodePath}/modules/grids/col`, 'col.breakpoint.css'),
			path.resolve(`${nodePath}/modules/modal`, 'modal.breakpoint.css'),
			path.resolve(`${nodePath}/modules/toolbar`, 'toolbar.breakpoint.css')
		]
	};
}

export function convertJStoCSS() {
	let css = '';
	const files = load();

	files?.modules.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	const brk: any = {
		default: '0',
		md: '1200px',
		xl: '2785px'
	};

	let cssBreakpoint = '';
	files?.breakpoint.map((pathFile) => (cssBreakpoint += fs.readFileSync(pathFile, 'utf-8')));
	for (const property in brk) {
		if (property !== 'default') {
			css += `@media screen and (min-width: ${brk[property]}) {`;
			css += cssBreakpoint.replaceAll('[breakpoint]', `.${property}\\:`);
			css += `}`;
		} else {
			css += cssBreakpoint.replaceAll('[breakpoint]', `.`);
		}
	}

	console.log('CSS convert', minimifyCSS(css));
	return css;
}

function minimifyCSS(css: string) {
	// delete comment
	css = css.replace(/\/\*[\s\S]*?\*\//g, '');
	// delete space on { ; : ,
	css = css.replace(/\s*([{};:,\s])\s*/g, '$1');
	// delete return line
	css = css.replace(/\n/g, '');
	css = css.trim();
	return css;
}
