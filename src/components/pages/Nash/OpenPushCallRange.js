import React from 'react'

import Range from '../../ui/HandEquity/Range'

const anyTwoRange = '22+,A2+,K2+,Q2+,J2+,T2+,92+,82+,72+,62+,52+,42+,32'

export {anyTwoRange}

class OpenPushCallRange extends React.Component {
	render() {
		const anteKey = this.props.ante ? 'openPushRangesAnte' : 'openPushRangesNoAnte'
		let nashRange = this.props.openPushCallSpectre[anteKey][this.props.stack]

		let openPushRange = nashRange[this.props.position].openPushRange
		let callPushRanges = nashRange[this.props.position].callRange

		const callPushRangeNodes = Object.keys(callPushRanges).map((position) => {
			return (
				<div>
					<h3>Call range for {position} with {this.props.stack}BB</h3>
					<Range handsEnum={callPushRanges[position]} isEditable={false} />
				</div>
			)
		})

		return (
			<div>
			<h2>{this.props.position} open push range with {this.props.stack}BB</h2>
			<Range handsEnum={openPushRange} isEditable={false} />
				{callPushRangeNodes}
			</div>
		)
	}
}

OpenPushCallRange.propTypes = {
	openPushCallSpectre: React.PropTypes.object,

	stack: React.PropTypes.number,
	ante: React.PropTypes.bool,
	position: React.PropTypes.string
}

OpenPushCallRange.defaultProps = {
	openPushCallSpectre: {},

	stack: 2,
	ante: true,
	position: 'UTG'
}

export default OpenPushCallRange