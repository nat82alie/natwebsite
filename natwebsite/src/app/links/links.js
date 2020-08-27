import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './links.css';

/**
 * Links class
 */
class Links extends Component {
  /**
   * Render the Links component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <Typography variant='h6'>
          My Links:
        </Typography>
        <p>
          <a href="https://www.linkedin.com/in/natwag/">LinkedIn Profile</a>
        </p>
        <p>
          <a href="https://github.com/nat82alie">GitHub Profile</a>
        </p>
        <p>
          <a href="https://www.reddit.com/r/proplifting/">Favorite Subreddit</a>
        </p>
      </div>
    );
  }
}

export default Links;
