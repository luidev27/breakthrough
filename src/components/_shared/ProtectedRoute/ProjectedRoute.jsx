import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as AuthService from '../../../service/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      AuthService.isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />)
    )}
  />
);

export default ProtectedRoute;
