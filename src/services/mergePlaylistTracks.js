export const mergePlaylistTracks = (playlistTracks, tracksFromSpotify) =>
  playlistTracks.map(track => {
    const possibleSpotifyTrack = tracksFromSpotify.find(
      trackFromSpotify => track.spotify_id === trackFromSpotify.id
    );
    if (possibleSpotifyTrack) {
      return {
        ...track,
        ...possibleSpotifyTrack,
      };
    }
    return track;
  });
