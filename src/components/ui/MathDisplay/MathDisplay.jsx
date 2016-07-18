import React, { Component, PropTypes as pt } from 'react';
import Katex from 'katex';

class MathDisplay extends Component {
    static propTypes = {
        data: pt.string,
        children: pt.string
    };

    static defaultProps = {
        data: '',
        children: ''
    };

	render() {
        const data = this.props.data || this.props.children;
        console.log(data.toString());

	    var math = Katex.renderToString(data, { displayMode: true });
	    return (<span dangerouslySetInnerHTML={ {__html: math} } />);
	}
}

export default MathDisplay;