import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

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
        <Typography variant="h6">
          Links:
        </Typography>
        <p>
          <a href="./mylinks.html">My Links</a>
        </p>
        <p>
          <a href="./blmlinks.html">BLM Links</a>
        </p>
      </div>
    );
  }
}

export default Links;
