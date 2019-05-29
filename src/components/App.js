import React, { useState } from 'react';
import Classes from './App.module.css';
import { endpoints } from '../services/api';

export function App() {
  const [loggingIn, setLoggingIn] = useState(false);

  const logIn = async () => {
    setLoggingIn(true);
    const response = await fetch(endpoints.authStart);
    const json = await response.json();
    window.location = json.data.url;
  };

  return (
    <div className={Classes.container}>
      <header className={Classes.header}>
        <h1>Spotified</h1>
        <button onClick={logIn} className={Classes.button} disabled={loggingIn}>
          {loggingIn ? 'Logging in' : 'Log in'} with Spotify
        </button>
      </header>
    </div>
  );
}
