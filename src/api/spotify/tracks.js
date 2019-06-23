import { baseUrl, authorizationHeaders } from './config';

export async function getTracks(ids) {
  const response = await fetch(
    `${baseUrl}/tracks?ids=${ids.join(',')}`,
    authorizationHeaders
  );
  const json = await response.json();
  return json.tracks;
}
