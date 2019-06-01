import React, { useState } from 'react';

import { getLoginUrl } from '../api/auth/getLoginUrl';
import { getToken } from '../api/auth/getToken';
import { getCurrentUser } from '../api/spotify/user';

export const AuthContext = React.createContext({
  token: '',
  loggingIn: false,
  logIn: () => {},
  logInFinish: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        token,
        loggingIn,
        logIn: async () => {
          setLoggingIn(true);
          window.location = await getLoginUrl();
        },
        logInFinish: async code => {
          setLoggingIn(true);
          const token = await getToken(code);
          setToken(token);
          setLoggingIn(false);
          getCurrentUser(token);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
