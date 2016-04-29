import React from 'react'

class Card extends React.Component {
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
	rank: React.PropTypes.string,
	left: React.PropTypes.string,
	top: React.PropTypes.string
}

Card.defaultProps = {
	rank: 'NA',
	left: '0px',
	top: '0px'
}

export default Card