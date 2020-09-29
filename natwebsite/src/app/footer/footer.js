import React, { Component } from 'react';
import { Button, IconButton, ButtonBase, Typography } from '@material-ui/core';
import './footer.css';

/**
 * Footer Class
 */
class Footer extends Component {
  /**
   * Navigate to selected page
   * @param {string} page path of the page to navigate to
   */
  navigateTo(page) {
    window.location.href = page;
  }

  /**
   * Render the Navbar component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div id="footer-container">
        <div id="links-title-container">
          <Typography variant="overline">
            My Links:
          </Typography>
        </div>
        <div id="my-links-container" style={{textAlign:'center'}}>
          <IconButton className="icon-btn" color="primary" aria-label="GitHub @nat82alie" component="span" size="small"
            onClick={() => this.navigateTo('https://github.com/nat82alie')}>
            <i className="fab fa-github-square"></i>
          </IconButton>
          <IconButton className="icon-btn" color="primary" aria-label="LinkedIn @natwag" component="span" size="small"
            onClick={() => this.navigateTo('https://www.linkedin.com/in/natwag/')}>
            <i className="fab fa-linkedin"></i>
          </IconButton>

          {/* <Button className="link-btn" color="inherit"
            onClick={() => this.navigateTo('https://github.com/nat82alie')}>
            <i class="fab fa-github-square"></i>
          </Button>

          <Button className="link-btn" color="inherit"
            onClick={() => this.navigateTo('https://www.linkedin.com/in/natwag/')}>
            <i class="fab fa-linkedin"></i>
          </Button> */}

          {/* <ButtonBase className="link-btn" color="inherit"
            onClick={() => this.navigateTo('https://github.com/nat82alie')}>
            <i class="fab fa-github-square"></i>
          </ButtonBase>

          <ButtonBase className="link-btn" color="inherit"
            onClick={() => this.navigateTo('https://www.linkedin.com/in/natwag/')}>
            <i class="fab fa-linkedin"></i>
          </ButtonBase> */}
        </div>
      </div>
    );
  }
}

export default Footer;
