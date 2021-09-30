import { InputProps } from '@chakra-ui/input';
import { ChangeEvent } from 'react';

export interface DatePickerProps extends InputProps {
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	date: string;
	maxDate?: string;
	label: string;
}
