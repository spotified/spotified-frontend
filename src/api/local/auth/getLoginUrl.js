import { baseUrl } from '../config';

export const getLoginUrl = async () => {
  const response = await fetch(`${baseUrl}/auth/start/`);
  const json = await response.json();
  return json.url;
};
