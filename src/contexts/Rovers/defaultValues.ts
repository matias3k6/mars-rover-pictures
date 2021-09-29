import { RoverType } from 'global/rovers';
import { formatDateToISOString } from 'utils/formatDate';
import { RoversInitialValues } from './types';

export const roversDefaultValues: RoversInitialValues = {
	handlePictures: () => {
		return;
	},
	handleChangePage: () => {
		return;
	},
	handleChangeFilter: () => {
		return;
	},
	roversData: {
		pictures: [],
		isLoading: false,
	},
	roversFilters: {
		rover: RoverType.Curiosity,
		currentPage: 1,
		earth_date: formatDateToISOString(new Date()),
	},
};
