import { baseUrl } from '../config';

const voteTrack = direction => async (playlistId, trackId) => {
  const response = await fetch(
    `${baseUrl}/playlists/${playlistId}/tracks/${trackId}/vote/${direction}/`,
    {
      method: 'POST',
    }
  );
  return await response.json();
};

export const upvoteTrack = voteTrack('up');
export const downvoteTrack = voteTrack('down');
