import React, { useEffect } from 'react';
import { getToken } from '../api/auth/getToken';

export function AuthFinish({ location, navigate }) {
  useEffect(() => {
    async function fetch() {
      const query = new URLSearchParams(location.search);
      const code = query.get('code');
      const token = await getToken(code);
      console.log(token);
    }
    fetch();
  }, [location.search, navigate]);

  return <p>Logging in...</p>;
}
