export const UP = 'ups';
export const DOWN = 'downs';

export const updatePlaylistVote = (playlists, playlistId, trackId, upOrDown) =>
  playlists.map(playlist => {
    if (playlist.pk !== playlistId) {
      return playlist;
    }
    return {
      ...playlist,
      tracks: playlist.tracks.map(track => {
        if (track.pk !== trackId) {
          return track;
        }
        return {
          ...track,
          votes: {
            ...track.votes,
            [upOrDown]: track.votes[upOrDown] + 1,
          },
        };
      }),
    };
  });
