import { Component, h } from 'inferno';

import { DayApi } from '../service/day.api';


export class DayView extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			data: {
				img: []
			}
		};
	}
	load (date) {
		this.dataPath = `/data/${ date.y }/${ date.m }/${ date.d }`;
		return DayApi
			.getData(date)
			.then(data => this.setState({ data }));
	}
	componentDidMount () {
		this.load(this.props);
	}
	componentWillReceiveProps (nextProps) {
		this.load(nextProps);
	}
	render (props, { data }) {
		console.log(data.img);
		return h('div', [
			h('h4.img-title', [data.title]),
			h('div.img-slider', [
				data.img.map(img => h('div.img-content', [
					h('img', {
						class: 'test-img',
						src: img.link || `${ this.dataPath}/img/${ img.file }`
					}),
					h('div.img-footer', [
						h('div.img-caption', [img.caption])
					])
				]))
			].reduce((o, a) => o.concat(a)))
		]);
	}
}
