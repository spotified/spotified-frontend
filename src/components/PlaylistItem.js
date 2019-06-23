import React, { useState } from 'react';
import { FiMusic, FiTag } from 'react-icons/fi';

import css from './PlaylistItem.module.css';

export function PlaylistItem({ playlist }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div onClick={toggleOpen} className={css.item}>
      <span className={css.count}>
        <FiMusic className={css.countIcon} />
        {playlist.tracks.length}
      </span>
      <span className={css.name}>{playlist.name}</span>
      {playlist.tags.length > 0 && (
        <span className={css.tags}>
          <FiTag className={css.tagsIcon} /> {playlist.tags.join(', ')}
        </span>
      )}
      {isOpen && (
        <ol className={css.tracks}>
          {playlist.tracks.length === 0
            ? 'No tracks'
            : playlist.tracks.map(track => (
                <li key={track.id}>
                  <span role="img" aria-label="Likes">
                    ❤️
                  </span>{' '}
                  {track.votes.ups}{' '}
                  <span role="img" aria-label="Dislikes">
                    😩
                  </span>{' '}
                  {track.votes.downs}
                  <p>
                    {track.name} by {track.artists[0].name}
                  </p>
                </li>
              ))}
        </ol>
      )}
    </div>
  );
}
