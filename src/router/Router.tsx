import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => (
					<Route key={index} path={route.path}>
						{route.view()}
					</Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
