import { baseUrl, authorizationHeaders } from './config';

export async function getCurrentUser(token) {
  const response = await fetch(`${baseUrl}/me`, authorizationHeaders(token));
  const json = await response.json();
  return json;
}
