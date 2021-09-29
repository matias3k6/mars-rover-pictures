import React, { ChangeEvent, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { RoverType } from 'global/rovers';
import RoversContex from 'contexts/Rovers/context';
import FiltersSelect from './FilterSelect';
import FilterDatePicker from './FilterDatePicker';

const Filters = (): JSX.Element => {
	const { roversFilters, handleChangeFilter } = useContext(RoversContex);

	const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		handleChangeFilter('rover', event.target.value as RoverType);
	};

	const handleDatePicker = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value)
			handleChangeFilter('earth_date', event.target.value);
	};

	return (
		<Box display={'flex'} flexWrap={'wrap'} alignSelf={'flex-start'}>
			<FiltersSelect
				handleSelect={handleSelect}
				rover={roversFilters.rover}
			/>
			<FilterDatePicker
				handleDatePicker={handleDatePicker}
				date={roversFilters.earth_date}
			/>
		</Box>
	);
};

export default Filters;
