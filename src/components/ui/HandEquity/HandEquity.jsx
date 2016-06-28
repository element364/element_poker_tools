import React from 'react'
import {Input, Row, Col} from 'react-bootstrap'

import TopNavBar from '../TopNavBar/TopNavBar'
import Range from './Range'

class HandEquity extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			equityPercent: 25,

			handsEnum: '',

			addedHandsStr: '',
			addedHands: [],

			removedHandsStr: '',
			removedHands: []
		}
	}

	handleEquityPercentChange (e) {
		const newEquityPercent = parseFloat( e.target.value )

		this.setState({
			equityPercent: newEquityPercent
		})
	}

	handleAddedHandsChange (e) {
		const newAddedHandsStr = e.target.value

		let newState = { addedHandsStr: newAddedHandsStr }

		const newAddedCards = newAddedHandsStr.split(' ')
		newState['addedHands'] = newAddedCards

		this.setState(newState)
	}

	handleRemovedHandsChange (e) {
		const newRemovedHandsStr = e.target.value

		let newState = { removedHandsStr: newRemovedHandsStr }
		newState['removedHands'] = newRemovedHandsStr.split(' ')

		this.setState(newState)
	}

	handleHandsEnumChange (e) {
		const newhandsEnum = e.target.value

		this.setState({ handsEnum: newhandsEnum })
	}

	render () {
		return (
			<div className="index">
				<TopNavBar />
				<div className="container">
				<Row>
					<Range percent={this.state.equityPercent} handsEnum={this.state.handsEnum} addedHands={this.state.addedHands} removedHands={this.state.removedHands} isEditable={true} />
				</Row>
				<Row>
					<Col md={5}>
						<span>Percent</span>
						<Input type="text" addonAfter="%" onChange={this.handleEquityPercentChange.bind(this)} value={this.state.equityPercent} />
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<span>handsEnum</span>
						<Input type="text" onChange={this.handleHandsEnumChange.bind(this)} value={this.state.handsEnum} />
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<span>Added cards</span>
						<Input type="text" onChange={this.handleAddedHandsChange.bind(this)} value={this.state.addedHandsStr} />
					</Col>
					<Col md={5}>
						<span>Added cards array</span>
						<Input type="text" value={'[' + this.state.addedHands.map( (h) => `'${h}'` ).join(', ') + ']'} disabled />
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<span>Removed cards</span>
						<Input type="text" onChange={this.handleRemovedHandsChange.bind(this)} value={this.state.removedHandsStr} />
					</Col>
					<Col md={5}>
						<span>Removed cards array</span>
						<Input type="text" value={'[' + this.state.removedHands.map( (h) => `'${h}'` ).join(', ') + ']'} disabled />
					</Col>
				</Row>
				</div>
			</div>
		)
	}
}

export default HandEquity