import { RoverType } from 'global/rovers';
import { formatDateToISOString } from 'utils/formatDate';
import { RoversInitialValues } from './types';

export const roversDefaultValues: RoversInitialValues = {
	handlePictures: () => {
		return;
	},
	handleChangeFilter: () => {
		return;
	},
	roversData: {
		pictures: [],
	},
	roversFilters: {
		rover: RoverType.Curiosity,
		earth_date: formatDateToISOString(new Date()),
		page: 1,
	},
};
