// components/RequireAuth.js
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RequireAuth = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default RequireAuth;
