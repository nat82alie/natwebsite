import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import './navbar.css';

class Navbar extends Component {
  navigateTo(page) {
    window.location.href = page;
  }

  render() {
    return (
      <div id="navbar-container">
        <Typography id="navbar-title-container" variant="h2">
          NATALIE WAGNER
        </Typography>
        <div id="navbar-buttons-container">
          <Button color="inherit" onClick={() => this.navigateTo('index.html')}>
            Home
          </Button>
          {/* <Button color="inherit" onClick={() => this.navigateTo('quiz.html')}>
            Quiz
          </Button> */}
          <Button color="inherit" onClick={() => this.navigateTo('links.html')}>
            My Links
          </Button>
          <Button color="inherit" onClick={() => this.navigateTo('emailnatalie.html')}>
            Email Me
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
