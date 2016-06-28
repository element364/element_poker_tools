import {anyTwoRange} from './OpenPushCallRange'

let openPushRangesNoAnte = {}

// Эффективный стек 2BB без анте
openPushRangesNoAnte[2] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2+,92+,82s+,84o+,72s+,74o+,62s+,64o+,52s+,54o,43s', // 89%
		callRange: {
			'BB': anyTwoRange // 100%
		}
	}
}
// =============================

// Эффективный стек 3BB без анте
openPushRangesNoAnte[3] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2+,92s+,95o+,84s+,86o+,74s+,76o,64s+,54s', // 78%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2+,T2+,92+,82s+,84o+,72s+,74o+,62s+,64o+,52s+,53o+,42s+,43o,32s' // 92%
		}
	}
}
// =============================

// Эффективный стек 4BB без анте
openPushRangesNoAnte[4] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2+,T2s+,T6o+,94s+,96o+,84s+,86o+,74s+,76o,64s+,54s', // 73%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2+,T2s+,T6o+,93s+,96o+,84s+,86o+,74s+,64s+,53s+' // 72%
		}
	}
}
// =============================

// Эффективный стек 5BB без анте
openPushRangesNoAnte[5] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J4o+,T2s+,T6o+,94s+,96o+,84s+,86o+,74s+,76o,63s+,53s+,43s', // 72%
		callRange: {
			'BB': '22+,A2+,K2+,Q2+,J2s+,J5o+,T4s+,T7o+,96s+,97o+,86s+,76s' // 62%
		}
	}
}
// =============================

// Эффективный стек 6BB без анте
openPushRangesNoAnte[6] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J6o+,T2s+,T7o+,94s+,97o+,84s+,86o+,74s+,76o,63s+,53s+,43s', // 68%
		callRange: {
			'BB': '22+,A2+,K2+,Q2s+,Q4o+,J4s+,J7o+,T6s+,T8o+,97s+,87s' // 54%
		}
	}
}
// =============================

// Эффективный стек 7BB без анте
openPushRangesNoAnte[7] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2+,J2s+,J7o+,T3s+,T7o+,95s+,97o+,84s+,86o+,74s+,76o,63s+,53s+,43s', // 67%
		callRange: {
			'BB': '22+,A2+,K2+,Q2s+,Q6o+,J6s+,J8o+,T7s+,T9o,98s' // 48%
		}
	}
}
// =============================

// Эффективный стек 8BB без анте
openPushRangesNoAnte[8] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q5o+,J2s+,J7o+,T4s+,T7o+,95s+,97o+,85s+,87o,74s+,76o,64s+,53s+', // 62%
		callRange: {
			'BB': '22+,A2+,K2+,Q4s+,Q8o+,J7s+,J9o+,T8s+,T9o,98s' // 44%
		}
	}
}
// =============================

// Эффективный стек 9BB без анте
openPushRangesNoAnte[9] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q6o+,J3s+,J8o+,T4s+,T8o+,95s+,97o+,84s+,87o+,74s+,76o,64s+,53s+,43s', // 59%
		callRange: {
			'BB': '22+,A2+,K2s+,K5o+,Q6s+,Q8o+,J8s+,J9o+,T8s+' // 40%
		}
	}
}
// =============================

// Эффективный стек 10BB без анте
openPushRangesNoAnte[10] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q8o+,J3s+,J8o+,T4s+,T8o+,95s+,97o+,84s+,87o,74s+,76o,64s+,53s+', // 57%
		callRange: {
			'BB': '22+,A2+,K2s+,K5o+,Q7s+,Q9o+,J8s+,JTo,T9s' // 37%
		}
	}
}
// ==============================

// Эффективный стек 11BB без анте
openPushRangesNoAnte[11] = {
	'SB': {
		openPushRange: '22+,A2+,K2+,Q2s+,Q8o+,J4s+,J8o+,T5s+,T8o+,95s+,98o,85s+,87o,74s+,64s+,53s+', // 54%
		callRange: {
			'BB': '22+,A2+,K3s+,K7o+,Q8s+,Q9o+,J9s+,JTo,T9s' // 35%
		}
	}
}
// ==============================

// Эффективный стек 12BB без анте
openPushRangesNoAnte[12] = {
	'SB': {
		openPushRange: '22+,A2+,K2s+,K4o+,Q3s+,Q8o+,J4s+,J8o+,T5s+,T8o+,95s+,98o,85s+,87o,74s+,64s+,53s+', // 52%
		callRange: {
			'BB': '22+,A2+,K5s+,K7o+,Q8s+,QTo+,J9s+,JTo' // 33%
		}
	}
}
// ==============================

const OpenPushCallSpectreHA = {
	openPushRangesNoAnte
}

export default OpenPushCallSpectreHA