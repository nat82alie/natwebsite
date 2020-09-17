import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './blm-links.css';

/**
 * BLMLinks class
 */
class BLMLinks extends Component {
  /**
   * Creates a list bullet for a given link
   * @param {string} title
   * @param {string|null} description
   * @param {string} url
   */
  createBullet(title, description, url) {
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

  /**
   * Render the BLMLinks component
   * @returns {ReactElement}
   */
  render() {
    let infoList = (
      <ul>
        {this.createBullet('Weapons of Math Destruction',
          `(pdf of book) - While this book isn't exculsively about Black lives, there are exerpts throughout that explain
            mathematically why Black people have higher incarceration rates from higher level of policing`,
          'http://governance40.com/wp-content/uploads/2019/03/Weapons-of-Math-Destruction-Cathy-ONeil.pdf')}
        {this.createBullet('A visual representation of white privilege', '(photo)',
          'https://www.instagram.com/p/CEpHzwYg1xb/')}
        {this.createBullet('Food for thought for racism deniers',  '(photo)',
          'https://www.instagram.com/p/CEr0fkFhPtG/')}
        {this.createBullet('Difference in complimenting Black women vs White women', '(short clip)',
          'https://twitter.com/cybervalkyria/status/1302603307530231810')}
        {this.createBullet('Black 12 year old with toy gun vs. White 17 year old with firearm',
          `(photo) - Police shot and killed a 12 year old with a toy gun (Tamir Rice), yet allowed an armed 17 year old go home
            despite having just murdered two people and injured one. The difference? Their race. See article subheading
            "How 'gun populism' helps us understand the police reaction in Wisconsin"`,
          'https://www.vox.com/2020/8/27/21404117/kenosha-kyle-rittenhouse-police-gun-populism')}
        {this.createBullet('Discrepancy in news headlines',
          `(photo) - Both age 17, one went on a murdering spree (which police ignored) and the other got murdered (by police).
            The White murderer gets a news headline that evokes sympathy, whereas the Black murder victim gets his reputation
            stomped into the dirt to make people not care about his death`,
          'https://www.instagram.com/p/CEX_xzrJa99/')}
      </ul>
    );

    let petitionList = (
      <ul>
        {this.createBullet('George Floyd',
          `was suffocated to death by 4 police officers after being accused of writing a counterfeit check. His death
            (5/25/20) triggered an ongoing series of protests against racism and the systemic opression of
            BIPOC (Black, Indigenous, and other People of Color)`,
          'https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd')}
        {this.createBullet('Jacob Blake',
          `was shot 7 times in the back in front of his children by police. The police were only there to handle
            a fight, which Jacob had already broken up and was walking back to his car unarmed`,
          'https://www.change.org/p/tony-evers-charge-the-cops-who-shot-jacob-blake')}
        {this.createBullet('Breonna Taylor',
          `was murdered in her sleep by policemen who broke into her home. They are trying to get away with it by
            coercing her boyfriend (who was there) to "admit" she was part of some drug ring in exchange for a reduced
            sentence. A sentence for what, you ask? For aiming a gun at midnight intruders who broke into his home, after they
            murdered his girlfriend. No, the police were not in uniform, and no, they did not knock or make themselves known`,
          'https://www.change.org/p/andy-beshear-justice-for-breonna-taylor')}
        {this.createBullet('David McAtee',
          `was out for a social gathering past 9pm (a poorly implemented last-minute curfew implemented by the city
            of Los Angeles when the string of BLM protests began) when police shot and killed him`,
          'https://www.change.org/p/louisville-mayor-greg-fischer-justice-for-david-mcatee')}
        {this.createBullet('Tianna Arata',
          'is facing 15 years in prison for leading peaceful protests in San Luis Obispo',
          'https://www.change.org/p/slo-county-district-attorney-support-our-young-protest-leaders')}
        {this.createBullet('Elijah McClain',
          'was murdered by 4 policemen on his way home from buying tea',
          'https://www.change.org/p/adams-county-district-attorney-justice-for-elijah-mcclain-48a81830-f891-4b04-ba28-c2625b916b96')}
        {this.createBullet('Anthony McClain',
          `was shot and killed by police at a traffic stop (8/25/20), only a few days shy of the first anniversary of when
            his brother, Elijah McClain, was also murdered by police`,
          'https://act.colorofchange.org/sign/anthony-mcclain')}
        {this.createBullet('Ahmaud Arbery',
          `was out for a run when two white men chased him in their car to shoot and kill him. A friend of the murderers
            followed in another car - not to stop them, but to FILM the incident, which then circulated the internet`,
          'https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud')}
        {this.createBullet('Poisoned Immigrants',
          `- ICE has been spraying detergent on immigrants held at the Adelanto Detention Center until their eyes are bleeding
            and their insides are burning`,
          'https://www.change.org/p/change-org-stop-ice-from-poisoning-immigrants')}
        {this.createBullet('Julius Jones',
          `has spent nearly 2 decades on death row for a murder he did not commit. He was 19 when he was convicted,
            and remains incarcerated despite that his co-defendant admitted to being involved in the crime and setting Julius up`,
          'https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma')}
        {this.createBullet('End Qualified Immunity',
          `- seems like a theme here, Black people getting murdered by cops. Maybe we should repeal the Qualified Immunity Act
            of 1967 so that police officers are held accountable for their actions. Unchecked power ALWAYS leads to
            abuse of said power. If you don't believe me, read up on the Stanford Prison Experiment`,
          'https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma')}
      </ul>
    );

    let donateList = (
      <ul>
        {this.createBullet('SLO Bail Fund', null, 'https://www.paypal.com/paypalme/SLOBailFund')}
        {this.createBullet('Bail Funds (by state)', null, 'https://www.communityjusticeexchange.org/nbfn-directory')}
        {this.createBullet('Homeless Black Trans Women Fund', null, 'https://www.gofundme.com/f/homeless-black-trans-women-fund')}
      </ul>
    );

    return (
      <div className="page-container">
        <Typography variant="h6">
          In case you haven't heard, Black Lives Matter.
        </Typography>
        <Typography variant="body2">
          It's not just up to Black people and POC to advocate for their humanity- it is crucial that white people
          use their privilege to amplify these voices. That's why I'm providing links
          with <a href="#info">information</a> regarding systemic racism in the US, as well as links
          to <a href="#petitions">petitions</a> you can sign and opportunities to <a href="#donate">donate</a>.
        </Typography>

        <div id="info" className="blm-section">
          <Typography variant="subtitle1">
            Information:
          </Typography>
          {infoList}
        </div>

        <div id="petitions" className="blm-section">
          <Typography variant="subtitle1">
            Petitions:
          </Typography>
          {petitionList}
        </div>

        <div id="donate" className="blm-section">
          <Typography variant="subtitle1">
            Donate:
          </Typography>
          {donateList}
        </div>
      </div>
    );
  }
}

export default BLMLinks;
