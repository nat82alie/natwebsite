import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './links.css';

class Links extends Component {
  navigateTo(page) {
    window.location.href = page;
  }

  render() {
    return (
      <div className="page-container">
        <Typography variant='h6'>
          My Links:
        </Typography>
        <p>
          <a href="https://www.linkedin.com/in/natwag/">LinkedIn Profile</a>
        </p>
        <p>
          <a href="https://github.com/nat82alie">GitHub Profile</a>
        </p>
        <p>
          <a href="https://www.reddit.com/r/proplifting/">Favorite Subreddit</a>
        </p>
        {/* <p>
          You're probably viewing this site because you got it from my resume,
          but I've got nothing to lose by offering you a PDF download of my resume <a>here</a>.
          Or, if you'd prefer, you can view the PDF in another browser tab <a>here</a>.
        </p> */}
      </div>
    );
  }
}

export default Links;
