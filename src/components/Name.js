import React, { Component } from 'react';
import './Name.css';

export default class Name extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showH: false,
			showI: false,
			showV: false,
		}
		this.showHi = this.showHi.bind(this);
		this.showI = this.showI.bind(this);
		this.showV = this.showV.bind(this);
	}

	componentDidMount() {
		setTimeout(this.showHi, 6000);
		setTimeout(this.showI, 6000);
		setTimeout(this.showV, 6000);
	}

	showHi() {
		this.setState({showH: true});
	}

	showI() {
		this.setState({showI: true});
	}

	showV() {
		this.setState({showV: true});
	}

	render(){
		const classH = this.state.showH ? `H active` : 'H';
		const classI = this.state.showI ? `I active` : 'I';
		const classV = this.state.showV ? `V active` : 'V';

		return(
			<div className='Name'>
				<span className={classH} >Hi</span>
				<span className={classI} >I'm</span>
				<span className={classV} >Vergil</span>
			</div>
		);
	}
}