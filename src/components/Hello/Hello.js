import React, { Component } from 'react';
import './Hello.css';

export default class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			didShow: false,
			didUpsidedown: false,
			didTranslate: false,
			isHide: false,
		};
		this.showText = this.showText.bind(this);
		this.upsidedownText = this.upsidedownText.bind(this);
		this.translateText = this.translateText.bind(this);
		this.hideText = this.hideText.bind(this);
		this.startAnime = this.startAnime.bind(this);
		this.resetAnime = this.resetAnime.bind(this);
	}

	componentDidMount() {
		this.startAnime();
	}

	showText() {
		this.setState({didShow: true});
	}

	upsidedownText() {
		this.setState({didUpsidedown: true});
	}

	translateText() {
		this.setState({didTranslate: true});
	}

	hideText() {
		this.setState({isHide: true});
	}

	startAnime() {
		setTimeout(this.showText, 2400);
		setTimeout(this.upsidedownText, 3400);
		setTimeout(this.translateText, 5200);
		setTimeout(this.hideText, 5500);

		setTimeout(this.resetAnime, 11900);
	}

	resetAnime() {
		this.setState({
			disShow: false,
			didUpsidedown: false,
			didTranslate: false,
			isHide: false
		});
		this.startAnime();
	}

	render() {
		const helloWorld = ['H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D'];
		const showClass = this.state.didShow ? 'show' : '';
		const upsidedownClass = this.state.didUpsidedown ? 'upsideDown' : '';
		const translateClass = this.state.didTranslate ? 'translate' : '';
		const hideClass = this.state.isHide ? 'hide' : '';

		return (
			<div className='Hello'>
				{helloWorld.map((char, i) => {
					return(
						<span key={i} className={`Char${i} ${showClass} ${upsidedownClass} ${translateClass} ${hideClass} `}>{char}</span>
					);
				})}
			</div>
		);
	}
}
