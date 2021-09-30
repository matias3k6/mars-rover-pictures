import React from 'react';
import { Select as ChakraSelect } from '@chakra-ui/select';
import { SelectProps } from './types';
import { Box, Text } from '@chakra-ui/layout';

const Select = ({
	label,
	handleChange,
	options,
	value,
	...props
}: SelectProps): JSX.Element => {
	return (
		<Box width={'16rem'} paddingY={'.5rem'} marginInlineStart={'1rem'}>
			<Text as={'label'} htmlFor={'date'}>
				{label}
			</Text>
			<ChakraSelect
				id={'rover'}
				value={value}
				onChange={handleChange}
				{...props}
			>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</ChakraSelect>
		</Box>
	);
};

export default Select;
