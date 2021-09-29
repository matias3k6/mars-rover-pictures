import React, { useState, useEffect } from 'react';
import { getPictures } from './actions';
import RoversContex from './context';
import { roversDefaultValues } from './defaultValues';
import { RoverFilters, RoversProviderData, RoversProviderProps } from './types';

const RoversProvider = ({ children }: RoversProviderProps): JSX.Element => {
	const [roversData, setRoversData] = useState<RoversProviderData>(
		roversDefaultValues.roversData
	);
	const [roversFilters, setRoversFilters] = useState<RoverFilters>(
		roversDefaultValues.roversFilters
	);

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

	const handleChangePage = (newPage: number) => {
		updateRoversFilters('currentPage', newPage);
	};

	useEffect(() => {
		handlePictures();
	}, [roversFilters]);

	return (
		<RoversContex.Provider
			value={{
				roversData,
				roversFilters,
				handleChangePage,
				handleChangeFilter: updateRoversFilters,
				handlePictures,
			}}
		>
			{children}
		</RoversContex.Provider>
	);
};
export default RoversProvider;
