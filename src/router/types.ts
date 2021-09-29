export interface AppRoute {
	label: string;
	path: string;
	view: () => JSX.Element;
}
