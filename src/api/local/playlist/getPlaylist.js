import { baseUrl } from '../config';

export const getPlaylist = async id => {
  const response = await fetch(`${baseUrl}/playlists/${id}/`);
  return await response.json();
};
