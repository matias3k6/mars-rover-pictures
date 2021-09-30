import { RoverType } from 'global/rovers';
import { formatDateToISOString } from 'utils/formatDate';
import { RoversInitialValues } from './types';

/* Why yesterday? 
Using the default date to get the photos of the current day
normally did not get results, I opted to use yesterday by default,
combined with Curiosity as Rover by default to get the most recent results.*/

const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

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
		earth_date: formatDateToISOString(yesterday),
		page: 1,
	},
};
