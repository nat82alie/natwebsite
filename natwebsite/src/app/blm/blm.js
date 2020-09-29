import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

/**
 * BLM class
 */
class BLM extends Component {
  /**
   * Render the BLM component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6" style={{paddingBottom: '10px'}}>
          In case you haven't heard, Black Lives Matter.
        </Typography>
        <Typography variant="body2">
          It's not just up to Black people and POC to advocate for their humanity- it is crucial that white people
          use their privilege to amplify these voices. That's why I'm providing links with information regarding
          systemic racism in the US, as well as links to petitions you can sign and opportunities to donate.
          {/* It's not just up to Black people and POC to advocate for their humanity- it is crucial that white people
          use their privilege to amplify these voices. That's why I'm providing links
          with <a href="./blm-info">information</a> regarding systemic racism in the US, as well as links
          to <a href="./blm-petitions">petitions</a> you can sign and opportunities to <a href="./blm-donate">donate</a>. */}
        </Typography>
        <p>
          <a href="./blm-info.html">Information</a>
        </p>
        <p>
          <a href="./blm-petitions.html">Petitions</a>
        </p>
        <p>
          <a href="./blm-donate.html">Donate</a>
        </p>
      </div>
    );
  }
}

export default BLM;
