import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countNumber: 0,
			isCountEnd: false,
		};
		this.startCounter = this.startCounter.bind(this);
		this.updateCounter = this.updateCounter.bind(this);
		this.clearCounter = this.clearCounter.bind(this);
		this.restartCounter = this.restartCounter.bind(this);
	}

	componentDidMount() {
		this.startCounter();
	}

	startCounter() {
		this.countDownInterval = setInterval(this.updateCounter, 20);
	}

	updateCounter() {
		this.setState({countNumber: this.state.countNumber + 1});

		if (this.state.countNumber === 100) {
			setTimeout(this.clearCounter, 3000);
			// this.clearCounter();
			clearInterval(this.countDownInterval);
			// setTimeout(this.restartCounter, 2000);

		}
	}

	clearCounter() {
		this.setState({isCountEnd: true});
	}

	restartCounter() {
		this.setState({
			countNumber: 0,
			isCountEnd: false,
		});
		this.startCounter();
	}

	render() {
		const counterClass = this.state.isCountEnd ? `Counter end` : 'Counter' ;
		
		return (
				<span className={counterClass} >{this.state.countNumber}</span>
		);
	}
}
