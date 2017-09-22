/* global window */
import { Component, h } from 'inferno';
import { getParams, getRoute } from '../../../util/route';

function pad (n) {
	return (n < 10 ? '0' : '') + n;
}

function getDateUrl (date) {
	return [
		'#',
		'day',
		date.getUTCFullYear(),
		pad(date.getUTCMonth() + 1),
		pad(date.getUTCDate())
	].join('/');
}

function getDate ({ y, m, d }, offset = 0) {
	return new Date(Date.UTC(+y, +m - 1, +d + offset));
}

function formatDate (date) {
	return [
		date.getUTCFullYear(),
		date.getUTCMonth() + 1,
		date.getUTCDate()
	].join('/');
}

const LogoSvg = h('svg', {
	id: 'nav-logo',
	'xmlns': 'http://www.w3.org/2000/svg',
	'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	width: 100,
	height: 100,
	viewBox: '0 0 945 740'
}, [
	h('path', {
		class: 'test-logo-path',
		d: 'M 945 410 H 586.069 L 857.75 681.681 L 801.181 738.25 L 513 450.069 V 288.931 L 721.931 80 H 223.069 L 433 289.931 V 449.069 L 143.819 738.25 L 87.25 681.681 L 358.931 410 H 0 V 330 H 359.931 L 30.108 0 H 914.892 L 585.069 330 H 945 V 410 z'
	})
]);



export class AppView extends Component {
	constructor (props) {
		super(props);
		var date = new Date(Date.UTC(2017, 8, 21));
		this.state = this.getProps(window.location.hash || getDateUrl(date));
	}
	getProps (path) {
		return {
			path,
			params: getParams(getRoute(path), path)
		};
	}
	componentWillMount () {
		console.log('component will mount');
		window.onhashchange = () => {
			console.log('hash changed', window.location.hash);
			this.setState(this.getProps(window.location.hash));
		};
	}
	render (x, { path, params }) {
		console.log('AppView', path, params);
		// var prev = getDate(params, -1),
		// 	next = getDate(params, 1);
		var dates = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(o => getDate(params, o));
		return h('div.app-container', [
			h('div.nav-container', [
				h('ul.date-nav.list-unstyled', [
					h('li', [
						h('a', {
							href: '#'
						}, [
							LogoSvg
						])
					])
				].concat(dates.map(d => {
					return h('li', [
						h('a.date-link', {
							href: getDateUrl(d)
						}, [
							d.getUTCDate()
						])
					]);
				})))
			]),
			h('div.main-content', [
				h(getRoute(path).component, params)
			])
		]);
	}
}
