import React from 'react'

class CommunityStack extends React.Component {
	render () {
		return (
			<div id="community-stack">
				{this.props.children}
			</div>
		)
	}
}

export default CommunityStack