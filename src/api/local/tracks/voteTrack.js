import { baseUrl } from '../config';
import { authorizationHeaders } from '../../local/config';

const voteTrack = direction => async (playlistId, trackId) => {
  const response = await fetch(
    `${baseUrl}/playlists/${playlistId}/tracks/${trackId}/vote/${direction}/`,
    {
      ...authorizationHeaders,
      method: 'POST',
    }
  );
  return await response.json();
};

export const upvoteTrack = voteTrack('up');
export const downvoteTrack = voteTrack('down');
