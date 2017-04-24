import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Counter from './Counter';
import Name from './Name';
import Interest from './Interest';
import HelloWorld from './Hello';

class Intro extends Component {

	render() {
		const { width, widthUnit, height, heightUnit } = this.props;

		const config = {
			width: width + widthUnit,
			height: height + heightUnit,
			position: 'relative',
		}

		return (
			<div style={config} >
				<Counter />
				<HelloWorld />
				<Name />
				<Interest />
			</div>
		);
	}
}

Intro.propTypes = {
	width: Proptypes.number,
	widthUnit: Proptypes.string,
	height: Proptypes.number,
	heightUnit: Proptypes.string
};

export default Intro;