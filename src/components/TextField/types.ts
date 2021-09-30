import { InputProps } from '@chakra-ui/input';
import { ChangeEvent } from 'react';

export interface TextFieldProps extends InputProps {
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	label: string;
}
