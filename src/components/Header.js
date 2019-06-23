import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { FiLogIn } from 'react-icons/fi';

import { AuthContext } from '../contexts/AuthContext';
import css from './Header.module.css';

export function Header() {
  const { user, logIn, loggingIn } = useContext(AuthContext);

  return (
    <header className={css.container}>
      <h1 className={css.logo}>
        <Link to="/">Spotified</Link>
      </h1>
      {user ? (
        <span>Welcome, {user.name}</span>
      ) : (
        <button onClick={logIn} disabled={loggingIn} className={css.button}>
          <FiLogIn className={css.buttonIcon} />{' '}
          {loggingIn ? 'Logging in' : 'Log in'} with Spotify
        </button>
      )}
    </header>
  );
}
