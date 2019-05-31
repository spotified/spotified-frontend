import React from 'react';
import { Router } from '@reach/router';

import { Shell } from './Shell';
import { Home } from './routes/Home';

export const Routes = () => (
  <Router>
    <Shell path="/">
      <Home path="/" />
    </Shell>
  </Router>
);
