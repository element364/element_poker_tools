require('normalize.css')
require('styles/App.css')

import React from 'react'

import TopNavBar from './ui/TopNavBar/TopNavBar'
import Table from './ui/Table/Table'
import Range from './ui/HandEquity/Range'

import {Tabs, Tab, Panel} from 'react-bootstrap'

class AppComponent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			key: 1
		}
	}

	handleSelect(key) {
    	this.setState({key});
	}

	render() {
		return (
			<div className="index">
				<TopNavBar />

				<Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}>
					<Tab eventKey={1} title="Tab 1">
					    <Panel header="Push or fold?">
							<Table communityStackSize={100500} communityCards={['Ac', 'Ah']}></Table>
		    			</Panel>
					</Tab>
					<Tab eventKey={2} title="Tab 2">
					    <Panel header="Fold or fold?">
							<Table communityStackSize={228}></Table>
		    			</Panel>
					</Tab>
					<Tab eventKey={3} title="Tab 3">
						<Table></Table>
					</Tab>
					<Tab eventKey={4} title="Range">
						<Range />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

AppComponent.defaultProps = {
}

export default AppComponent
