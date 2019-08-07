import { useContext, useEffect } from 'react';

import { AuthContext } from '../contexts/AuthContext';

let finishing = false;

export const AuthFinish = ({ location, navigate }) => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    async function finishAuth() {
      finishing = true;
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      console.log('finishing');
      await auth.logInFinish(code);
      navigate('/');
    }
    if (!finishing) {
      finishAuth();
    }
  }, [location, auth, navigate]);

  return null;
};
