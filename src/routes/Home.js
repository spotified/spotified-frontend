import React, { useState, useEffect } from 'react';

import { localApi } from '../api/local';
import { spotifyApi } from '../api/spotify';
import { mergePlaylistTracks } from '../services/mergePlaylistTracks';
import { PlaylistItem } from '../components/PlaylistItem';

export function Home() {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetch() {
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
      console.log(playlists);
      setPlaylists(playlists);
      setLoading(false);
    }
    fetch();
  }, []);

  if (isLoading) {
    return <p style={{ paddingLeft: '1.5rem' }}>Loading playlists</p>;
  }

  return playlists.map(playlist => (
    <PlaylistItem playlist={playlist} key={playlist.pk} />
  ));
}
