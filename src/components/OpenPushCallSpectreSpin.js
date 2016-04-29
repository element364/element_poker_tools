import {anyTwoRange} from './OpenPushCallRange'

let openPushRangesNoAnte = {}

// Эффективный стек 2BB без анте
openPushRangesNoAnte[2] = {
	'BTN': {
		openPushRange: '55+,A2s+,A4o+,K9s+,KTo+,QTs+,QJo,JTs', // 23%
		callRange: {
			'SB': '99+,AJs+,AQo+', // 5.4%
			'BB': '22+,A2+,K4s+,K9o+,Q7s+,QTo+,J7s+,JTo,T7s+,T9o,96s+,86s+,76s,65s' // 36%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J4o+,T3s+,T6o+,95s+,97o+,85s+,87o,75s+,65s', // 66%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2+,T2s+,T5o+,92s+,96o+,83s+,86o+,73s+,75o+,63s+,65o,52s+,54o,43s' // 79%
		}
	}
}
// =============================

// Эффективный стек 3BB без анте
openPushRangesNoAnte[3] = {
	'BTN': {
		openPushRange: '33+,A2+,K8s+,KTo+,Q8s+,QTo+,J9s+,T9s', // 28%
		callRange: {
			'SB': '88+,ATs+,AJo+', // 7.1%
			'BB': '22+,A2s+,A5o+,KTs+,KQo,QJs' // 20%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J3o+,T2s+,T6o+,92s+,96o+,83s+,85o+,73s+,75o+,63s+,65o,52s+,54o,43s', // 78%
		callRange: {
			'BB': '22+,A2+,K2+,Q2s+,Q4o+,J4s+,J7o+,T7s+,T8o+,97s+,87s' // 53%
		}
	}
}
// =============================

// Эффективный стек 4BB без анте
openPushRangesNoAnte[4] = {
	'BTN': {
		openPushRange: '44+,A2s+,A3o+,K5s+,KTo+,Q8s+,QTo+,J8s+,JTo,T9s', // 29%
		callRange: {
			'SB': '88+,ATs+,AJo+', // 7.1%
			'BB': '44+,A5s+,A8o+,KJs+' // 14%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T5o+,92s+,95o+,82s+,85o+,72s+,75o+,62s+,64o+,52s+,54o,42s+,32s', // 81%
		callRange: {
			'BB': '22+,A2+,K2s+,K4o+,Q5s+,Q8o+,J8s+,J9o+,T8s+' // 41%
		}
	}
}
// =============================

// Эффективный стек 5BB без анте
openPushRangesNoAnte[5] = {
	'BTN': {
		openPushRange: '44+,A2s+,A4o+,K6s+,KTo+,Q9s+,QTo+,J9s+,T9s', // 26%
		callRange: {
			'SB': '99+,ATs+,AJo+', // 6.6%
			'BB': '66+,A8s+,A9o+' // 10%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T5o+,92s+,95o+,82s+,85o+,72s+,75o+,62s+,64o+,52s+,54o,42s+,32s', // 81%
		callRange: {
			'BB': '33+,A2+,K4s+,K6o+,Q7s+,Q9o+,J9s+,JTo' // 35%
		}
	}
}
// =============================

// Эффективный стек 6BB без анте
openPushRangesNoAnte[6] = {
	'BTN': {
		openPushRange: '44+,A2s+,A3o+,K5s+,KTo+,Q9s+,QTo+,J9s+,T9s', // 27%
		callRange: {
			'SB': '99+,AJ+', // 6.3%
			'BB': '77+,AT+' // 8.4%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J4o+,T2s+,T5o+,92s+,95o+,82s+,85o+,72s+,75o+,62s+,64o+,52s+,54o,42s+,32s', // 80%
		callRange: {
			'BB': '44+,A2+,K5s+,K8o+,Q8s+,QTo+,JTs' // 30%
		}
	}
}
// =============================

// Эффективный стек 7BB без анте
openPushRangesNoAnte[7] = {
	'BTN': {
		openPushRange: '44+,A2s+,A3o+,K5s+,KTo+,Q9s+,QTo+,J9s+,T9s', // 27%
		callRange: {
			'SB': '99+,AJs+,AQo+', // 5.4%
			'BB': '88+,A9s+,ATo+' // 8.3%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,82s+,85o+,72s+,75o+,62s+,64o+,52s+,54o,42s+,32s', // 77%
		callRange: {
			'BB': '55+,A2s+,A4o+,K6s+,K9o+,Q9s+,QTo+,JTs' // 26%
		}
	}
}
// =============================

// Эффективный стек 8BB без анте
openPushRangesNoAnte[8] = {
	'BTN': {
		openPushRange: '55+,A2s+,A3o+,K5s+,KTo+,Q9s+,QJo,JTs', // 25%
		callRange: {
			'SB': 'TT+,AJs+,AQo+', // 5%
			'BB': '88+,ATs+,AJo+' // 7.1%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,82s+,85o+,72s+,75o+,62s+,64o+,52s+,54o,42s+,32s', // 77%
		callRange: {
			'BB': '55+,A2s+,A5o+,K8s+,K9o+,QTs+,QJo' // 23%
		}
	}
}
// =============================

// Эффективный стек 9BB без анте
openPushRangesNoAnte[9] = {
	'BTN': {
		openPushRange: '55+,A2s+,A4o+,K9s+,K6s,KTo+,QTs+,QJo,JTs', // 23%
		callRange: {
			'SB': '99+,AQ+', // 5.1%
			'BB': '99+,ATs+,AJo+' // 6.6%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,82s+,85o+,72s+,75o+,62s+,65o,52s+,54o,42s+,32s', // 76%
		callRange: {
			'BB': '55+,A3s+,A5o+,K8s+,KTo+,QTs+' // 21%
		}
	}
}
// =============================

// Эффективный стек 10BB без анте
openPushRangesNoAnte[10] = {
	'BTN': {
		openPushRange: '55+,A2s+,A4o+,K9s+,KJo+,QTs+,JTs', // 21%
		callRange: {
			'SB': 'TT+,AQs+,AKo', // 3.8%
			'BB': 'TT+,ATs+,AJo+' // 6.2%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,82s+,85o+,72s+,75o+,62s+,65o,52s+,54o,42s+,32s', // 76%
		callRange: {
			'BB': '55+,A4s+,A7o+,K9s+,KTo+,QTs+' // 18%
		}
	}
}
// ==============================

// Эффективный стек 11BB без анте
openPushRangesNoAnte[11] = {
	'BTN': {
		openPushRange: '55+,A2s+,A7o+,A5o,A4o,K6s+,KTo+,QTs+,JTs', // 22%
		callRange: {
			'SB': 'TT+,AQ+', // 4.7%
			'BB': '99+,AJ+' // 6.3%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J7o+,T2s+,T6o+,92s+,96o+,82s+,86o+,73s+,76o,62s+,65o,52s+,42s+,32s', // 71%
		callRange: {
			'BB': '66+,A5s+,A7o+,K9s+,KTo+' // 17%
		}
	}
}
// ==============================

// Эффективный стек 12BB без анте
openPushRangesNoAnte[12] = {
	'BTN': {
		openPushRange: '66+,A2s+,ATo+,A8o,A7o,A5o,K9s+,KTo+,QTs+,JTs', // 19%
		callRange: {
			'SB': 'TT+,AQs+,AKo', // 3.8%
			'BB': 'TT+,ATs+,AJo+' // 6.2%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J6o+,T2s+,T6o+,92s+,96o+,82s+,86o+,73s+,76o,62s+,65o,52s+,42s+,32s', // 72%
		callRange: {
			'BB': '66+,A5s+,A8o+,K9s+,KTo+' // 16%
		}
	}
}
// ==============================

const OpenPushCallSpectreSpin = {
	openPushRangesNoAnte
}

export default OpenPushCallSpectreSpin