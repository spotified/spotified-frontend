import { baseUrl } from '../config';

export const getLoginUrl = async () => {
  console.log(baseUrl);
  const response = await fetch(`${baseUrl}/auth/start/`);
  const json = await response.json();
  console.log(json.url);
  return json.url;
};
