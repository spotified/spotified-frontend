export const updatePlaylistVote = (playlists, playlistId, trackId, isUpvote) =>
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
        const upOrDown = isUpvote ? 'ups' : 'downs';
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
