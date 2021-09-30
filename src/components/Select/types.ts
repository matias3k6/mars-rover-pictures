import { SelectProps as ChakraSelectProps } from '@chakra-ui/select';
import { ChangeEvent } from 'react';

interface OptionProps {
	label: string;
	value: string;
}

export interface SelectProps extends ChakraSelectProps {
	handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	label: string;
	options: OptionProps[];
}
