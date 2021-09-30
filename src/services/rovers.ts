import { AxiosResponse } from 'axios';
import config from 'config';
import { RoverFilters } from 'contexts/Rovers/types';
import { RoverPictures, RoverType } from 'global/rovers';
import instance from './axios';

const { rovers } = config;

const getRover = (roverName: RoverType): string => rovers[roverName];

export const getRooverPictures = (
	filters: RoverFilters
): Promise<AxiosResponse<RoverPictures>> => {
	const { rover, earth_date, sol, page, camera } = filters;
	const params = `&
		${sol ? `sol=${sol}` : `earth_date=${earth_date}`}
		${camera ? `&camera=${camera}` : ''}
	`;
	return instance.get(`${getRover(rover)}?page=${page}${params}`);
};
