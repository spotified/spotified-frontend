import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import { AuthContext } from './contexts/AuthContext';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { AuthFinish } from './routes/AuthFinish';

const PrivateRoute = ({ component: Component, ...props }) => {
  const auth = useContext(AuthContext);
  console.log(auth.user);
  return auth.user ? (
    <Component {...props} />
  ) : (
    <Redirect from="" to="login" noThrow />
  );
};

export const Routes = () => (
  <Router>
    <PrivateRoute component={Home} path="/" />

    <Login path="/login" />
    <AuthFinish path="/auth/finish" />
  </Router>
);
