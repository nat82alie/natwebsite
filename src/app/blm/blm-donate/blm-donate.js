import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { createBullet } from '../common/common';

/**
 * BLMDonate class
 */
class BLMDonate extends Component {
  /**
   * Render the BLMDonate component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6">
          Donate:
        </Typography>
        <ul>
          {createBullet('SLO Bail Fund', null, 'https://www.paypal.com/paypalme/SLOBailFund')}
          {createBullet('Bail Funds (by state)', null, 'https://www.communityjusticeexchange.org/nbfn-directory')}
          {createBullet('Homeless Black Trans Women Fund', null, 'https://www.gofundme.com/f/homeless-black-trans-women-fund')}
        </ul>
      </div>
    );
  }
}

export default BLMDonate;
