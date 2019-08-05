import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '@containers/pages/Welcome';
import Auth from '@containers/pages/Auth';
import NotFound from '@components/pages/NotFound';
import Authenticator from '@containers/hoc/Authenticator';
import Parties from '@containers/pages/Parties';
import Office from '@containers/pages/Office';
<<<<<<< HEAD
import Profile from '@containers/pages/Profile';
=======
>>>>>>> develop


const Routes = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/auth/signup" render={props => <Auth {...props} type="signup" />} />
            <Route exact path="/auth/login" render={props => <Auth {...props} type="login" />} />
            <Route exact path="/profile" component={Authenticator(Profile)} />
            <Route exact path="/parties" component={Authenticator(Parties)} />
            <Route exact path="/office" component={Authenticator(Office)} />
            <Route path="/*" component={NotFound} />
        </Switch>
    </BrowserRouter>;

export default Routes;
