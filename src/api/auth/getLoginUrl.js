import { endpoints } from '../api';

export const getLoginUrl = async () => {
  const response = await fetch(endpoints.authStart);
  const json = await response.json();
  return json.url;
};
