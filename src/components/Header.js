import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FiLogIn } from 'react-icons/fi';

import css from './Header.module.css';
import { getLoginUrl } from '../api/auth/getLoginUrl';

export function Header() {
  const [loggingIn, setLoggingIn] = useState(false);

  const logIn = async () => {
    setLoggingIn(true);
    window.location = await getLoginUrl();
  };

  return (
    <header className={css.container}>
      <h1 className={css.logo}>
        <Link to="/">Spotified</Link>
      </h1>
      <button onClick={logIn} disabled={loggingIn}>
        <FiLogIn /> {loggingIn ? 'Logging in' : 'Log in'} with Spotify
      </button>
    </header>
  );
}
