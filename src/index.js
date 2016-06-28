import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores'
import App from './containers/App'

import Nash from './components/pages/Nash/Nash'
import NashSpin from './components/pages/Nash/NashSpin'
import NashHA from './components/pages/Nash/NashHA'

import HandEquity from './components/ui/HandEquity/HandEquity'

import Theory_Rol_Matematiki_v_Pokere from 'components/pages/theory/Theory_Rol_Matematiki_v_Pokere'
import Theory_Shansi_Banka_I_Rachet_Ekviti from 'components/pages/theory/Theory_Shansi_Banka_I_Rachet_Ekviti'
import Theory_Sovety_v_obuchenii from 'components/pages/theory/Theory_Sovety_v_obuchenii';

import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'katex/dist/katex.min.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/nash" component={Nash} />
			<Route path="/nashSpin" component={NashSpin} />
			<Route path="/nashHA" component={NashHA} />
			<Route path="/hand_equity" component={HandEquity} />
			<Route path="/theory_rol_matematiki_v_pokere" component={Theory_Rol_Matematiki_v_Pokere} />
			<Route path="/theory_shansi_banka_i_rachet_ekviti" component={Theory_Shansi_Banka_I_Rachet_Ekviti} />
			<Route path="/theory_sovety_v_obuchenii" component={Theory_Sovety_v_obuchenii} />
			<Route path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('app')
);