import React from 'react';
import { Router } from '@reach/router';

import { Shell } from './Shell';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { AuthFinish } from './routes/AuthFinish';

export const Routes = () => (
  <Router>
    <Shell path="/">
      <Home path="/" />
      <Login path="/login" />
      <AuthFinish path="/auth/finish" />
    </Shell>
  </Router>
);
