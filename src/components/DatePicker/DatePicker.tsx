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
	...props
}: DatePickerProps): JSX.Element => {
	// This locale pattern date is only for Netifly, please ignore it (tbh I don't want configure a locale just for that)
	const fakeLocalePattern =
		'(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))';

	return (
		<Box width={{ sm: '100%', lg: '14rem' }} paddingY={'.5rem'}>
			<Text as={'label'} htmlFor={'date'}>
				{label}
			</Text>
			<Input
				onChange={handleChange}
				type={'date'}
				id={'date'}
				value={date}
				max={maxDate}
				pattern={fakeLocalePattern}
				isRequired
				{...props}
			/>
		</Box>
	);
};

export default DatePicker;
