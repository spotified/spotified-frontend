import React, { useState } from 'react';

export const AuthContext = React.createContext({
  authToken: '',
  setAuthToken: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  return (
    <AuthContext.Provider
      value={{
        authToken: token,
        setAuthToken: token => setToken(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
