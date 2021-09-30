export interface AppRoute {
	label: string;
	path: string;
	View: () => JSX.Element;
}
