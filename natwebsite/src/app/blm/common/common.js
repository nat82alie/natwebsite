import React from 'react';
import { Typography } from '@material-ui/core';

/**
 * Creates a list bullet for a given link
 * @param {string} title
 * @param {string|null} description
 * @param {string} url
 */
function createBullet(title, description, url) {
  return (
    <li>
      <Typography variant="body2" className="blm-link-title">
        <a href={url} className="blm-link">
          {title}
        </a> {description}
      </Typography>
    </li>
  );
}

export { createBullet };
