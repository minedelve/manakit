import path from 'path';
const rootDir = process.cwd();

export const pathCss = path.resolve(`node_modules/manakit/dist`, 'app.css');
export const pathPackage = path.resolve(`node_modules/manakit/dist`, '.manakit.cjs');
export const pathRoot = path.resolve(rootDir, '.manakit.cjs');

// in root
export const pathConfiguration = path.resolve(rootDir, '.manakit.cjs');
