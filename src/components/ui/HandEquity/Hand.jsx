import React from 'react'

import {classNames} from '../Table/Seat'

class Hand extends React.Component {
	onMouseOver (e) {
		e.preventDefault()
		return false;
	}

	onMouseDown (e) {
		e.preventDefault()

		this.props.onSelect.call(this, this.props.cards)

		return false;
	}

	render () {
		const hand = this.props.cards
		let handNode = hand.length == 1 ? (<strong>{hand}</strong>) : (<span>{hand}</span>)

		const classes = classNames({
			'range-cell': true,
			'range-cell-selected': this.props.selected
		})

		return (
			<td onMouseDown={this.onMouseDown.bind(this)} onMouseOver={this.onMouseOver} className={classes}>
				{handNode}
			</td>
		)
	}
}

Hand.defaultProps = {
	cards: '',
	selected: false,
	onSelect: function () {

	}
}

export default Hand