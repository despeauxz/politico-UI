import React, { Fragment } from 'react';
// import { ConnectedRouter } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/src/styles/index.scss';
// import { history } from '../../reducers/rootReducer';
import Routes from './Routes';
import '@base/css/main.css';

/**
 * Represents the App Component
 * @returns {component} App
 */
const App = () => 
    <Fragment>
        <Routes />
        <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            transitionIn="bounceIn"
            transitionOut="fadeOut"
        />
    </Fragment>
;

export default App;
