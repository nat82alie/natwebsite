import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './app/home/home.js';
import Links from './app/links/links.js';
import EmailForm from './app/email-form/email-form';

// a react routing guide: https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// mimicked Routes const from: https://github.com/Kornil/simple-react-app/blob/master/src/Routes.jsx
const Routes = () => (
  <Switch>
    <Route path="/links.html" component={Links}/>
    <Route path="/emailnatalie.html" component={EmailForm}/>
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
