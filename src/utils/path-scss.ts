import path from 'path';
const nodePath = 'node_modules/manakit/dist/assets/scss';
const nodePathLibs = 'node_modules/manakit/dist/assets/scss/libs';
const nodePathColors = 'node_modules/manakit/dist/assets/scss/colors';
const nodePathModules = 'node_modules/manakit/dist/modules';

// Files SCSS
export const headSCSS = [
	path.resolve(`${nodePath}`, 'initial.scss'),
	path.resolve(`${nodePath}`, 'mixins.scss')
];

export const variablesSCSS = [path.resolve(`${nodePath}`, 'variables.scss')];

export const paletteSCSS = {
	manakit: path.resolve(`${nodePathColors}`, 'manakit.scss'),
	webkit: path.resolve(`${nodePathColors}`, 'webkit.scss')
};

export const globalSCSS = [
	path.resolve(`${nodePathLibs}`, 'global.scss'),
	path.resolve(`${nodePathLibs}`, 'normalize.scss'),
	path.resolve(`${nodePathLibs}`, 'themes.scss'),
	path.resolve(`${nodePathLibs}`, 'colors.scss'),
	path.resolve(`${nodePathLibs}`, 'prose.scss')
];

export const modulesSCSS = [
	path.resolve(`${nodePathModules}/app`, 'app.scss'),

	path.resolve(`${nodePathModules}/toolbar`, 'toolbar.scss'),
	path.resolve(`${nodePathModules}/grids/spacer`, 'spacer.scss'),
	path.resolve(`${nodePathModules}/grids/container`, 'container.scss'),
	path.resolve(`${nodePathModules}/grids/row`, 'row.scss'),
	path.resolve(`${nodePathModules}/grids/col`, 'col.scss'),
	path.resolve(`${nodePathModules}/card`, 'card.scss'),
	path.resolve(`${nodePathModules}/footer`, 'footer.scss'),
	path.resolve(`${nodePathModules}/divider`, 'divider.scss'),
	path.resolve(`${nodePathModules}/drawer`, 'drawer.scss'),
	path.resolve(`${nodePathModules}/modal`, 'modal.scss'),
	path.resolve(`${nodePathModules}/btn`, 'btn.scss'),
	path.resolve(`${nodePathModules}/vstack`, 'vstack.scss'),
	path.resolve(`${nodePathModules}/hstack`, 'hstack.scss'),
	path.resolve(`${nodePathModules}/main`, 'main.scss')
];
