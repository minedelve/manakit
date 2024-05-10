/* eslint-disable @typescript-eslint/no-explicit-any */
export function className(...args: any) {
	return args.filter((cls: any) => !!cls).join(' ');
}
