import React, { useEffect, useContext } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { Header } from './components/Header';

export const Shell = ({ children, navigate }) => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (!auth.user) {
      navigate('/login');
    }
  }, [auth, navigate]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
