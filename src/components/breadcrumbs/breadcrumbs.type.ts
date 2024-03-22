export type ItemsProps = Array<string> | Items[];

interface Items {
	title: string;
	disabled?: boolean;
	href?: string;
}
