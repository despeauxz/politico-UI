/* eslint-disable max-len */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { history } from '@reducers/rootReducer';

const enhancers = [];
const middlewares = [thunk, routerMiddleware(history)];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  
    if (typeof devToolsExtension === 'function') {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }
}

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares), ...enhancers));

const persistor = persistStore(store);

export { store, persistor };
