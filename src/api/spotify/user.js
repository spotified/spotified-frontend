import { baseUrl, authorizationHeaders } from './config';

export async function getCurrentUser() {
  const response = await fetch(`${baseUrl}/me`, authorizationHeaders);
  return await response.json();
}
