import React, { useState } from 'react';

import { localApi } from '../api/local';
import { setLocalAuthorizationToken } from '../api/local/config';
import { spotifyApi } from '../api/spotify';
import { setSpotifyAuthorizationToken } from '../api/spotify/config';

export const AuthContext = React.createContext({
  user: null,
  loggingIn: false,
  logIn: () => {},
  logInFinish: () => {},
});

export function AuthProvider({ children }) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loggingIn,
        logIn: async () => {
          setLoggingIn(true);
          window.location = await localApi.getLoginUrl();
        },
        logInFinish: async code => {
          setLoggingIn(true);

          const token = await localApi.getToken(code);
          setSpotifyAuthorizationToken(token);
          setLocalAuthorizationToken(token);

          const userData = await spotifyApi.user.getCurrentUser();
          setLoggingIn(false);
          setUser({
            name: userData.display_name,
            id: userData.id,
            token,
          });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
