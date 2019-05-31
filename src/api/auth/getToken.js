import { endpoints } from '../api';

export const getToken = async code => {
  const response = await fetch(endpoints.authFinish, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const json = await response.json();
  return json.auth_token;
};
