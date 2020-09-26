import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './app/home/home';
import Resume from './app/resume/resume';
import Links from './app/links/links';
import MyLinks from './app/links/my-links/my-links';
import BLMLinks from './app/links/blm-links/blm-links';
import EmailForm from './app/email-form/email-form';

// a react routing guide: https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// mimicked Routes const from: https://github.com/Kornil/simple-react-app/blob/master/src/Routes.jsx
const Routes = () => (
  <Switch>
    <Route path="/resume.html" component={Resume}/>
    <Route path="/links.html" component={Links}/>
    <Route path="/mylinks.html" component={MyLinks}/>
    <Route path="/blmlinks.html" component={BLMLinks}/>
    <Route path="/emailnatalie.html" component={EmailForm}/>
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
