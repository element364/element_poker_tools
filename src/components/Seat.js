import React from 'react'

import Card from './Card'
import Stack from './Stack'

export const classNames = (o) => {return Object.keys(o).filter(k => {return o[k]}).join(' ')}

class Seat extends React.Component {
	render () {
		const cardsNodes = this.props.cards.map((card) => {
			return <Card rank={card} />
		})

		const seatClasses = classNames({
			seat: true,
			focus: this.props.isFocused,
			folded: this.props.isFolded
		})

		let statusStyle = {}
		if (this.props.status == '') {
			statusStyle['display'] = 'none'
		}

		let seatContent = ''
		if (!this.props.isEmpty) {
			seatContent = (
				<div id={`player-${this.props.position}`} className="player">
					<div className="name-stack">
						<span className="name">{this.props.playerName}</span>
						<span className="chips">{this.props.stackSize}</span>
					</div>
					<div className="cards">
						{this.props.isFolded ? '': cardsNodes}
					</div>
					<div className="stack">
						<Stack size={this.props.cheapsOnTable} isDealer={this.props.isDealer} />
					</div>
					<div className="status" style={statusStyle}>{this.props.status}</div>
				</div>
			)
		}

		return (
			<div id={`seat${this.props.position}`} className={seatClasses}>
				{seatContent}
			</div>
		)
	}
}

Seat.propTypes = {
	isDealer: React.PropTypes.bool, 
	isEmpty: React.PropTypes.bool,
	isFocused: React.PropTypes.bool,
	isFolded: React.PropTypes.bool,
	playerName: React.PropTypes.string,
	stackSize: React.PropTypes.number,
	cheapsOnTable: React.PropTypes.number,
	cards: React.PropTypes.arrayOf(React.PropTypes.string),
	status: React.PropTypes.string
}

Seat.defaultProps = {
	isDealer: false,
	isEmpty: false,
	isFocused: false,
	isFolded: false,
	playerName: 'Hero',
	stackSize: 1000,
	cheapsOnTable: 0,
	cards: ['NA', 'NA'],
	status: ''
}

export default Seat