import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { Header } from './components/Header';

export const Shell = ({ children, location, navigate }) => {
  const [isFinishing, setIsFinishing] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    function finishAuth() {
      setIsFinishing(true);
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      auth.logInFinish(code);
      navigate('/');
    }
    const isFinish = location.pathname === '/auth/finish/';
    if (isFinish && !isFinishing) {
      finishAuth();
    }
  }, [location, auth, navigate, isFinishing]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
