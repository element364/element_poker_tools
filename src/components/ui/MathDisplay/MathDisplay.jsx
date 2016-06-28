import React from 'react'
import Katex from 'katex'

class MathDisplay extends React.Component {
	render () {
	    var math = Katex.renderToString(this.props.data, { displayMode: true });
	    return (<span dangerouslySetInnerHTML={ {__html: math} } />);
	}
}

MathDisplay.propTypes = {
	data: React.PropTypes.string
}

MathDisplay.defaultProps = {
	data: ''
}

export default MathDisplay