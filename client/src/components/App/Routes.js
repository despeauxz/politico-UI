import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
