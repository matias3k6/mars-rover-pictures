import { RoverPicture, RoverType } from 'global/types';

export interface RoversProviderProps {
	children: JSX.Element | JSX.Element[];
}

export interface RoversProviderData {
	pictures: RoverPicture[];
	error?: string;
}

export interface RoverFilters {
	rover: RoverType;
	earth_date: string;
	page: number;
	sol?: number;
	camera?: string;
}

export interface SavedRoverFilters extends RoverFilters {
	id: string;
}

export interface RoversInitialValues {
	handlePictures: () => void;
	handleChangeFilter: (
		key: keyof RoverFilters,
		value: RoverFilters[keyof RoverFilters]
	) => void;
	handleStoreFilter: (filter: RoverFilters) => void;
	handleRemoveFilter: (filterId: string) => void;
	handleSelectFilter: (filterId: string) => void;
	roversData: RoversProviderData;
	roversFilters: RoverFilters;
	savedFilters: SavedRoverFilters[];
}
