/* global fetch */

import Promise from 'bluebird';

export class DayApi {
	static getData ({ y, m, d }) {
		console.log('getting data');
		return Promise
			.cast(fetch(`/data/${ y }/${ m }/${ d }/date.json`))
			.call('json')
			.catch(err => ({
				title: 'No Data',
				img: []
			}));
	}
}
