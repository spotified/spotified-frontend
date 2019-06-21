import React, { useState } from 'react';
import { FiMusic, FiTag } from 'react-icons/fi';

import css from './PlaylistItem.module.css';

export function PlaylistItem({ playlist }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div onClick={toggleOpen} className={css.item}>
      <span className={css.name}>{playlist.name}</span>
      <span className={css.count}>
        <FiMusic className={css.countIcon} />
        {playlist.tracks.length}
      </span>
      {playlist.tags.length > 0 && (
        <span className={css.tags}>
          <FiTag className={css.tagsIcon} /> {playlist.tags.join(', ')}
        </span>
      )}
      {isOpen && (
        <ol className={css.tracks}>
          {playlist.tracks.map(track => (
            <li key={track.spotify_id}>
              <span role="img" aria-label="Likes">
                ❤️
              </span>{' '}
              {track.votes.ups}{' '}
              <span role="img" aria-label="Dislikes">
                😩
              </span>{' '}
              {track.votes.downs}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
