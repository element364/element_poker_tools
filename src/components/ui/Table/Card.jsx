import React, { Component, PropTypes as pt } from 'react';

class Card extends Component {
	render () {
		const cardRank = `c${ this.props.rank.toUpperCase() }`

		return (
			<div style={{top: this.props.top, left: this.props.left}}>
				<div className={`card ${cardRank}`}></div>
			</div>
		)
	}
}

Card.propTypes = {
	rank: pt.string,
	left: pt.string,
	top: pt.string
};

Card.defaultProps = {
	rank: 'NA',
	left: '0px',
	top: '0px'
};

export default Card;