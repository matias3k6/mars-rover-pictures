import React, { ChangeEvent, useContext } from 'react';
import { InputGroup } from '@chakra-ui/input';
import RoversContex from 'contexts/Rovers/context';
import { formatDate } from 'utils/formatDate';
import DatePicker from 'components/DatePicker';
import Select from 'components/Select';
import TextField from 'components/TextField';
import { RoverFilters } from 'contexts/Rovers/types';
import { HStack } from '@chakra-ui/layout';
import { cameras, rovers } from './mock';

const Filters = (): JSX.Element => {
	const { roversFilters, handleChangeFilter } = useContext(RoversContex);
	const currentDate = formatDate(new Date());

	const handleSelect = (
		filterName: keyof RoverFilters,
		{ target }: ChangeEvent<HTMLSelectElement>
	) => {
		handleChangeFilter(filterName, target.value);
		handleChangeFilter('page', 1);
		if (filterName === 'rover') handleChangeFilter('camera', '');
	};
	const handleChange = (
		filterName: keyof RoverFilters,
		{ target }: ChangeEvent<HTMLInputElement>
	) => {
		const { value } = target;
		if (filterName === 'earth_date' && value) {
			handleChangeFilter(filterName, value);
			handleChangeFilter('sol', '');
		} else {
			handleChangeFilter(filterName, value);
		}
		handleChangeFilter('page', 1);
	};

	const filteredCameras = cameras.filter((camera) => {
		if (camera.value === '') return true;
		const currentRover = rovers.find(
			(rover) => rover.value === roversFilters.rover
		);
		if (currentRover?.cameras.find((cam) => cam === camera.value))
			return true;
	});

	return (
		<InputGroup>
			<HStack
				spacing={'1rem'}
				paddingY={'1rem'}
				flexWrap={'wrap'}
				marginLeft={'-1rem'}
			>
				<Select
					label={'Select a Rover'}
					handleChange={(event) => handleSelect('rover', event)}
					value={roversFilters.rover}
					options={rovers}
				/>
				<Select
					label={'Select a Camera'}
					handleChange={(event) => handleSelect('camera', event)}
					value={roversFilters.camera}
					options={filteredCameras}
				/>
				<DatePicker
					label={'Select a Earth Date'}
					handleChange={(event) => handleChange('earth_date', event)}
					date={roversFilters.earth_date}
					maxDate={currentDate}
					isDisabled={Boolean(roversFilters.sol)}
				/>
				<TextField
					type={'number'}
					label={'Select a Sol (day on Mars)'}
					handleChange={(event) => handleChange('sol', event)}
					value={roversFilters.sol}
					maxLength={4}
					placeholder={'Ex: 1000'}
				/>
			</HStack>
		</InputGroup>
	);
};

export default Filters;
