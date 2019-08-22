import React, { useState } from 'react';
import { FiMusic, FiTag } from 'react-icons/fi';
import classnames from 'classnames';

import css from './PlaylistItem.module.css';

export function PlaylistItem({ playlist, onUpvote, onDownvote }) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div className={classnames(css.item, isOpen && css.itemOpen)}>
      <div onClick={toggleOpen} className={css.clickable}>
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
      </div>
      {isOpen && (
        <ol className={css.tracks}>
          {playlist.tracks.length === 0
            ? 'No tracks'
            : playlist.tracks.map(track => (
                <li key={track.id}>
                  <button
                    onClick={onUpvote(playlist.pk, track.pk)}
                    className={css.button}
                  >
                    <span role="img" aria-label="Likes">
                      ❤️
                    </span>
                  </button>{' '}
                  {track.votes.ups}{' '}
                  <button
                    onClick={onDownvote(playlist.pk, track.pk)}
                    className={css.button}
                  >
                    <span role="img" aria-label="Dislikes">
                      😩
                    </span>
                  </button>{' '}
                  {track.votes.downs}
                  <p>
                    {track.name} by{' '}
                    {track.artists.map(artist => artist.name).join(', ')}
                  </p>
                </li>
              ))}
        </ol>
      )}
    </div>
  );
}
