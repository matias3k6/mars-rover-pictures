import React, { ChangeEvent, useContext } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/layout';
import RoversContex, { RoverFilters } from 'contexts/Rovers';
import DatePicker from 'components/DatePicker';
import Select from 'components/Select';
import TextField from 'components/TextField';
import { formatDate } from 'utils/formatDate';
import { cameras, rovers } from './mock';
import { FaSave } from 'react-icons/fa';
import Menu from 'components/Menu';

const Filters = (): JSX.Element => {
	const {
		savedFilters,
		roversFilters,
		handleChangeFilter,
		handleStoreFilter,
		handleRemoveFilter,
		handleSelectFilter,
	} = useContext(RoversContex);
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

	const bookmarks = savedFilters.map((filter) => ({
		label: `${filter.rover.toUpperCase()} - Camera: ${
			filter.camera || 'All'
		} - ${filter.sol ? `${filter.sol} (sol)` : filter.earth_date}`,
		value: filter.id,
	}));

	return (
		<Box
			width={'100%'}
			display={'flex'}
			justifyContent={'space-between'}
			flexWrap={'wrap'}
		>
			<HStack flexWrap={'wrap'} spacing={{ sm: 0, md: '1rem' }}>
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
			<HStack spacing={'1rem'} alignSelf={'flex-end'} paddingY={'.5rem'}>
				<Button
					onClick={() => handleStoreFilter(roversFilters)}
					leftIcon={<FaSave />}
					colorScheme={'blue'}
				>
					Save
				</Button>
				<Menu
					label={'Saved'}
					options={bookmarks}
					handleSelect={handleSelectFilter}
					handleDelete={handleRemoveFilter}
				/>
			</HStack>
		</Box>
	);
};

export default Filters;
