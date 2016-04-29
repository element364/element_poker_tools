import React from 'react'

import {classNames} from './Seat'

class HorizontalSelects extends React.Component {
	constructor (props) {
		super(props)

		let defaultSelectedValue = ''
		if (this.props.values.length > 0) {
			defaultSelectedValue = this.props.values[0]
		}
		
		this.state = {
			selectedValue: defaultSelectedValue
		}
	}

	handleSelect (e) {
		e.preventDefault()

		const newValue = e.target.textContent
		this.setState({ selectedValue: newValue })
		this.props.onChange(newValue)
	}

	render () {
		const columnButtons = this.props.values.map((v) => {
			const classes = classNames({
				'range-cell': true,
				'range-cell-selected': this.state.selectedValue == v
			})

			return (
				<td onMouseDown={this.handleSelect.bind(this)} className={classes} style={{height: '50px', width: '50px'}}>
					{v}
				</td>
			)
		})

		return (
			<table>
				<tbody>
					<tr>
						{columnButtons}
					</tr>
				</tbody>
			</table>
		)
	}
}

HorizontalSelects.propTypes = {
	values: React.PropTypes.array,
	onChange: React.PropTypes.func
}

HorizontalSelects.defaultProps = {
	values: []
}

export default HorizontalSelects