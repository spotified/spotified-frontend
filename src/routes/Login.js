import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';

import css from './Login.module.css';
import { AuthContext } from '../contexts/AuthContext';

export function Login() {
  const { logIn, loggingIn } = useContext(AuthContext);
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <span className={css.titleIcon} role="img" aria-label="Please">
          🙏
        </span>{' '}
      </h1>
      <button onClick={logIn} disabled={loggingIn} className={css.button}>
        <FiLogIn className={css.buttonIcon} />{' '}
        {loggingIn
          ? 'Logging in with Spotify'
          : 'Please log in with Spotify to view the playlists'}
      </button>
    </div>
  );
}
