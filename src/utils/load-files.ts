import path from 'path';
import fsPromises from 'fs/promises';

const directory = process.cwd();
const nodePath = 'node_modules/manakit/dist';

export async function loadConfig() {
	let data = undefined;
	try {
		const file = await fsPromises.readFile(path.resolve(directory, '.manakit.cjs'), 'utf-8');

		if (
			file.match(/export\s+default\s+(\{[^]*?\});/) &&
			file.match(/export\s+default\s+(\{[^]*?\});/) !== null &&
			file.match(/export\s+default\s+(\{[^]*?\});/)!.length > 1
		) {
			const code = `return ${file.match(/export\s+default\s+(\{[^]*?\});/)![1]}`;
			data = await new Function(code)();
		}
		// eslint-disable-next-line no-empty
	} catch (err) {}

	return data;
}

export function loadCss() {
	return {
		global: [
			path.resolve(`${nodePath}/assets/css/libs`, 'normalize.css'),
			path.resolve(`${nodePath}/assets/css/libs`, 'global.css'),
			path.resolve(`${nodePath}/assets/css/libs`, 'prose.css')
		],
		palette: {
			manakit: path.resolve(`${nodePath}/assets/css/colors`, 'manakit.css'),
			webkit: path.resolve(`${nodePath}/assets/css/colors`, 'webkit.css')
		},
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
		]
	};
}
