import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import TopNavBar from '../../ui/TopNavBar/TopNavBar'
import HorizontalSelects from '../../ui/HorizontalSelects/HorizontalSelects'
import OpenPushCallRange from './OpenPushCallRange'
import OpenPushCallSpectreHA from './OpenPushCallSpectreHA'

const stackValues = [2,3,4,5,6,7,8,9,10,11,12]
const positionValues = ['SB']

class NashHA extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			stack: 2,
			position: 'SB'
		}
	}

	handleStackSelect2 (e) {
		const stack = parseInt(e)
		this.setState({ stack })
	}

	handlePositionSelect2 (e) {
		const position = e
		this.setState({ position })
	}

	render () {
		return (
			<div className="index">
				<TopNavBar />

				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12}>
							<label>Эффективный стек</label>
							<HorizontalSelects values={stackValues} onChange={this.handleStackSelect2.bind(this)} />
						</Col>
						<Col xs={12} md={12}>
							<label>Позиция</label>
							<HorizontalSelects values={positionValues} onChange={this.handlePositionSelect2.bind(this)} />
						</Col>
					</Row>
					<Row className="show-grid">
						<OpenPushCallRange openPushCallSpectre={OpenPushCallSpectreHA} stack={this.state.stack} position={this.state.position} ante={false} />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default NashHA