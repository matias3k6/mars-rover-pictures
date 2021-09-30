import { RoverPicture } from 'global/types';
import { getRooverPictures } from 'services/rovers';
import storage from 'services/storage';
import { SavedRoverFilters } from '.';
import { RoverFilters } from './types';

const { read, store } = storage();
const storeFilterKeyName = 'filters';

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

export const storeFilter = (filter: RoverFilters): void => {
	const uniqueId = new Date().valueOf();
	const filters = [{ ...filter, id: uniqueId.toString() }];
	const storedFilters = read(storeFilterKeyName);
	if (!(storedFilters instanceof Error)) {
		filters.push(...JSON.parse(storedFilters));
	}
	store(storeFilterKeyName, JSON.stringify(filters));
};

export const readFilters = (): SavedRoverFilters[] => {
	const storedFilters = read(storeFilterKeyName);
	if (!(storedFilters instanceof Error)) {
		return JSON.parse(storedFilters);
	} else return [];
};

export const removeFilter = (filterId: string): void => {
	const storedFilters = read(storeFilterKeyName);
	if (!(storedFilters instanceof Error)) {
		const parsed = JSON.parse(storedFilters);
		const filtered = parsed.filter(
			(item: SavedRoverFilters) => item.id !== filterId
		);
		store(storeFilterKeyName, JSON.stringify(filtered));
	}
};
