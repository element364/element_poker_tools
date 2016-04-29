import React from 'react'
import Card from './Card'

class CommunityCards extends React.Component {
	render () {
		const cardsNodes = this.props.cards.map((card, idx) => {
			const leftPx = `${ (idx + 1) * 45 }px`
			return <Card rank={card} left={leftPx} />
		})

		return (
			<div id="community-cards">
				{cardsNodes}
			</div>
		)
	}
}

CommunityCards.PropTypes = {
	cards: React.PropTypes.arrayOf(React.PropTypes.string)
}

CommunityCards.defaultProps = {
	cards: ['3s', '9c', '10c', '2s', 'Kd']
}

export default CommunityCards