import { addRoute } from '../../util/route';

import { DayView } from './component/day.view';


addRoute({
	label: 'Day',
	noNav: true,
	path: '#/day/:y/:m/:d',
	component: DayView
});

