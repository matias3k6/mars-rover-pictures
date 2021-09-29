import React from 'react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { formatDateToISOString } from 'utils/formatDate';
import { FiltersDatePickerProps } from './types';

const FilterDatePicker = ({
	date,
	handleDatePicker,
}: FiltersDatePickerProps): JSX.Element => {
	const currentDate = formatDateToISOString(new Date());
	return (
		<Box p={'1rem'}>
			<Text as={'label'} htmlFor={'date'}>
				Earth Date
			</Text>

			<Input
				onChange={handleDatePicker}
				type={'date'}
				id={'date'}
				value={date}
				max={currentDate}
				isRequired
			/>
		</Box>
	);
};

export default FilterDatePicker;
