import React from 'react'

import Hand from './Hand'

const cards = ['', 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

const TopPocketsCards = ['AA', 'KK', 'QQ', 'AKs', 'AKo', 'AQs', 'JJ', 'KQs', 'AQo', 'TT', '99', 'AJs', '88', 'QJs', 'KQo', 'JTs', 'AJo', 'KJs', '77', '66', '55', '44',
						 '33', '22', 'ATs', 'KJo', 'QTs', 'KTs', 'QJo', 'A9s', 'ATo', 'QTo', 'JTo', 'KTo', 'T9s', 'A8s', 'K9s', 'A7s', 'Q9s', 'A5s', 'A6s',
						 'J9s', 'A4s', 'A9o', '98s', '87s', '76s', '65s', 'T9o', 'J9o', 'K9o', 'Q9o', 'K8s', 'K7s', 'A8o', 'A3s', 'A2s', 'T8s', '97s', '86s', '75s', '54s',
						 '64s', '43s', 'Q8s', '98o', '87o', '76o', '65o', '54o', 'J8s', 'T8o', '97o', '86o', '75o', '64o', 'K6s',
						 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o', '53s', '42s', '32s', 'Q7s', 'K5s', 'T7s', 'J7s', '85s', 'J8o', 'K8o', 'K4s',
						 '96s', 'Q6s', 'K3s', 'Q5s', 'K7o', 'Q8o', '95s', 'K2s', 'J6s', 'J5s', 'Q4s', 'T6s', 'J7o', 'K6o', 'Q3s', 'K5o', 'Q7o', 'Q2s', 'J4s',
						 '63s', '52s', 'T7o', 'K4o', 'T5s', 'Q6o', 'J3s', 'T4s', 'K3o', 'J2s', 'Q5o', 'T3s', 'K2o', '74s', 'T2s', 'Q4o', 'J6o',
						 '84s', '94s', 'T6o', '96o', '93s', 'Q3o', 'J5o', '92s', '73s', 'Q2o', 'J4o', '83s', '85o', '82s', 'T5o', '95o', 'J3o',
						 '62s', 'T4o', 'J2o', '72s', 'T3o', '74o', '84o', 'T2o', '94o', '53o', '93o',
						 '63o', '92o', '73o', '83o', '52o', '43o', '42o', '82o', '62o', '72o', '32o']

const AllHandsCount = 52 * 51 / 2

const PairPart = 6 / AllHandsCount * 100
const SuitedPart = 4 / AllHandsCount * 100
const OffSuitedPart = 12 / AllHandsCount * 100

const ij2card = (row, column) => {
	let suffix
	if (column == 0 || row == 0 || column == row) {
		suffix = ''
	} else if (column > row) {
		suffix = 's'
	} else if (column < row) {
		suffix = 'o'
	}

	const hand = [column, row].sort((a, b) => a - b).map(i => cards[i]).join('')

	return `${hand}${suffix}`
}

const isPair = (hand) => {
	return hand.length == 2 && hand.charAt(0) == hand.charAt(1)
}

const isSuited = (hand) => {
	return hand.length == 3 && hand.charAt(hand.length - 1) == 's'
}

const nextCard = (card) => {
	let position = cards.indexOf(card)
	return cards[position - 1]
}

class Range extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			hand: {}
		}

		for (let i = 1; i < cards.length; i++) {
			for (let j = 1; j < cards.length; j++) {
				let cards2 = ij2card(i, j)
				this.state.hand[cards2] = false;
			}
		}

		this.refreshSelectedHands(props)
	}

	refreshSelectedHands (props) {
		let newState = this.state.hand

		Object.keys(newState).forEach((k) => {
			newState[k] = false
		})

		if (props.percent) {
			let currentPercent = 0
			for (let i = 0; i < TopPocketsCards.length && currentPercent < props.percent; i++) {
				let currentCard = TopPocketsCards[i]
				this.state.hand[currentCard] = true

				if (isPair(currentCard)) {
					currentPercent += PairPart
				} else if (isSuited(currentCard)) {
					currentPercent += SuitedPart
				} else {
					currentPercent += OffSuitedPart
				}
			}
		}

		if (props.handsEnum) {
			const handsArray = props.handsEnum.split(',')

			handsArray.forEach((h) => {
				if (h[h.length - 1] === '+') {
					// With +
					if (h[0] === h[1]) {
						// Pair
						let secondCard = h[0]
						while (secondCard != '') {
							this.state.hand[`${secondCard}${secondCard}`] = true
							secondCard = nextCard(secondCard)
						}
					} else {
						// Not pair
						let firstCard = h[0],
							secondCard = h[1],
							suffix = h[2]

						while (secondCard != '') {
							if (suffix == 's' || suffix == 'o') {
								this.state.hand[`${firstCard}${secondCard}${suffix}`] = true
							} else {
								this.state.hand[`${firstCard}${secondCard}s`] = true
								this.state.hand[`${firstCard}${secondCard}o`] = true
							}
							
							secondCard = nextCard(secondCard)
						}
					}
				} else {
					// Hand
					let suffix = h[2]
					if (suffix == 's' || suffix == 'o') {
						this.state.hand[h] = true
					} else {
						this.state.hand[`${h}s`] = true
						this.state.hand[`${h}o`] = true
					}
				}
			})
		}

		if (props.addedHands) {
			props.addedHands.forEach((handCards) => {
				this.state.hand[handCards] = true
			})
		}

		if (props.removedHands) {
			props.removedHands.forEach((handCards) => {
				this.state.hand[handCards] = false
			})
		}
	}

	componentWillReceiveProps (newProps) {
		this.refreshSelectedHands(newProps)
	}

	handleHandSelect (cards) {
		let newState = this.state
		newState.hand[cards] = !newState.hand[cards]
		this.setState(newState)
	}

	render () {
		const {isEditable} = this.props

		const rows = cards.map((rowCard, row) => {
			const columns = cards.map((columnCard, column) => {
				const cards2 = ij2card(row, column)

				if (isEditable) {
					return (
						<Hand onSelect={this.handleHandSelect.bind(this)} cards={cards2} selected={this.state.hand[cards2]} />
					)
				}
				
				return (
					<Hand cards={cards2} selected={this.state.hand[cards2]} />
				)
			})

			return (
				<tr>
					{columns}
				</tr>
			)
		})

		return (
			<table>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}

Range.defaultProps = {
	isEditable: true
}

Range.propTypes = {
	isEditable: React.PropTypes.bool,

	percent: React.PropTypes.number,
	handsEnum: React.PropTypes.string,
	addedHands: React.PropTypes.arrayOf(React.PropTypes.string),
	removedHands:  React.PropTypes.arrayOf(React.PropTypes.string)
}

export default Range