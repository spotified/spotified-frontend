import { useContext, useEffect, useRef } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export const AuthFinish = ({ location, navigate }) => {
  const auth = useContext(AuthContext);
  const isFinishing = useRef(false);

  useEffect(() => {
    async function finishAuth() {
      isFinishing.current = true;
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      await auth.logInFinish(code);
      navigate('/');
    }
    if (!isFinishing.current) {
      finishAuth();
    }
  }, [location, navigate, auth]);

  return null;
};
