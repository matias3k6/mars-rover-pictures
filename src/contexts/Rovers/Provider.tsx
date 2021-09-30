import React, { useState, useEffect } from 'react';
import { SavedRoverFilters } from '.';
import { getPictures, readFilters, removeFilter, storeFilter } from './actions';
import RoversContex from './context';
import { roversDefaultValues } from './defaultValues';
import { RoverFilters, RoversProviderData, RoversProviderProps } from './types';

const Provider = ({ children }: RoversProviderProps): JSX.Element => {
	const [roversData, setRoversData] = useState<RoversProviderData>(
		roversDefaultValues.roversData
	);
	const [roversFilters, setRoversFilters] = useState<RoverFilters>(
		roversDefaultValues.roversFilters
	);
	const [savedFilters, setSavedFilters] = useState<SavedRoverFilters[]>([]);

	const updateRoversData = (
		key: keyof RoversProviderData,
		value: RoversProviderData[keyof RoversProviderData]
	) => {
		setRoversData((prevState) => ({ ...prevState, [key]: value }));
	};

	const updateRoversFilters = (
		key: keyof RoverFilters,
		value: RoverFilters[keyof RoverFilters]
	) => {
		setRoversFilters((prevState) => ({ ...prevState, [key]: value }));
	};

	const handlePictures = async () => {
		const pictures = await getPictures(roversFilters);
		if (pictures instanceof Error) {
			updateRoversData('error', `${pictures.name}: ${pictures.message}`);
		} else {
			updateRoversData('pictures', pictures);
		}
	};

	const handleFilters = async () => {
		const filters = readFilters();
		setSavedFilters(filters);
	};

	const handleStoreFilter = (filter: RoverFilters) => {
		storeFilter(filter);
		handleFilters();
	};

	const handleRemoveFilter = (id: string) => {
		removeFilter(id);
		handleFilters();
	};

	const handleSelectFilter = (id: string) => {
		const selectedFilter = savedFilters.find((filter) => filter.id === id);
		if (selectedFilter) {
			const { sol, camera, earth_date, page, rover } = selectedFilter;
			setRoversFilters({
				earth_date,
				page,
				rover,
				camera,
				sol,
			});
		}
	};

	useEffect(() => {
		handlePictures();
	}, [roversFilters]);

	useEffect(() => {
		handleFilters();
	}, []);

	return (
		<RoversContex.Provider
			value={{
				roversData,
				savedFilters,
				roversFilters,
				handleChangeFilter: updateRoversFilters,
				handlePictures,
				handleStoreFilter,
				handleRemoveFilter,
				handleSelectFilter,
			}}
		>
			{children}
		</RoversContex.Provider>
	);
};
export default Provider;
