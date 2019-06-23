import { baseUrl } from '../config';

export const getPlaylists = async () => {
  const response = await fetch(`${baseUrl}/playlists/`);
  return await response.json();
};
