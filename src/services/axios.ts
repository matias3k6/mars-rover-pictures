import axios from 'axios';
import config from 'config';

const { apiUrl, apiKey } = config;

const instance = axios.create({
	baseURL: apiUrl,
	params: {
		api_key: apiKey,
	},
});

export default instance;
