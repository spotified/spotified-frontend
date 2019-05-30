import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './Routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
