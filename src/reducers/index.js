/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
/* Populated by react-webpack-redux:reducer */


// set up 'route' action and action creator
const ROUTE = 'ROUTE';
function createRouteAction (location) {
    return {
        type: ROUTE,
        payload: location
    };
}

// set up reducer. here we only define behavior for the route action
const reducers = {
	routeReducer (state = {}, action) {
	    if (action.type === ROUTE) {
	        return Object.assign({}, state, {
	            route: action.payload
	        });
	    }
	    else {
	        return state;
	        // whatever other logic you need
	    }
	}
};
module.exports = combineReducers(reducers);
