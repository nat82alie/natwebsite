import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import PicOfMe from '../../pic_of_me.jpg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6" className="home-typography">
          Hi, I'm Natalie.
        </Typography>
        <Typography variant="body1" className="home-typography">
          This is a simple React application to showcase that I, in fact, am capable of developing a web application.
          I decided that aesthetically I should do something that amuses me, so the site is rubber duck themed.
          Maybe it will help me figure out my issues.
        </Typography>
        <Typography variant="body1" className="home-typography">
          I graduated from Cal Poly SLO in March of 2019 with my Bachelors in Computer Science.
          While I never took a web class at school, I have a smidge over 2 years of professional experience with it.
          I have enjoyed working with modern frameworks such as React, Angular, and Backbone,
          and have also had the slightly lesser pleasure of reconstructing some really ugly framework-less code.
          While I primarily consider myself a front end developer, I have continuously written back end components to
          retrieve and process data to accomodate my front end tasks (aka I am perfectly comfortable with PHP and MySQL too).
        </Typography>
        <Typography variant="body1" className="home-typography">
          I grew up in Washington, have been in California for the past 6 years, and am currently squatting in Minnesota
          until I find a job wherever that may be. And by "wherever" I mean Colorado, Oregon, Washington, Minnesota, or California,
          because I do have preferences.
        </Typography>
        <Typography variant="body1" className="home-typography">
          Here is a photo of me so you can put a face to the name:
        </Typography>
        <div id="natalie-pic-container">
          <img id="natalie-pic" src={PicOfMe} alt="Natalie Wagner"/>
        </div>
      </div>
    );
  }
}

export default Home;
