import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './service/auth';
import PublicRoute from './components/_shared/PublicRoute';
import Application from './views/_app';
import {
  ResetPassword,
  SignUp,
  SignIn,
  Verification,
} from './views/auth';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        isAuthenticated()
          ? (<Redirect to={{ pathname: '/app' }} />)
          : (<Redirect to={{ pathname: '/signin' }} />)
      )}
    />
    <PublicRoute
      path="/signin"
      component={SignIn}
      exact
    />
    <PublicRoute
      path="/signup"
      component={SignUp}
      exact
    />
    <PublicRoute
      path="/verification"
      component={Verification}
      exact
    />
    <PublicRoute
      path="/forgot-password"
      component={ResetPassword}
      exact
    />
    <Route path="/app" component={Application} />
  </Switch>
);

export default Routes;
