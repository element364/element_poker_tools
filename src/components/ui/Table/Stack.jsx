import React from 'react'

// Polyfills
if ( ![].fill)  {
  Array.prototype.fill = function( value ) {

    var O = Object( this );
    var len = parseInt( O.length, 10 );
    var start = arguments[1];
    var relativeStart = parseInt( start, 10 ) || 0;
    var k = relativeStart < 0
            ? Math.max( len + relativeStart, 0)
            : Math.min( relativeStart, len );
    var end = arguments[2];
    var relativeEnd = end === undefined
                      ? len
                      : ( parseInt( end)  || 0) ;
    var final = relativeEnd < 0
                ? Math.max( len + relativeEnd, 0 )
                : Math.min( relativeEnd, len );

    for (; k < final; k++) {
        O[k] = value;
    }

    return O;
  };
}

class Stack extends React.Component {
	render() {
		const cheapAmounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]

		let rest = this.props.size

		let cheapsCount = cheapAmounts.map(amount => {
   			var res = Math.floor(rest / amount)
   			rest = rest % amount
   			return res
		});

		if (this.props.isDealer) {
			cheapsCount.unshift('D')
		}

		const columns = cheapsCount.map((a, idx) => {
			if (a == 'D') {
				return (
					<div className="column dealer">
						<div className="dealer fish d">D</div>
					</div>
				)
			} else if (a > 0) {
				const cheaps = Array(a).fill(0).map(_ => {
					return <div className={`fish v${cheapAmounts[idx]}`}></div>
				})

				return (
					<div className="column">
						{cheaps}
					</div>
				)
			}
		})

		return (
			<div className="columns">
				{columns}
				{this.props.size > 0 ? <div className="value">{this.props.size}$</div> : ''}
			</div>
		)
	}
}

Stack.PropTypes = {
	isDealer: React.PropTypes.bool,
	size: React.PropTypes.number
}

Stack.defaultProps = {
	isDealer: false,
	size: 0
}

export default Stack