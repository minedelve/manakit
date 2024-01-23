import createRoot from '../../helpers/styles/createRoot.js';

export const initialFamily = {
	title: 'Roboto,sans-serif',
	body: 'Roboto,sans-serif'
};

export const family = () => {
	let css = '';
	css += createRoot({ name: 'font', variables: initialFamily });
	return css;
};
