import { RoverType } from 'global/types';
import { formatDate } from 'utils/formatDate';
import { RoversInitialValues } from './types';

export const roversDefaultValues: RoversInitialValues = {
	handlePictures: () => {
		return;
	},
	handleChangeFilter: () => {
		return;
	},
	handleStoreFilter: () => {
		return;
	},
	handleRemoveFilter: () => {
		return;
	},
	handleSelectFilter: () => {
		return;
	},
	savedFilters: [],
	roversData: {
		pictures: [],
	},
	roversFilters: {
		rover: RoverType.Curiosity,
		earth_date: formatDate(new Date()),
		page: 1,
	},
};
