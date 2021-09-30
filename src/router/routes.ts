import { HomeView } from 'views/Home';
import { AppRoute } from './types';

export const routes: AppRoute[] = [
	{
		label: 'Home',
		path: '/',
		View: HomeView,
	},
];
