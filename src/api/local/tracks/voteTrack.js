import { baseUrl } from '../config';
import { authorizationHeaders } from '../../spotify/config';

const voteTrack = direction => async (playlistId, trackId) => {
  const response = await fetch(
    `${baseUrl}/playlists/${playlistId}/tracks/${trackId}/vote/${direction}/`,
    {
      headers: {
        Authorization: authorizationHeaders.headers.Authorization.replace(
          'Bearer',
          'Token'
        ),
      },
      method: 'POST',
    }
  );
  return await response.json();
};

export const upvoteTrack = voteTrack('up');
export const downvoteTrack = voteTrack('down');
