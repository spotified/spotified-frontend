import { useContext, useEffect } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export const AuthFinish = ({ location, navigate }) => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    function finishAuth() {
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      auth.logInFinish(code);
      navigate('/');
    }
    if (!auth.loggingIn) {
      finishAuth();
    }
  }, [location, auth, navigate]);

  return null;
};
