import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';
import { oktaAuthConfig, oktaSignInConfig } from './config';
// import {RestoreOriginalUriFunction} from "@okta/okta-react/bundles/types/OktaContext";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {

    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            restoreOriginalUri={() => history.push('/')}
            onAuthRequired={customAuthHandler}
        >
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <SecureRoute path='/protected' component={Protected} />
                <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                <Route path='/login/callback' component={LoginCallback} />
            </Switch>
        </Security>
    );
};
export default AppWithRouterAccess;
