import React from 'react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { TextFieldProps } from './types';

const TextField = ({
	type,
	label,
	value,
	handleChange,
	...props
}: TextFieldProps): JSX.Element => {
	return (
		<Box width={'14rem'} paddingY={'.5rem'}>
			<Text as={'label'} htmlFor={'text-field'}>
				{label}
			</Text>
			<Input
				onChange={handleChange}
				type={type}
				id={'text-field'}
				value={value}
				{...props}
			/>
		</Box>
	);
};

export default TextField;
