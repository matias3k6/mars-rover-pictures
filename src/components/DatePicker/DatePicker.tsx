import React from 'react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { DatePickerProps } from './types';

const DatePicker = ({
	label,
	date,
	handleChange,
	maxDate,
}: DatePickerProps): JSX.Element => {
	return (
		<Box width={'16rem'} paddingY={'.5rem'}>
			<Text as={'label'} htmlFor={'date'}>
				{label}
			</Text>
			<Input
				onChange={handleChange}
				type={'date'}
				id={'date'}
				value={date}
				max={maxDate}
				isRequired
			/>
		</Box>
	);
};

export default DatePicker;
