import {anyTwoRange} from './OpenPushCallRange'

let openPushRangesAnte = {}

// Эффективный стек nBB с анте
openPushRangesAnte[2] = {
	'UTG': {
		openPushRange: '',
		callRange: {
			'UTG+1': '',
			'MP1': '',
			'MP2': '',
			'MP3': '',
			'CO': '',
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'UTG+1': {
		openPushRange: '',
		callRange: {
			'MP1': '',
			'MP2': '',
			'MP3': '',
			'CO': '',
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'MP1': {
		openPushRange: '',
		callRange: {
			'MP2': '',
			'MP3': '',
			'CO': '',
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'MP2': {
		openPushRange: '',
		callRange: {
			'MP3': '',
			'CO': '',
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'MP3': {
		openPushRange: '',
		callRange: {
			'CO': '',
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'CO': {
		openPushRange: '',
		callRange: {
			'BTN': '',
			'SB': '',
			'BB': ''
		}
	},
	'BTN': {
		openPushRange: '',
		callRange: {
			'SB': '',
			'BB': ''
		}
	},
	'SB': {
		openPushRange: '',
		callRange: {
			'BB': ''
		}
	}
}
// ===========================

// Эффективный стек 2BB с анте
openPushRangesAnte[2] = {
	'UTG': {
		openPushRange: '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,QJo+,J9s+,T9s', // 25%
		callRange: {
			'UTG+1': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'MP1': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', //19%
			'MP2': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', //19%
			'MP3': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', //19%
			'CO': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', //19%
			'BTN': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', //19%
			'SB': '22+,A2+,K2+,Q2+,J2s+,J5o+,T2s+,T6o+,94s+,97o+,84s+,87o,74s+,76o,64s+,53s+', // 68%
			'BB': anyTwoRange // 100%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 25%
		callRange: {
			'MP1': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'MP2': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'MP3': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'CO': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'BTN': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'SB': '22+,A2+,K2+,Q2+,J2s+,J5o+,T2s+,T6o+,94s+,97o+,84s+,87o,74s+,76o,64s+,53s+', // 68%
			'BB': anyTwoRange // 100%
		}
	},
	'MP1': {
		openPushRange: '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,97s+,87s,76s', // 33%
		callRange: {
			'MP2': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'MP3': '44+,A2s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'CO': '33+,A2s+,A3o+,K7s+,K9o+,Q9s+,QTo+,JTs', // 27%
			'BTN': '22+,A2+,K5s+,K8o+,Q8s+,QTo+,J9s+,JTo', // 32%
			'SB': '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T6o+,93s+,96o+,84s+,86o+,74s+,76o,63s+,53s+,43s', // 72%
			'BB': anyTwoRange // 100%
		}
	},
	'MP2': {
		openPushRange: '22+,A2+,K4s+,K9o+,Q8s+,QTo+,J8s+,JTo,T7s+,T9o,97s+,86s+,76s,65s', // 35%
		callRange: {
			'MP3': '44+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo', // 22%
			'CO': '22+,A2+,K5s+,K8o+,Q8s+,QTo+,J9s+,JTo', // 32%
			'BTN': '22+,A2+,K4s+,K7o+,Q8s+,Q9o+,J9s+,JTo,T9s', // 34%
			'SB': '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T6o+,93s+,96o+,84s+,86o+,74s+,76o,63s+,53s+,43s', // 72%
			'BB': anyTwoRange // 100%
		}
	},
	'MP3': {
		openPushRange: '33+,A2+,K3s+,K8o+,Q6s+,Q9o+,J8s+,J9o+,T8s+,98s', // 36%
		callRange: {
			'CO': '44+,A2s+,A7o+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', // 25%
			'BTN': '33+,A2s+,A5o+,K5s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', // 29%
			'SB': '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J5o+,T2s+,T6o+,93s+,96o+,84s+,86o+,73s+,75o+,63s+,65o,52s+,43s', // 72%
			'BB': anyTwoRange // 100%
		}
	},
	'CO': {
		openPushRange: '33+,A2+,K2s+,K6o+,Q5s+,Q8o+,J7s+,J9o+,T7s+,T9o,97s+', // 41%
		callRange: {
			'BTN': '33+,A2s+,A3o+,K5s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', // 31%
			'SB': '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,84s+,86o+,73s+,75o+,63s+,65o,52s+,54o,43s', // 73%
			'BB': anyTwoRange // 100%
		}
	},
	'BTN': {
		openPushRange: '33+,A2+,K2s+,K3o+,Q2s+,Q6o+,J5s+,J8o+,T6s+,T8o+,97s+,87s', // 49%
		callRange: {
			'SB': '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T6o+,92s+,96o+,83s+,86o+,73s+,75o+,63s+,65o,52s+,54o,42s+', // 76%
			'BB': anyTwoRange // 100%
		}
	},
	'SB': {
		openPushRange: anyTwoRange, // 100%
		callRange: {
			'BB': anyTwoRange // 100%
		}
	}
}
// ===========================

// Эффективный стек 3BB с анте
openPushRangesAnte[3] = {
	'UTG': {
		openPushRange: '22+,A2s+,A5o+,K9s+,KJo+,QTs+,JTs+', // 22%
		callRange: {
			'UTG+1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,ATo+,KQs', // 9.8%
			'CO': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'BTN': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'SB': '22+,A2+,K3s+,K7o+,Q7s+,Q9o+,J8s+,JTo,T9s', // 35%
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92+,82s+,83o+,72s+,73o+,62s+,63o+,52+,42s+,43o,32s' // 95%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,J9s+,T9s', // 24%
		callRange: {
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'MP3': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'CO': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'BTN': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'SB': '22+,A2+,K2s+,K5o+,Q5s+,Q8o+,J7s+,J9o+,T8s+,98s', // 41%
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92+,82+,72s+,73o+,62+,52+,42+,32s' // 98%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A3o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 26%
		callRange: {
			'MP2': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'MP3': '66+,A7s+,A9o+,KTs+,KQo', // 13%
			'CO': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BTN': '55+,A5s+,A7o+,KTs+,KJo+,QJs', // 17%
			'SB': '22+,A2+,K2s+,K5o+,Q5s+,Q8o+,J7s+,J9o+,T8s+,98s', // 41%
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92+,82+,72s+,73o+,62+,52+,42+,32s' // 98%
		}
	},
	'MP2': {
		openPushRange: '44+,A2s+,A4o+,K6s+,K9o+,Q8s+,QTo+,J9s+,JTo,T9s', // 28%
		callRange: {
			'MP3': '55+,A7s+,A9o+,KTs+,KQo,QTs+,JTs', // 14%
			'CO': '44+,A5s+,A9o+,KTs+,KJo+,QTs+,JTs', // 16%
			'BTN': '44+,A5s+,A8o+,KTs+,KJo+,QTs+,JTs', // 17%
			'SB': '22+,A2s+,A3o+,K3s+,K9o+,Q5s+,Q9o+,J7s+,J9o+,T7s+,T9o,96s+,86s+,76s,65s', // 38%
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92+,82+,72s+,73o+,62+,52+,42+,32' // 99%
		}
	},
	'MP3': {
		openPushRange: '33+,A2+,K4s+,K9o+,Q7s+,Q9o+,J8s+,JTo,T8s+', // 33%
		callRange: {
			'CO': '44+,A4s+,A8o+,K9s+,KJo+,QTs+,JTs', // 17%
			'BTN': '44+,A3s+,A8o+,K9s+,KTo+,QTs+,QJo,JTs', // 19%
			'SB': '22+,A2+,K2s+,K7o+,Q5s+,Q9o+,J7s+,J9o+,T7s+,T9o,97s+,86s+,76s,65s', // 41%
			'BB': anyTwoRange // 100%
		}
	},
	'CO': {
		openPushRange: '33+,A2+,K2s+,K6o+,Q6s+,Q9o+,J7s+,J9o+,T8s+,98s', // 38%
		callRange: {
			'BTN': '44+,A2s+,A7o+,K9s+,KTo+,Q9s+,QJo,JTs', // 21%
			'SB': '22+,A2+,K2s+,K6o+,Q3s+,Q8o+,J5s+,J8o+,T6s+,T9o,96s+,86s+,75s+,65s', // 45%
			'BB': anyTwoRange // 100%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K4o+,Q3s+,Q8o+,J6s+,J8o+,T7s+,T9o,97s+', // 45%
		callRange: {
			'SB': '22+,A2+,K2s+,K4o+,Q2s+,Q8o+,J4s+,J8o+,T6s+,T8o+,96s+,98o,86s+,75s+,65s,54s', // 50%
			'BB': anyTwoRange // 100%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2+,92+,82s+,84o+,73s+,74o+,63s+,65o,53s+,43s', // 87%
		callRange: {
			'BB': anyTwoRange // 100%
		}
	}
}
// ===========================

// Эффективный стек 4BB с анте
openPushRangesAnte[4] = {
	'UTG': {
		openPushRange: '22+,A2s+,A5o+,K9s+,KJo+,QTs+,JTs', // 22%
		callRange: {
			'UTG+1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,A9o+,KJs+', // 9.8%
			'CO': '66+,A8s+,A9o+,KJs+', // 11%
			'BTN': '66+,A8s+,A9o+,KJs+', // 11%
			'SB': '33+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo', // 23%
			'BB': '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J7o+,T4s+,T7o+,95s+,97o+,85s+,87o,75s+,65s,54s' // 62%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 25%
		callRange: {
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A8s+,A9o+,KJs+', // 11%
			'MP3': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'CO': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BTN': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'SB': '33+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo', // 23%
			'BB': '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J7o+,T4s+,T7o+,95s+,97o+,85s+,87o,75s+,65s,54s' // 62%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A3o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 26%
		callRange: {
			'MP2': '66+,A8s+,A9o+,KJs+', // 11%
			'MP3': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'CO': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BTN': '55+,A6s+,A8o+,KTs+,KQo', // 14%
			'SB': '33+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo', // 23%
			'BB': '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J7o+,T4s+,T7o+,95s+,97o+,85s+,87o,75s+,65s,54s' // 62%
		}
	},
	'MP2': {
		openPushRange: '33+,A2s+,A4o+,K6s+,K9o+,Q9s+,QTo+,J9s+,JTo,T9s', // 28%
		callRange: {
			'MP3': '44+,A7s+,A9o+,KTs+,KQo,QJs', // 14%
			'CO': '44+,A5s+,A8o+,KTs+,KQo,QJs', // 15%
			'BTN': '33+,A5s+,A8o+,KTs+,KQo,QJs', // 16%
			'SB': '22+,A2s+,A3o+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', // 30%
			'BB': '22+,A2+,K2+,Q2s+,Q8o+,J2s+,J7o+,T2s+,T7o+,95s+,93s,97o+,84s+,86o+,73s+,76o,63s+,65o,52s+,43s' // 63%
		}
	},
	'MP3': {
		openPushRange: '22+,A2+,K4s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', //32%
		callRange: {
			'CO': '44+,A4s+,A8o+,KTs+,KJo+,QTs+', // 17%
			'BTN': '33+,A3s+,A7o+,KTs+,KJo+,QTs+', // 18%
			'SB': '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s,87s', // 32%
			'BB': '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J7o+,T2s+,T7o+,93s+,96o+,83s+,86o+,73s+,75o+,63s+,65o,52s+,54o,42s+' // 70%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K2s+,K7o+,Q6s+,Q9o+,J8s+,JTo,T8s+,98s', // 36%
		callRange: {
			'BTN': '33+,A2s+,A7o+,K9s+,KTo+,QTs+', // 20%
			'SB': '22+,A2+,K4s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s,87s', // 33%
			'BB': '22+,A2+,K2+,Q2s+,Q4o+,J2s+,J7o+,T2s+,T6o+,93s+,96o+,83s+,86o+,73s+,75o+,62s+,65o,52s+,54o,42s+' // 72%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K3o+,Q3s+,Q7o+,J7s+,J9o+,T7s+,T9o,97s+,87s', // 46%
		callRange: {
			'SB': '22+,A2+,K2s+,K6o+,Q4s+,Q8o+,J7s+,J9o+,T7s+,T9o,98s,87s', // 41%
			'BB': '22+,A2+,K2+,Q2+,J2s+,J5o+,T2s+,T6o+,92s+,96o+,82s+,85o+,73s+,75o+,62s+,65o,52s+,54o,42s+,32s' // 72%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2+,92s+,95o+,83s+,85o+,73s+,75o+,63s+,65o,53s+', // 82%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92s+,94o+,82s+,85o+,73s+,75o+,62s+,65o,52s+,54o,42s+' // 85%
		}
	}
}
// ===========================

// Эффективный стек 5BB с анте
openPushRangesAnte[5] = {
	'UTG': {
		openPushRange: '22+,A2s+,A5o+,K9s+,KJo+,QTs+,JTs', // 22%
		callRange: {
			'UTG+1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,ATo+,KQs', // 9.8%
			'CO': '66+,A8s+,A9o+,KQs', // 11%
			'BTN': '66+,A8s+,A9o+,KQs', // 11%
			'SB': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'BB': '22+,A2+,K5s+,K8o+,Q8s+,QTo+,J9s+,JTo' // 32%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A5o+,K9s+,KTo+,QTs+,J9s+,T9s', // 23%
		callRange: {
			'MP1': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,A9o+,KJs+', // 11%
			'CO': '66+,A8s+,A9o+,KJs+', // 11%
			'BTN': '66+,A7s+,A9o+,KJs+,KQo', // 12%
			'SB': '44+,A2s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'BB': '22+,A2+,K5s+,K8o+,Q8s+,QTo+,J9s+,JTo' // 32%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A3o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 26%
		callRange: {
			'MP2': '66+,A8s+,A9o+,KJs+', // 11%
			'MP3': '66+,A7s+,A9o+,KJs+', // 11%
			'CO': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BTN': '55+,A6s+,A8o+,KTs+,KQo', // 14%
			'SB': '33+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo', // 23%
			'BB': '22+,A2+,K2s+,K6o+,Q6s+,Q9o+,J8s+,JTo,T8s+' // 37%
		}
	},
	'MP2': {
		openPushRange: '22+,A2+,K7s+,KTo+,Q9s+,QTo+,J9s+,T8s+,98s', // 29%
		callRange: {
			'MP3': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'CO': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BTN': '55+,A5s+,A7o+,KTs+,KJo+,QJs', // 17%
			'SB': '33+,A2s+,A4o+,K8s+,KTo+,QTs+,QJo', // 24%
			'BB': '22+,A2+,K2s+,K5o+,Q5s+,Q8o+,J7s+,J9o+,T8s+,98s' // 41%
		}
	},
	'MP3': {
		openPushRange: '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J8s+,JTo,T8s+,97s+,87s,76s', // 33%
		callRange: {
			'CO': '44+,A4s+,A7o+,K9s+,KTo+,QJs', // 19%
			'BTN': '44+,A3s+,A7o+,K9s+,KTo+,QJs', // 19%
			'SB': '22+,A2+,K6s+,K9o+,Q9s+,QTo+,JTs', // 29%
			'BB': '22+,A2+,K2s+,K3o+,Q2s+,Q7o+,J6s+,J8o+,T7s+,T9o,97s+,87s' // 47%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K2s+,K7o+,Q6s+,Q9o+,J8s+,JTo,T7s+,97s+,87s,76s', // 38%
		callRange: {
			'BTN': '33+,A2s+,A7o+,K9s+,KTo+,QTs+,JTs', // 20%
			'SB': '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J9s+,JTo,T9s', // 31%
			'BB': '22+,A2+,K2s+,K3o+,Q3s+,Q8o+,J6s+,J9o+,T6s+,T9o,96s+,86s+,75s+,65s,54s' // 47%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q8o+,J6s+,J9o+,T7s+,T9o,97s+,86s+,76s,65s', // 47%
		callRange: {
			'SB': '22+,A2+,K2s+,K7o+,Q6s+,Q9o+,J8s+,J9o+,T8s+,98s', // 37%
			'BB': '22+,A2+,K2+,Q2s+,Q6o+,J3s+,J8o+,T6s+,T8o+,95s+,98o,85s+,75s+,64s+,54s' // 55%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2s+,T3o+,92s+,95o+,84s+,85o+,73s+,75o+,63s+,65o,53s+,43s', // 81%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2+,T2s+,T5o+,93s+,96o+,84s+,86o+,74s+,76o,64s+,54s' // 74%
		}
	}
}
// ===========================

// Эффективный стек 6BB с анте
openPushRangesAnte[6] = {
	'UTG': {
		openPushRange: '22+,A3s+,A7o+,KTs+,KJo+,QJs', // 19%
		callRange: {
			'UTG+1': '77+,AT+', // 8.4%
			'MP1': '77+,AT+', // 8.4%
			'MP2': '77+,AT+', // 8.4%
			'MP3': '77+,A9s+,ATo+', // 8.7%
			'CO': '77+,A9s+,ATo+', // 8.7%
			'BTN': '66+,A8s+,ATo+,KQs', // 9.8%
			'SB': '66+,A8s+,A9o+,KQs', // 11%
			'BB': '44+,A3s+,A7o+,K9s+,KTo+,QTs+' // 19%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A5o+,K9s+,KJo+,QTs+,JTs', // 22%
		callRange: {
			'MP1': '77+,A9s+,ATo+', // 8.7%
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,ATo+,KQs', // 9.8%
			'CO': '66+,A8s+,ATo+,KQs', // 9.8%
			'BTN': '66+,A8s+,A9o+,KQs', // 11%
			'SB': '55+,A7s+,A8o+,KTs+,KQo', // 14%
			'BB': '33+,A2s+,A5o+,K8s+,KTo+,QTs+,QJo' // 23%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,QJo,J9s+,T9s', // 25%
		callRange: {
			'MP2': '66+,A8s+,ATo+,KQs', // 9.8%
			'MP3': '66+,A8s+,A9o+,KQs', // 11%
			'CO': '66+,A7s+,A9o+,KJs+', // 11%
			'BTN': '66+,A7s+,A9o+,KJs+', // 11%
			'SB': '44+,A3s+,A7o+,K9s+,KTo+,QJs', // 19%
			'BB': '33+,A2s+,A4o+,K8s+,KTo+,QTs+,QJo' // 24%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A5o+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s', // 28%
		callRange: {
			'MP3': '44+,A8s+,A9o+,KJs+', // 12%
			'CO': '44+,A7s+,A9o+,KQs', // 12%
			'BTN': '44+,A7s+,A8o+,KJs+', // 13%
			'SB': '22+,A2s+,A7o+,KTs+,KJo+,QTs+,JTs', // 19%
			'BB': '22+,A2+,K4s+,K9o+,Q8s+,QTo+,J9s+,T9s' // 31%
		}
	},
	'MP3': {
		openPushRange: '22+,A2+,K5s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s,87s', // 32%
		callRange: {
			'CO': '44+,A7s+,A5s,A8o+,KTs+,KQo,QJs', // 15%
			'BTN': '44+,A5s+,A8o+,KTs+,KQo,QJs', // 15%
			'SB': '22+,A2s+,A5o+,K9s+,KTo+,QTs+,QJo,JTs', // 23%
			'BB': '22+,A2+,K4s+,K8o+,Q8s+,QTo+,J8s+,JTo,T8s+,98s' // 33%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K2s+,K8o+,Q6s+,QTo+,J8s+,JTo,T7s+,97s+,86s+,76s', // 36%
		callRange: {
			'BTN': '44+,A3s+,A7o+,KTs+,KJo+,QTs+', // 18%
			'SB': '22+,A2s+,A3o+,K6s+,K9o+,Q9s+,QTo+,JTs', // 28%
			'BB': '22+,A2+,K2s+,K6o+,Q6s+,Q9o+,J7s+,J9o+,T8s+,98s,87s' // 39%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K3o+,Q3s+,Q8o+,J7s+,J9o+,T6s+,T9o,96s+,86s+,75s+,65s,54s', // 47%
		callRange: {
			'SB': '22+,A2+,K4s+,K8o+,Q8s+,Q9o+,J8s+,JTo,T9s', // 34%
			'BB': '22+,A2+,K2s+,K3o+,Q4s+,Q8o+,J7s+,J9o+,T7s+,T9o,97s+,87s,76s' // 45%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2s+,T5o+,92s+,96o+,83s+,86o+,73s+,75o+,63s+,65o,52s+,54o,43s', // 79%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2s+,J4o+,T3s+,T7o+,95s+,97o+,86s+,87o,76s' // 64%
		}
	}
}
// ===========================

// Эффективный стек 7BB с анте
openPushRangesAnte[7] = {
	'UTG': {
		openPushRange: '22+,A3s+,A8o+,KTs+,KQo,QJs', // 17%
		callRange: {
			'UTG+1': '88+,AJs+,AQo+', // 5.9%
			'MP1': '88+,ATs+,AJo+', // 7.1%
			'MP2': '88+,ATs+,AJo+', // 7.1%
			'MP3': '77+,AT+', // 8.4%
			'CO': '77+,A9s+,ATo+', // 8.7%
			'BTN': '66+,A8s+,ATo+,KQs', // 9.8%
			'SB': '66+,A7s+,A9o+,KJs+', // 11%
			'BB': '44+,A3s+,A7o+,K9s+,KTo+,QTs+' // 19%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A7o+,K9s+,KJo+,QTs+,JTs', // 20%
		callRange: {
			'MP1': '77+,AT+', // 8.4%
			'MP2': '77+,AT+', // 8.4%
			'MP3': '77+,A9s+,ATo+', // 8.7%
			'CO': '77+,A9s+,ATo+', // 8.7%
			'BTN': '77+,A9s+,ATo+', // 8.7%
			'SB': '66+,A8s+,A9o+,KQs', // 11%
			'BB': '44+,A4s+,A7o+,K9s+,KTo+,QJs' // 19%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A8o+,K8s+,KTo+,Q8s+,QJo,J8s+,T8s+,98s', // 23%
		callRange: {
			'MP2': '66+,A9s+,ATo+', // 9.2%
			'MP3': '66+,A9s+,ATo+,KQs', // 9.5%
			'CO': '55+,A9s+,ATo+,KQs', // 10%
			'BTN': '55+,A8s+,ATo+,KQs', // 10%
			'SB': '33+,A7s+,A9o+,KJs+,KQo', // 14%
			'BB': '22+,A2s+,A5o+,K9s+,KTo+,QTs+,JTs' // 22%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A4o+,K8s+,KTo+,Q9s+,QJo,J8s+,T8s+,98s,87s', // 27%
		callRange: {
			'MP3': '55+,A8s+,ATo+,KQs', // 10%
			'CO': '55+,A8s+,A9o+,KJs+', // 11%
			'BTN': '44+,A7s+,A9o+,KJs+', // 12%
			'SB': '33+,A4s+,A8o+,KTs+,KJo+,QJs', // 17%
			'BB': '22+,A2s+,A4o+,K9s+,KTo+,Q9s+,QJo,JTs' // 25%
		}
	},
	'MP3': {
		openPushRange: '22+,A2+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,97s+,87s', // 32%
		callRange: {
			'CO': '44+,A7s+,A9o+,KTs+,KQo', // 13%
			'BTN': '44+,A6s+,A8o+,KTs+,KQo', // 15%
			'SB': '22+,A2s+,A6o+,K9s+,KJo+,QTs+', // 20%
			'BB': '22+,A2+,K6s+,KTo+,Q9s+,QTo+,J9s+,T9s' // 29%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K3s+,K9o+,Q6s+,QTo+,J7s+,JTo,T7s+,97s+,86s+,76s,65s', // 35%
		callRange: {
			'BTN': '44+,A4s+,A8o+,KTs+,KJo+,QJs', // 16%
			'SB': '22+,A2s+,A4o+,K9s+,KTo+,QTs+,JTs', // 23%
			'BB': '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J9s+,JTo,T9s' // 31%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K5o+,Q4s+,Q9o+,J7s+,J9o+,T6s+,T9o,96s+,98o,86s+,75s+,65s,54s', // 45%
		callRange: {
			'SB': '22+,A2+,K5s+,K9o+,Q8s+,QTo+,J9s+', // 30%
			'BB': '22+,A2+,K2s+,K5o+,Q6s+,Q9o+,J8s+,JTo,T8s+,98s' // 38%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J3o+,T2s+,T6o+,92s+,96o+,84s+,86o+,73s+,75o+,63s+,65o,52s+,43s', // 76%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J3s+,J7o+,T6s+,T8o+,96s+,98o,87s' // 57%
		}
	}
}
// ===========================

// Эффективный стек 8BB с анте
openPushRangesAnte[8] = {
	'UTG': {
		openPushRange: '22+,A3s+,A8o+,KTs+,KQo,QJs', // 17%
		callRange: {
			'UTG+1': '88+,ATs+,AJo+', // 7.1%
			'MP1': '88+,ATs+,AJo+', // 7.1%
			'MP2': '88+,ATs+,AJo+', // 7.1%
			'MP3': '88+,ATs+,AJo+', // 7.1%
			'CO': '77+,AT+', // 8.4%
			'BTN': '77+,AT+', // 8.4%
			'SB': '77+,A9s+,ATo+', // 8.7%
			'BB': '66+,A8s+,ATo+,KQs' // 9.8%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A2s+,A7o+,K9s+,KJo+,QTs+,JTs', // 20%
		callRange: {
			'MP1': '88+,ATs+,AJo+', // 7.1%
			'MP2': '77+,AT+', // 8.4%
			'MP3': '77+,AT+', // 8.4%
			'CO': '77+,AT+', // 8.4%
			'BTN': '77+,A9s+,ATo+', // 8.7%
			'SB': '66+,A8s+,ATo+,KQs', // 9.8%
			'BB': '55+,A7s+,A8o+,KTs+,KQo' // 14%
		}
	},
	'MP1': {
		openPushRange: '22+,A3s+,A9o+,K8s+,KJo+,Q8s+,QJo,J8s+,T8s+,98s', // 21%
		callRange: {
			'MP2': '66+,AT+', // 8.9%
			'MP3': '66+,AT+', // 8.9%
			'CO': '66+,A9s+,ATo+', // 9.2%
			'BTN': '55+,A9s+,ATo+', // 9.7%
			'SB': '44+,A8s+,ATo+,KQs', // 11%
			'BB': '33+,A2s+,A8o+,KTs+,KJo+,QTs+' // 18%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A8o+,K7s+,KTo+,Q8s+,QJo,J8s+,JTo,T8s+,98s', // 24%
		callRange: {
			'MP3': '66+,A9s+,ATo+', // 9.2%
			'CO': '55+,A9s+,ATo+,KQs', // 10%
			'BTN': '55+,A8s+,A9o+,KQs', // 11%
			'SB': '33+,A7s+,A8o+,KJs+', // 14%
			'BB': '22+,A2s+,A5o+,K9s+,KTo+,QTs+,QJo' // 23%
		}
	},
	'MP3': {
		openPushRange: '22+,A2s+,A4o+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,97s+,87s', // 30%
		callRange: {
			'CO': '55+,A7s+,A9o+,KJs+', // 12%
			'BTN': '44+,A7s+,A9o+,KJs+', // 12%
			'SB': '33+,A4s+,A7o+,KTs+,KJo+,QJs', // 18%
			'BB': '22+,A2s+,A3o+,K9s+,KTo+,QTs+,QJo,JTs' // 25%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K4s+,K9o+,Q8s+,QTo+,J7s+,JTo,T7s+,97s+,86s+,76s,65s', // 35%
		callRange: {
			'BTN': '44+,A5s+,A8o+,KTs+,KQo', // 15%
			'SB': '33+,A2s+,A6o+,K9s+,KTo+,QTs+', // 21%
			'BB': '22+,A2+,K7s+,KTo+,Q9s+,QTo+,JTs' // 28%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K6o+,Q4s+,Q9o+,J7s+,J9o+,T6s+,T9o,96s+,85s+,75s+,65s,54s', // 43%
		callRange: {
			'SB': '33+,A2s+,A3o+,K7s+,K9o+,Q9s+,QTo+,JTs', // 27%
			'BB': '22+,A2+,K3s+,K7o+,Q8s+,QTo+,J9s+,JTo,T9s' // 34%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T6o+,92s+,96o+,83s+,86o+,73s+,75o+,63s+,65o,52s+,54o,43s', // 76%
		callRange: {
			'BB': '22+,A2+,K2+,Q2s+,Q4o+,J5s+,J7o+,T6s+,T8o+,97s+,87s' // 53%
		}
	}
}
// ===========================

// Эффективный стек 9BB с анте
openPushRangesAnte[9] = {
	'UTG': {
		openPushRange: '22+,A5s+,A8o+,KTs+,KQo', // 16%
		callRange: {
			'UTG+1': '88+,AJs+,AQo+', // 5.9%
			'MP1': '88+,AJs+,AQo+', // 5.9%
			'MP2': '88+,ATs+,AJo+', // 7.1%
			'MP3': '88+,ATs+,AJo+', // 7.1%
			'CO': '88+,ATs+,AJo+', // 7.1%
			'BTN': '88+,ATs+,AJo+', // 7.1%
			'SB': '77+,AT+', // 8.4%
			'BB': '77+,A9s+,ATo+' // 8.7%
		}
	},
	'UTG+1': {
		openPushRange: '33+,A7s+,A5s,A4s,ATo+,K9s+,KJo+,Q9s+,J9s+,T9s', // 17%
		callRange: {
			'MP1': '77+,AJ+', // 7.2%
			'MP2': '77+,ATs+,AJo+', // 7.5%
			'MP3': '77+,ATs+,AJo+', // 7.5%
			'CO': '77+,ATs+,AJo+', // 7.5%
			'BTN': '77+,ATs+,AJo+', // 7.5%
			'SB': '55+,AT+', // 9.4%
			'BB': '55+,A8s+,ATo+,KJs+,KQo' // 11%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A9o+,K9s+,KJo+,Q9s+,QJo,J9s+,T8s+,98s', // 20%
		callRange: {
			'MP2': '77+,ATs+,AJo+', // 7.5%
			'MP3': '66+,ATs+,AJo+', // 8%
			'CO': '66+,ATs+,AJo+,KQs', // 8.3%
			'BTN': '66+,AT+,KQs', // 9.2%
			'SB': '55+,A8s+,ATo+,KJs+,KQo', // 11%
			'BB': '33+,A4s+,A9o+,KTs+,KQo' // 15%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A8o+,K7s+,KJo+,Q8s+,QJo,J8s+,T8s+,98s', // 22%
		callRange: {
			'MP3': '66+,AT+,KQs', // 9.2%
			'CO': '66+,A9s+,ATo+,KQs', // 9.5%
			'BTN': '55+,A9s+,ATo+,KQs', // 10%
			'SB': '44+,A8s+,A9o+,KJs+,KQo', // 13%
			'BB': '33+,A3s+,A8o+,KTs+,KJo+,QJs' // 17%
		}
	},
	'MP3': {
		openPushRange: '22+,A2s+,A4o+,K7s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s,87s', // 29%
		callRange: {
			'CO': '55+,A8s+,ATo+,KJs+', // 11%
			'BTN': '55+,A7s+,A9o+,KJs+', // 12%
			'SB': '44+,A5s+,A8o+,KTs+,KJo+,QJs', // 16%
			'BB': '22+,A2s+,A5o+,K9s+,KTo+,QTs+' // 22%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K4s+,KTo+,Q8s+,QTo+,J7s+,JTo,T7s+,T9o,97s+,86s+,76s,65s', // 35%
		callRange: {
			'BTN': '44+,A6s+,A8o+,KTs+,KQo', // 15%
			'SB': '33+,A2s+,A7o+,KTs+,KJo+,QTs+', // 19%
			'BB': '22+,A2s+,A3o+,K7s+,KTo+,Q9s+,QJo,JTs' // 26%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K7o+,Q5s+,Q9o+,J7s+,J9o+,T6s+,T9o,96s+,86s+,75s+,65s,54s', // 42%
		callRange: {
			'SB': '33+,A2s+,A4o+,K9s+,KTo+,QTs+,QJo,JTs', // 24%
			'BB': '22+,A2+,K5s+,K8o+,Q9s+,QTo+,J9s+' // 31%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J5o+,T2s+,T7o+,93s+,96o+,84s+,86o+,73s+,75o+,63s+,65o,52s+,43s', // 73%
		callRange: {
			'BB': '22+,A2+,K2+,Q2s+,Q6o+,J6s+,J8o+,T7s+,T9o,98s'
		}
	}
}
// ===========================

// Эффективный стек 10BB с анте
openPushRangesAnte[10] = {
	'UTG': {
		openPushRange: '33+,A7s+,A5s,A8o+,KJs+,KQo', // 15%
		callRange: {
			'UTG+1': '88+,AJs+,AQo+', // 5.9%
			'MP1': '88+,AJs+,AQo+', // 5.9%
			'MP2': '88+,AJs+,AQo+', // 5.9%
			'MP3': '88+,AJs+,AQo+', // 5.9%
			'CO': '88+,AJs+,AQo+', // 5.9%
			'BTN': '88+,AJs+,AQo+', // 5.9%
			'SB': '88+,ATs+,AJo+', // 7.1%
			'BB': '77+,AT+' // 8.4%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A3s+,A8o+,KTs+,KQo,QJs', // 17%
		callRange: {
			'MP1': '88+,ATs+,AJo+', // 7.1%
			'MP2': '88+,ATs+,AJo+', // 7.1%
			'MP3': '88+,ATs+,AJo+', // 7.1%
			'CO': '88+,ATs+,AJo+', // 7.1%
			'BTN': '88+,ATs+,AJo+', // 7.1%
			'SB': '77+,AT+', // 8.4%
			'BB': '77+,A9s+,ATo+' // 8.7%
		}
	},
	'MP1': {
		openPushRange: '22+,A2s+,A7o+,KTs+,KJo+,QJs', // 19%
		callRange: {
			'MP2': '88+,ATs+,AJo+', // 7.1%
			'MP3': '77+,AT+', // 8.4%
			'CO': '77+,AT+', // 8.4%
			'BTN': '77+,AT+', // 8.4%
			'SB': '77+,A9s+,ATo+', // 8.7%
			'BB': '66+,A8s+,A9o+,KQs' // 11%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A9o+,K8s+,KJo+,Q8s+,QJo,J8s+,T8s+,98s', // 21%
		callRange: {
			'MP3': '66+,AT+', // 8.9%
			'CO': '66+,A9s+,ATo+', // 9.2%
			'BTN': '66+,A9s+,ATo+', // 9.2%
			'SB': '44+,A8s+,A9o+', // 11%
			'BB': '44+,A4s+,A9o+,KTs+,KJo+' // 15%
		}
	},
	'MP3': {
		openPushRange: '22+,A2s+,A7o+,A5o,K7s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,98s,87s', // 27%
		callRange: {
			'CO': '66+,A8s+,ATo+,KJs+', // 10%
			'BTN': '55+,A8s+,A9o+,KJs+', // 11%
			'SB': '44+,A7s+,A8o+,KTs+,KQo', // 14%
			'BB': '33+,A2s+,A7o+,KTs+,KJo+,QJs' // 18%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K5s+,KTo+,Q8s+,QTo+,J8s+,JTo,T7s+,97s+,86s+,76s', // 33%
		callRange: {
			'BTN': '44+,A7s+,A8o+,KJs+', // 13%
			'SB': '33+,A4s+,A7o+,KTs+,KJo+,QJs', // 18%
			'BB': '22+,A2s+,A4o+,K9s+,KTo+,QTs+' // 23%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K2s+,K9o+,Q5s+,Q9o+,J7s+,J9o+,T6s+,T9o,96s+,86s+,75s+,65s,54s', // 40%
		callRange: {
			'SB': '33+,A2s+,A5o+,K9s+,KTo+,QTs+', // 22%
			'BB': '22+,A2+,K7s+,K9o+,Q9s+,QTo+,JTs' // 29%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J6o+,T2s+,T7o+,93s+,96o+,84s+,86o+,73s+,76o,63s+,65o,52s+,43s', // 71%
		callRange: {
			'BB': '22+,A2+,K2+,Q4s+,Q7o+,J7s+,J9o+,T8s+,T9o,98s' // 45%
		}
	}
}
// ============================

// Эффективный стек 11BB с анте
openPushRangesAnte[11] = {
	'UTG': {
		openPushRange: '44+,A7s+,A9o+,KJs+,KQo',
		callRange: {
			'UTG+1': '99+,AJs+,AQo+', // 5.4%
			'MP1': '88+,AJs+,AQo+', // 5.9%
			'MP2': '88+,AJs+,AQo+', // 5.9%
			'MP3': '88+,AJs+,AQo+', // 5.9%
			'CO': '88+,AJs+,AQo+', // 5.9%
			'BTN': '88+,AJs+,AQo+', // 5.9%
			'SB': '88+,AJs+,AQo+', // 5.9%
			'BB': '88+,ATs+,AJo+' // 7.1%
		}
	},
	'UTG+1': {
		openPushRange: '22+,A5s+,A8o+,KTs+,KQo', // 16%
		callRange: {
			'MP1': '88+,AJs+,AQo+', // 5.9%
			'MP2': '88+,AJs+,AQo+', // 5.9%
			'MP3': '88+,AJs+,AQo+', // 5.9%
			'CO': '88+,ATs+,AJo+', // 7.1%
			'BTN': '88+,ATs+,AJo+', // 7.1%
			'SB': '77+,AT+', // 8.4%
			'BB': '77+,AT+' // 8.4%
		}
	},
	'MP1': {
		openPushRange: '33+,A7s+,A5s-A3s,ATo+,K9s+,KJo+,Q9s+,J9s+,T9s', // 17%
		callRange: {
			'MP2': '77+,AJ+', // 7.2%
			'MP3': '77+,AJ+', // 7.2%
			'CO': '77+,ATs+,AJo+', // 7.5%
			'BTN': '77+,ATs+,AJo+', // 7.5%
			'SB': '55+,ATs+,AJo+', // 8.4%
			'BB': '66+,A8s+,ATo+,KJs+,KQo' // 11%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,A9o+,K8s+,KJo+,Q8s+,QJo,J9s+,T8s+,98s', // 21%
		callRange: {
			'MP3': '66+,ATs+,AJo+', // 8%
			'CO': '66+,ATs+,AJo+', // 8%
			'BTN': '66+,AT+', // 8.9%
			'SB': '55+,A9s+,ATo+', // 9.7%
			'BB': '55+,A5s+,A9o+,KJ+' // 14%
		}
	},
	'MP3': {
		openPushRange: '22+,A2s+,A8o+,K6s+,KTo+,Q8s+,QTo+,J8s+,JTo,T8s+,97s+,87s', // 26%
		callRange: {
			'CO': '55+,A9s+,ATo+', // 9.7%
			'BTN': '55+,A8s+,ATo+', // 10%
			'SB': '44+,A7s+,A9o+,KQs', // 12%
			'BB': '44+,A2s+,A8o+,KTs+,KJo+,QJs' // 17%
		}
	},
	'CO': {
		openPushRange: '22+,A2+,K5s+,KTo+,Q8s+,QTo+,J8s+,JTo,T7s+,97s+,87s,76s', // 32%
		callRange: {
			'BTN': '55+,A7s+,A8o+,KJs+', // 13%
			'SB': '44+,A4s+,A7o+,KTs+,KQo', // 16%
			'BB': '33+,A2s+,A6o+,K9s+,KTo+,QTs+' // 21%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K3s+,K9o+,Q5s+,QTo+,J7s+,J9o+,T7s+,T9o,96s+,86s+,75s+,65s', // 38%
		callRange: {
			'SB': '44+,A2s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'BB': '22+,A2s+,A3o+,K8s+,KTo+,Q9s+,QJo,JTs' // 26%
		}
	},
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q3o+,J2s+,J7o+,T2s+,T7o+,93s+,96o+,84s+,86o+,73s+,76o,63s+,65o,52s+,43s', // 69%
		callRange: {
			'BB': '22+,A2+,K2s+,K3o+,Q5s+,Q8o+,J7s+,J9o+,T8s+' // 42%
		}
	}
}
// ============================

// Эффективный стек 12BB с анте
openPushRangesAnte[12] = {
	'UTG': {
		openPushRange: '44+,A7s+,A9o+,KJs,KQo',
		callRange: {
			'UTG+1': '99+,AJs+,AQo+', // 5.4%
			'MP1': '99+,AJs+,AQo+', // 5.4%
			'MP2': '99+,AQs+,AKo', // 4.2%
			'MP3': '99+,AQs+,AKo', // 4.2%
			'CO': '99+,AQs+,AKo', // 4.2%
			'BTN': '88+,AJs+,AQo+', // 5.9%
			'SB': '88+,AJs+,AQo+', // 5.9%
			'BB': '88+,AJs+,AQo+' // 5.9%
		}
	},
	'UTG+1': {
		openPushRange: '33+,A7s+,A9o+,KJs+,KQo', // 14%
		callRange: {
			'MP1': '88+,AJs+,AQo+', // 5.9%
			'MP2': '88+,AJs+,AQo+', // 5.9%
			'MP3': '88+,AJs+,AQo+', // 5.9%
			'CO': '88+,AJs+,AQo+', // 5.9% 
			'BTN': '88+,AJs+,AQo+', // 5.9%
			'SB': '88+,AJs+,AQo+', // 5.9%
			'BB': '88+,ATs+,AJo+' // 7.1%
		}
	},
	'MP1': {
		openPushRange: '55+,A7s+,A5s,A4s,ATo+,K9s+,KJo+,Q9s+,J9s+,T9s', // 16%
		callRange: {
			'MP2': '77+,AJs+,AQo+', // 6.3%
			'MP3': '77+,AJs+,AQo+', // 6.3%
			'CO': '77+,AJ+', // 7.2%
			'BTN': '66+,AJ+', // 7.7%
			'SB': '66+,AJ+', // 7.7%
			'BB': '77+,AT+,KQs' // 8.7%
		}
	},
	'MP2': {
		openPushRange: '22+,A2s+,ATo+,K8s+,KJo+,Q9s+,QJo,J9s+,T8s+,98s', // 20%
		callRange: {
			'MP3': '88+,ATs+,AJo+', // 7.1%
			'CO': '77+,ATs+,AJo+', // 7.5%
			'BTN': '66+,ATs+,AJo+', // 8.0%
			'SB': '66+,A9s+,ATo+,KQs', // 9.5%
			'BB': '55+,A7s+,ATo+,KJs+,KQo' // 12%
		}
	},
	'MP3': {
		openPushRange: '22+,A2s+,A9o+,K8s+,KTo+,Q8s+,QJo,J8s+,JTo,T8s+,98s', // 23%
		callRange: {
			'CO': '66+,A9s+,ATo+', // 9.2%
			'BTN': '66+,A9s+,ATo+', // 9.2%
			'SB': '55+,A8s+,A9o+,KQs', // 11%
			'BB': '44+,A5s+,A9o+,KTs+,KJo+' // 15%
		}
	},
	'CO': {
		openPushRange: '22+,A2s+,A3o+,K5s+,KTo+,Q8s+,QTo+,J8s+,JTo,T7s+,97s+,87s,76s', // 32%
		callRange: {
			'BTN': '55+,A8s+,A9o+,KJs+', // 11%
			'SB': '44+,A6s+,A8o+,KTs+,KQo', // 15%
			'BB': '33+,A2s+,A7o+,KTs+,KJo+,QJs' // 18%
		}
	},
	'BTN': {
		openPushRange: '22+,A2+,K3s+,K9o+,Q5s+,QTo+,J7s+,J9o+,T6s+,T9o,96s+,86s+,75s+,65s,54s', // 39%
		callRange: {
			'SB': '44+,A3s+,A7o+,K9s+,KTo+,QTs+', // 19%
			'BB': '22+,A2s+,A3o+,K9s+,KTo+,QTs+,QJo,JTs' // 25%
		}
	},
	'SB': {
		openPushRange: '22+,A2s+,A3o+,K9s+,KTo+,QTs+,QJo,JTs', // 67%
		callRange: {
			'BB': '22+,A2+,K2s+,K5o+,Q6s+,Q8o+,J8s+,J9o+,T9s' // 39%
		}
	}
}
// ============================

const OpenPushCallSpectreMTT = {
	openPushRangesAnte
}

export default OpenPushCallSpectreMTT