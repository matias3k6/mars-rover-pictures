import { ChangeEvent } from 'react';

export interface DatePickerProps {
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	date: string;
	maxDate?: string;
	label: string;
}
