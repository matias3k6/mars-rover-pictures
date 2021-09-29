import { RoverPicture, RoverType } from 'global/rovers';

export interface RoversProviderProps {
	children: JSX.Element | JSX.Element[];
}

export interface RoversProviderData {
	pictures: RoverPicture[];
	error?: string;
}

export interface RoverFilters {
	rover: RoverType;
	currentPage: number;
	earth_date: string;
	sol?: number;
}

export interface RoversInitialValues {
	handlePictures: () => void;
	handleChangePage: (newPage: number) => void;
	handleChangeFilter: (key: keyof RoverFilters, value: RoverFilters[keyof RoverFilters]) => void;
	roversData: RoversProviderData;
	roversFilters: RoverFilters;
}
