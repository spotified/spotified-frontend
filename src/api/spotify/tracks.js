import { baseUrl, authorizationHeaders } from './config';

export async function getTracks(ids) {
  if (ids.length === 0) {
    return Promise.resolve([]);
  }
  const response = await fetch(
    `${baseUrl}/tracks?ids=${ids.join(',')}`,
    authorizationHeaders
  );
  const json = await response.json();
  return json.tracks;
}
