import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { createBullet } from '../common/common';

/**
 * BLMInfo class
 */
class BLMInfo extends Component {
  /**
   * Render the BLMInfo component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6">
          Information:
        </Typography>
        <ul>
          {createBullet('Weapons of Math Destruction',
            `(pdf of book) - While this book isn't exculsively about Black lives, there are exerpts throughout that explain
              mathematically why Black people have higher incarceration rates from higher level of policing`,
            'http://governance40.com/wp-content/uploads/2019/03/Weapons-of-Math-Destruction-Cathy-ONeil.pdf')}
          {createBullet('A visual representation of white privilege', '(photo)',
            'https://www.instagram.com/p/CEpHzwYg1xb/')}
          {createBullet('Food for thought for racism deniers',  '(photo)',
            'https://www.instagram.com/p/CEr0fkFhPtG/')}
          {createBullet('Difference in complimenting Black women vs White women', '(short clip)',
            'https://twitter.com/cybervalkyria/status/1302603307530231810')}
          {createBullet('Black 12 year old with toy gun vs. White 17 year old with firearm',
            `(photo) - Police shot and killed a 12 year old with a toy gun (Tamir Rice), yet allowed an armed 17 year old go home
              despite having just murdered two people and injured one. The difference? Their race. See article subheading
              "How 'gun populism' helps us understand the police reaction in Wisconsin"`,
            'https://www.vox.com/2020/8/27/21404117/kenosha-kyle-rittenhouse-police-gun-populism')}
          {createBullet('Discrepancy in news headlines',
            `(photo) - Both age 17, one went on a murdering spree (which police ignored) and the other got murdered (by police).
              The White murderer gets a news headline that evokes sympathy, whereas the Black murder victim gets his reputation
              stomped into the dirt to make people not care about his death`,
            'https://www.instagram.com/p/CEX_xzrJa99/')}
        </ul>
      </div>
    );
  }
}

export default BLMInfo;
