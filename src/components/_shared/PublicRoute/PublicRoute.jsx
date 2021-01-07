import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as AuthService from '../../../service/auth';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      !AuthService.isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/app', state: { from: props.location } }} />)
    )}
  />
);

export default PublicRoute;
