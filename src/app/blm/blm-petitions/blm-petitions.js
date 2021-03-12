import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { createBullet } from '../common/common';

/**
 * BLMPetitions class
 */
class BLMPetitions extends Component {
  /**
   * Render the BLMPetitions component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6">
          Petitions:
        </Typography>
        <ul>
          {createBullet('George Floyd',
            `was suffocated to death by 4 police officers after being accused of writing a counterfeit check. His death
              (5/25/20) triggered an ongoing series of protests against racism and the systemic opression of
              BIPOC (Black, Indigenous, and other People of Color)`,
            'https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd')}
          {createBullet('Jacob Blake',
            `was shot 7 times in the back in front of his children by police. The police were only there to handle
              a fight, which Jacob had already broken up and was walking back to his car unarmed`,
            'https://www.change.org/p/tony-evers-charge-the-cops-who-shot-jacob-blake')}
          {createBullet('Breonna Taylor',
            `was murdered in her sleep by policemen who broke into her home. They are trying to get away with it by
              coercing her boyfriend (who was there) to "admit" she was part of some drug ring in exchange for a reduced
              sentence. A sentence for what, you ask? For aiming a gun at midnight intruders who broke into his home, after they
              murdered his girlfriend. No, the police were not in uniform, and no, they did not knock or make themselves known`,
            'https://www.change.org/p/andy-beshear-justice-for-breonna-taylor')}
          {createBullet('David McAtee',
            `was out for a social gathering past 9pm (a poorly implemented last-minute curfew implemented by the city
              of Los Angeles when the string of BLM protests began) when police shot and killed him`,
            'https://www.change.org/p/louisville-mayor-greg-fischer-justice-for-david-mcatee')}
          {createBullet('Tianna Arata',
            'is facing 15 years in prison for leading peaceful protests in San Luis Obispo',
            'https://www.change.org/p/slo-county-district-attorney-support-our-young-protest-leaders')}
          {createBullet('Elijah McClain',
            'was murdered by 4 policemen on his way home from buying tea',
            'https://www.change.org/p/adams-county-district-attorney-justice-for-elijah-mcclain-48a81830-f891-4b04-ba28-c2625b916b96')}
          {createBullet('Anthony McClain',
            `was shot and killed by police at a traffic stop (8/25/20), only a few days shy of the first anniversary of when
              his brother, Elijah McClain, was also murdered by police`,
            'https://act.colorofchange.org/sign/anthony-mcclain')}
          {createBullet('Ahmaud Arbery',
            `was out for a run when two white men chased him in their car to shoot and kill him. A friend of the murderers
              followed in another car - not to stop them, but to FILM the incident, which then circulated the internet`,
            'https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud')}
          {createBullet('Poisoned Immigrants',
            `- ICE has been spraying detergent on immigrants held at the Adelanto Detention Center until their eyes are bleeding
              and their insides are burning`,
            'https://www.change.org/p/change-org-stop-ice-from-poisoning-immigrants')}
          {createBullet('Julius Jones',
            `has spent nearly 2 decades on death row for a murder he did not commit. He was 19 when he was convicted,
              and remains incarcerated despite that his co-defendant admitted to being involved in the crime and setting Julius up`,
            'https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma')}
          {createBullet('End Qualified Immunity',
            `- seems like a theme here, Black people getting murdered by cops. Maybe we should repeal the Qualified Immunity Act
              of 1967 so that police officers are held accountable for their actions. Unchecked power ALWAYS leads to
              abuse of said power. If you don't believe me, read up on the Stanford Prison Experiment`,
            'https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma')}
        </ul>
      </div>
    );
  }
}

export default BLMPetitions;
