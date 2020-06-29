import Home from 'page/Home';
import Page404 from 'page/Page404';
import AngleCalculation from 'page/AngleCalculation';
import ToleranceTable from 'page/ToleranceTable';

const routes = [
	{
		name: 'home',
		url: '/',
		component: Home,
		exact: true,
	},
	{
		name: 'angle',
		url: '/angle',
		component: AngleCalculation,
		exact: true,
	},
	{
		name: 'table',
		url: '/table',
		component: ToleranceTable,
		exact: true,
	},
	{
		url: '**',
		component: Page404,
	},
];

const routesMap = {};
routes.forEach((route) => {
	if (route.hasOwnProperty('name')) {
		routesMap[route.name] = route.url;
	}
});

export default routes;
export { routesMap };
