import { baseUrl } from '../config';

export const getPlaylist = async (id, tag) => {
  const response = await fetch(`${baseUrl}/playlists/${id}/tags/`, {
    method: 'POST',
    body: JSON.stringify({
      name: tag,
    }),
  });
  return await response.json();
};
