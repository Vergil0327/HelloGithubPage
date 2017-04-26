import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Counter from '../../components/Counter/Counter';
import Name from '../../components/Name/Name';
import Interest from '../../components/Interest/Interest';
import HelloWorld from '../../components/Hello/Hello';

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