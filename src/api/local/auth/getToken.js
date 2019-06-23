import { baseUrl } from '../config';

export const getToken = async code => {
  const response = await fetch(`${baseUrl}/auth/finish/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const json = await response.json();
  return json.auth_token;
};
