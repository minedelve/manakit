import path from 'path';
const nodePath = 'node_modules/manakit/dist/assets/scss';
const nodePathLibs = 'node_modules/manakit/dist/assets/scss/libs';
const nodePathColors = 'node_modules/manakit/dist/assets/scss/colors';
const nodePathModules = 'node_modules/manakit/dist/modules';

// Files SCSS
export const headSCSS = [
	path.resolve(`${nodePath}`, 'variables.scss'),
	path.resolve(`${nodePath}`, 'mixins.scss'),
	path.resolve(`${nodePath}`, 'normalize.scss')
];

export const paletteSCSS = {
	manakit: path.resolve(`${nodePathColors}`, 'manakit.scss'),
	webkit: path.resolve(`${nodePathColors}`, 'webkit.scss')
};

export const contentSCSS = [
	path.resolve(`${nodePath}`, 'main.scss'),
	path.resolve(`${nodePathLibs}`, 'prose.scss'),
	path.resolve(`${nodePathLibs}`, 'align-content.scss'),
	path.resolve(`${nodePathLibs}`, 'align-item.scss'),
	path.resolve(`${nodePathLibs}`, 'align-self.scss'),
	path.resolve(`${nodePathLibs}`, 'auto-margin.scss'),
	path.resolve(`${nodePathLibs}`, 'column.scss'),
	path.resolve(`${nodePathLibs}`, 'direction.scss'),
	path.resolve(`${nodePathLibs}`, 'display.scss'),
	path.resolve(`${nodePathLibs}`, 'float.scss'),
	path.resolve(`${nodePathLibs}`, 'gap.scss'),
	path.resolve(`${nodePathLibs}`, 'grow-shrink.scss'),
	path.resolve(`${nodePathLibs}`, 'grow.scss'),
	path.resolve(`${nodePathLibs}`, 'height.scss'),
	path.resolve(`${nodePathLibs}`, 'justify.scss'),
	path.resolve(`${nodePathLibs}`, 'margin.scss'),
	path.resolve(`${nodePathLibs}`, 'order.scss'),
	path.resolve(`${nodePathLibs}`, 'padding.scss'),
	path.resolve(`${nodePathLibs}`, 'position.scss'),
	path.resolve(`${nodePathLibs}`, 'rounded.scss'),
	path.resolve(`${nodePathLibs}`, 'row.scss'),
	path.resolve(`${nodePathLibs}`, 'shadow.scss'),
	path.resolve(`${nodePathLibs}`, 'shortland.scss'),
	path.resolve(`${nodePathLibs}`, 'text-align.scss'),
	path.resolve(`${nodePathLibs}`, 'text-decoration.scss'),
	path.resolve(`${nodePathLibs}`, 'text-opacity.scss'),
	path.resolve(`${nodePathLibs}`, 'text-size.scss'),
	path.resolve(`${nodePathLibs}`, 'text-transform.scss'),
	path.resolve(`${nodePathLibs}`, 'text-weight.scss'),
	path.resolve(`${nodePathLibs}`, 'width.scss'),
	path.resolve(`${nodePathLibs}`, 'wrap.scss'),
	path.resolve(`${nodePathLibs}`, 'colors.scss')
];

export const modulesSCSS = [
	path.resolve(`${nodePathModules}/app`, 'app.scss'),
	path.resolve(`${nodePathModules}/spacer`, 'spacer.scss'),
	path.resolve(`${nodePathModules}/toolbar`, 'toolbar.scss'),
	path.resolve(`${nodePathModules}/container`, 'container.scss'),
	path.resolve(`${nodePathModules}/card`, 'card.scss'),
	path.resolve(`${nodePathModules}/footer`, 'footer.scss'),
	path.resolve(`${nodePathModules}/divider`, 'divider.scss'),
	path.resolve(`${nodePathModules}/drawer`, 'drawer.scss'),
	path.resolve(`${nodePathModules}/modal`, 'modal.scss'),
	path.resolve(`${nodePathModules}/btn`, 'btn.scss'),
	path.resolve(`${nodePathModules}/vstack`, 'vstack.scss'),
	path.resolve(`${nodePathModules}/hstack`, 'hstack.scss')
];
