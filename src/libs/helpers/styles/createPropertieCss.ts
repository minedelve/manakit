/* eslint-disable @typescript-eslint/no-explicit-any */
const propertie = ({ key, value, important }: any) => {
	return `${key}: ${value} ${important ? '!important' : ''};\n`;
};

export default propertie;
