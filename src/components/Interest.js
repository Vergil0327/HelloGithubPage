import React, { Component } from 'react';
import './Interest.css';

export default class Interest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showLuv: false,
			showMusic: false,
			showCoding: false,
			showReading: false,
		}

		this.switchAnime = this.switchAnime.bind(this);
		this.startAnime = this.startAnime.bind(this);
	}

	componentDidMount() {
		// this.switchAnime('showLuv', 2000, true);
		// this.switchAnime('showLuv', 6000, false);
		// this.switchAnime('showMusic', 3450, true);
		// this.switchAnime('showMusic', 5450, false);
		// this.switchAnime('showCoding', 3700, true);
		// this.switchAnime('showCoding', 5700, false);
		// this.switchAnime('showReading', 4000, true);
		// this.switchAnime('showReading', 6000, false);
		this.startAnime(7500);
	}

	switchAnime(stateName, time, shouldStart) {
		const newState = {};
		newState[stateName] = shouldStart;

		setTimeout(() => {
			this.setState(newState);
		} , time)
	}

	startAnime(time) {
		this.switchAnime('showLuv', time, true);
		this.switchAnime('showLuv', `${time + 4000}`, false);
		this.switchAnime('showMusic', `${time + 1450}`, true);
		this.switchAnime('showMusic', `${time + 3450}`, false);
		this.switchAnime('showCoding', `${time + 1700}`, true);
		this.switchAnime('showCoding', `${time + 3700}`, false);
		this.switchAnime('showReading', `${time + 2000}`, true);
		this.switchAnime('showReading', `${time + 4000}`, false);
	}

	render() {
		const luvClass = this.state.showLuv ? `L active` : 'hide';
		const musicClass = this.state.showMusic ? `M active` : 'hide';
		const codingClass = this.state.showCoding ? `C active` : 'hide';
		const readingClass = this.state.showReading ? `R active` : 'hide';

		return(
			<div className='Interest'>
				<span className={luvClass}>Loving</span>
				<div className='Box'>
					<span className={musicClass}>Music</span>
					<span className={codingClass}>Coding</span>
					<span className={readingClass}>Reading</span>
				</div>
			</div>
		);
	}
}