interface OptionProps {
	label: string;
	value: string;
}

export interface MenuProps {
	label: string;
	options: OptionProps[];
	handleSelect: (id: string) => void;
	handleDelete: (id: string) => void;
}
