import { Camera, RoverPicture, RoverType } from 'global/rovers';

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

export interface RoversInitialValues {
	handlePictures: () => void;
	handleChangeFilter: (
		key: keyof RoverFilters,
		value: RoverFilters[keyof RoverFilters]
	) => void;
	roversData: RoversProviderData;
	roversFilters: RoverFilters;
}
