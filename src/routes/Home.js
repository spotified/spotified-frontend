import React, { useState, useEffect } from 'react';

import { upvoteTrack, downvoteTrack } from '../api/local/tracks/voteTrack';
import { updatePlaylistVote, UP, DOWN } from '../services/updatePlaylistVote';
import { getPlaylistsWithTracks } from '../services/getPlaylistsWithTracks';
import { PlaylistItem } from '../components/PlaylistItem';

export function Home() {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetch() {
      const playlists = await getPlaylistsWithTracks();
      setPlaylists(playlists);
      setLoading(false);
    }
    fetch();
  }, []);

  const onUpvote = (playlistId, trackId) => () => {
    upvoteTrack(playlistId, trackId);
    setPlaylists(updatePlaylistVote(playlists, playlistId, trackId, UP));
  };
  const onDownvote = (playlistId, trackId) => () => {
    downvoteTrack(playlistId, trackId);
    setPlaylists(updatePlaylistVote(playlists, playlistId, trackId, DOWN));
  };

  if (isLoading) {
    return <p style={{ paddingLeft: '1.5rem' }}>Loading playlists</p>;
  }

  return playlists.map(playlist => (
    <PlaylistItem
      key={playlist.pk}
      playlist={playlist}
      onUpvote={onUpvote}
      onDownvote={onDownvote}
    />
  ));
}
