import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { Header } from './components/Header';

export const Shell = ({ children, location, navigate }) => {
  const [isFinishing, setIsFinishing] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    async function fetch() {
      setIsFinishing(true);
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      await auth.logInFinish(code);
      navigate('/');
    }
    const isFinish = location.pathname === '/auth/finish/';
    if (isFinish && !isFinishing) {
      fetch();
    }
  }, [location, auth, navigate, isFinishing]);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
