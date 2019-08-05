import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { UNAUTHENTICATED } from '@constant/actionTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import actions from './actions';
import party from './parties';
import office from './office';
import ui from './ui';

export const history = createBrowserHistory();
const authPersistConfig = {
    key: 'auth',
    storage,
    blacklist: ['errors']
};

const appReducer = combineReducers({
    router: routerReducer,
    auth: persistReducer(authPersistConfig, auth),
    party,
    office,
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
  

