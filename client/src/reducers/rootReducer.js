import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { UNAUTHENTICATED } from '@constant/actionTypes';
import auth from './auth';
import actions from './actions';
import party from './parties';
import ui from './ui';

export const history = createBrowserHistory();

const appReducer = combineReducers({
    router: routerReducer,
    auth,
    party,
    ui,
    actions,
});

/**
 * Root Reducers that resets the store on logout
 * @param {object} state
 * @param {string} action
 * @return {func} appReducer function
 */
export default (state, action) => {
    if (action.type === UNAUTHENTICATED) {
        state = undefined;
    }
  
    return appReducer(state, action);
};
  

