/* eslint-disable @typescript-eslint/no-explicit-any */
const rootVar = ({ section, slug, value }: any) => {
	return `--${section}-${slug}: ${value};\n`;
};

export default rootVar;
