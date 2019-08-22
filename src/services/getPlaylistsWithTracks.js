import { localApi } from '../api/local';
import { spotifyApi } from '../api/spotify';
import { mergePlaylistTracks } from '../services/mergePlaylistTracks';

export async function getPlaylistsWithTracks() {
  const localPlaylists = await localApi.getPlaylists();
  const trackIdsByPlaylist = localPlaylists.map(playlist =>
    playlist.tracks.map(track => track.spotify_id)
  );
  const requests = trackIdsByPlaylist.map(ids =>
    spotifyApi.tracks.getTracks(ids)
  );

  const tracksByPlaylist = await Promise.all(requests);
  const playlists = localPlaylists.map((playlist, index) => ({
    ...playlist,
    tracks: mergePlaylistTracks(playlist.tracks, tracksByPlaylist[index]),
  }));

  return playlists;
}
