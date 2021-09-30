import { RoverPicture } from 'global/types';
import { getRooverPictures } from 'services/rovers';
import { RoverFilters } from './types';

export const getPictures = async (
	filters: RoverFilters
): Promise<RoverPicture[] | Error> => {
	try {
		const pictures = await getRooverPictures(filters);
		return pictures.data.photos;
	} catch (error) {
		return error as Error;
	}
};
