export interface DialogProps {
	open: boolean;
	children?: JSX.Element | JSX.Element[];
	onClose?: () => void;
}
