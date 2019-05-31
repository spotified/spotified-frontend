import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { FiLogIn } from 'react-icons/fi';

import { AuthContext } from '../contexts/AuthContext';
import css from './Header.module.css';

export function Header() {
  const { token, logIn, loggingIn } = useContext(AuthContext);

  return (
    <header className={css.container}>
      <h1 className={css.logo}>
        <Link to="/">Spotified</Link>
      </h1>
      {token ? (
        <span>Welcome, {token}</span>
      ) : (
        <button onClick={logIn} disabled={loggingIn}>
          <FiLogIn /> {loggingIn ? 'Logging in' : 'Log in'} with Spotify
        </button>
      )}
    </header>
  );
}
