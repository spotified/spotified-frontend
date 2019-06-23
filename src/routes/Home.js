import React, { useState, useEffect } from 'react';

import { localApi } from '../api/local';
import { spotifyApi } from '../api/spotify';
import { PlaylistItem } from '../components/PlaylistItem';

export function Home() {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetch() {
      const localPlaylists = await localApi.getPlaylists();
      const trackIds = localPlaylists.map(playlist =>
        playlist.tracks.map(track => track.spotify_id)
      );
      const requests = trackIds.map(ids => spotifyApi.tracks.getTracks(ids));
      const tracks = await Promise.all(requests);
      const playlists = localPlaylists.map((playlist, index) => ({
        ...playlist,
        ...tracks[index].track,
      }));
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
