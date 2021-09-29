import React from 'react';
import { Select } from '@chakra-ui/select';
import { RoverType } from 'global/rovers';
import { FiltersSelectProps } from './types';
import { Box, Text } from '@chakra-ui/layout';

const FiltersSelect = ({
	handleSelect,
	rover,
}: FiltersSelectProps): JSX.Element => {
	const options = [
		{ label: 'Curiosity', value: RoverType.Curiosity },
		{ label: 'Opportunity', value: RoverType.Opportunity },
		{ label: 'Spirit', value: RoverType.Spirit },
	];

	return (
		<Box p={'1rem'}>
			<Text as={'label'} htmlFor={'date'}>
				Rover
			</Text>
			<Select id={'rover'} value={rover} onChange={handleSelect}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</Box>
	);
};

export default FiltersSelect;
