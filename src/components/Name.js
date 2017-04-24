import React, { Component } from 'react';
import './Name.css';

export default class Name extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showHi: false,
			showI: false,
			showVergil: false
		}

		this.show = this.show.bind(this)
		this.startAnime = this.startAnime.bind(this);
		this.restartAnime = this.restartAnime.bind(this);
	}

	componentDidMount() {
		this.startAnime(6000);
		this.animeInterval = setInterval(this.restartAnime, 11900);
	}

	show() {
		this.setState({
			showHi: true,
			showI: true,
			showVergil: true
		})
	}

	startAnime(time) {
		setTimeout(this.show, time);
	}

	restartAnime() {
		this.setState({
			showHi: false,
			showI: false,
			showVergil: false
		})
		this.startAnime(6000);
	}

	render(){
		const classH = this.state.showHi ? `H active` : 'H';
		const classI = this.state.showI ? `I active` : 'I';
		const classV = this.state.showVergil ? `V active` : 'V';

		return(
			<div className='Name'>
				<span className={classH} >Hi</span>
				<span className={classI} >I'm</span>
				<span className={classV} >Vergil</span>
			</div>
		);
	}
}