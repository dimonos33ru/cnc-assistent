import React from 'react';
import './App.css';
import MainLayout from 'layout/MainLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes';

function App() {
	const routesComponent = routes.map((route) => {
		const { url, component, exact } = route;
		return <Route key={url} path={url} component={component} exact={exact} />;
	});

	return (
		<Router>
			<MainLayout>
				<Switch>{routesComponent}</Switch>
			</MainLayout>
		</Router>
	);
}

export default App;
