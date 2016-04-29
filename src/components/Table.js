import React from 'react'

import CommunityCards from './CommunityCards'
import CommunityStack from './CommunityStack'
import Stack from './Stack'
import Seat from './Seat'
import Card from './Card'

class Table extends React.Component {
	render () {
		console.log(this.props)

		const ololo = [
			{
				playerName: 'Player1',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player2',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player3',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player4',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player5',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player6',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player7',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player8',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player9',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}, {
				playerName: 'Player10',
				isEmpty: false,
				isFolded: false,
				isDealer: false,
				isFocused: false,
				status: '',
				cards: ['Ac', 'Ah'],
				stackSize: 100500,
				cheapsOnTable: 0
			}
		]

		const seatNodes = ololo.map((seat, idx) => {
			return <Seat position={idx + 1} playerName={seat.playerName} isEmpty={seat.isEmpty} isFolded={seat.isFolded} status={seat.status}
					cards={seat.cards} isFocused={seat.isFocused} stackSize={seat.stackSize} cheapsOnTable={seat.cheapsOnTable} isDealer={seat.isDealer} />
		})

		//*
		return (
			<div id="table">
				<div id="canvas-table"></div>
				<CommunityCards cards={this.props.communityCards} />
				<CommunityStack>
					<Stack size={this.props.communityStackSize} />
				</CommunityStack>
				<div id="seats">
					{seatNodes}
				</div>
			</div>
		)
		//*/
		/*
		return (
			<div id="table">
				<div id="canvas-table"></div>
				<CommunityCards cards={['Kc', 'Kd', '2h', '3c']} />
				<CommunityStack>
					<Stack size="22922" />
				</CommunityStack>
				<div id="seats">
					<div id="dealer"></div>
				</div>
			</div>
		)
		//*/
	}
}

Table.propsTypes = {
	communityCards: React.PropTypes.arrayOf(React.PropTypes.string),
	communityStackSize: React.PropTypes.number,
	seats: React.PropTypes.array
}

Table.defaultProps = {
	communityStackSize: 123,
	communityCards: ['Kc', 'Kd', '2h', '3c'],
	seats: []
}

export default Table