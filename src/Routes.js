import React from 'react';
import { Router } from '@reach/router';

import { Shell } from './Shell';
import { Home } from './routes/Home';
import { AuthFinish } from './routes/AuthFinish';

export const Routes = () => (
  <Router>
    <Shell path="/">
      <Home path="/" />
      <AuthFinish path="/auth/finish" />
    </Shell>
  </Router>
);