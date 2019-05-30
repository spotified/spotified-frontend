import React, { useState, useEffect } from 'react';

import { getPlaylists } from '../api/playlist/getPlaylists';
import { PlaylistItem } from '../components/PlaylistItem';

export function Home() {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetch() {
      setPlaylists(await getPlaylists());
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
