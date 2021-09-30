import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				{routes.map(({path, View}, index) => (
					<Route key={index} path={path}>
						<View />
					</Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
