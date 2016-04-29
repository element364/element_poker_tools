import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores'
import App from './containers/App'

import Nash from './components/Nash'
import NashSpin from './components/NashSpin'
import NashHA from './components/NashHA'

import HandEquity from './components/HandEquity'

import Theory_Rol_Matematiki_v_Pokere from './components/theory/Theory_Rol_Matematiki_v_Pokere'
import Theory_Shansi_Banka_I_Rachet_Ekviti from './components/theory/Theory_Shansi_Banka_I_Rachet_Ekviti'

import { Router, Route, IndexRoute, hashHistory  } from 'react-router'; 

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/nash" component={Nash} />
			<Route path="/nashSpin" component={NashSpin} />
			<Route path="/nashHA" component={NashHA} />
			<Route path="/hand_equity" component={HandEquity} />
			<Route path="/theory_rol_matematiki_v_pokere" component={Theory_Rol_Matematiki_v_Pokere} />
			<Route path="/theory_shansi_banka_i_rachet_ekviti" component={Theory_Shansi_Banka_I_Rachet_Ekviti} />
			<Route path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('app')
);