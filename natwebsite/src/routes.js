import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './app/home/home';
import Resume from './app/resume/resume';
// import EmailForm from './app/email-form/email-form';
import BLM from './app/blm/blm';
import BLMInfo from './app/blm/blm-info/blm-info';
import BLMPetitions from './app/blm/blm-petitions/blm-petitions';
import BLMDonate from './app/blm/blm-donate/blm-donate';

// a react routing guide: https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// mimicked Routes const from: https://github.com/Kornil/simple-react-app/blob/master/src/Routes.jsx
const Routes = () => (
  <Switch>
    <Route path="/resume.html" component={Resume}/>

    {/* <Route path="/emailnatalie.html" component={EmailForm}/> */}

    <Route path="/blm.html" component={BLM}/>
    <Route path="/blm-info.html" component={BLMInfo}/>
    <Route path="/blm-petitions.html" component={BLMPetitions}/>
    <Route path="/blm-donate.html" component={BLMDonate}/>

    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
