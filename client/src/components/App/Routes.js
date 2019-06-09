/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Auth from '../pages/Auth';
import NotFound from '../pages/NotFound';


// eslint-disable-next-line no-extra-parens
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/auth/signup" render={props => <Auth {...props} type="signup" />} />
            <Route path="/*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
