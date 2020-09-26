import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Typography } from '@material-ui/core';
import './navbar.css';

/**
 * Navbar Class
 * In case I want to cry over muicss dropdowns instead of my own, better-behaved
 * implementation: https://www.muicss.com/docs/v1/react/dropdowns
 * Or Boostrap's dropdown, even tho I'm using MUI framework:
 * https://react-bootstrap.github.io/components/dropdowns/
 * onHover event DNE in React https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
 */
class Navbar extends Component {
  /**
   * Navbar constructor
   */
  constructor() {
    super();
    this.dropdownClass = 'navbar-dropdown';
  }
  
  /**
   * Navigate to selected page
   * @param {string} page path of the page to navigate to
   */
  navigateTo(page) {
    window.location.href = page;
  }

  /**
   * Open the dropdown for a menu item
   * @param {React.element} ul html list of dropdown items
   */
  openDropdown(ul) {
    ReactDOM.render(ul, document.getElementById('navbar-secondary'));
  }

  /**
   * Close the dropdown for a menu item
   * NOTE: If i want to add the timeout back because it looks nice, consider the bug:
   * if i hover over button X, move off it then get back on it before the timeout ends,
   * then the dropdown will not reappear.
   * Also, consider using component state to handle whether the dropdown is open:
   * https://reactjs.org/docs/handling-events.html
   * @param {Event} event
   */
  closeDropdown(event) {
    // info on nativeEvent found here https://reactjs.org/docs/events.html
    // .contains does not like when i use this.dropdownClass instead of 'navbar-dropdown'
    if (!event.nativeEvent.toElement.classList.contains('navbar-dropdown')) {
      // setTimeout(() => {
        // NOTE: All elements & children related to the dropdown must have the 'navbar-dropdown'
        // class for this to work (ie div, ul, li, a)
        ReactDOM.unmountComponentAtNode(document.getElementById('navbar-secondary'));
      // }, 200);
    }
  }

  /**
   * Render the Navbar component
   * @returns {ReactElement}
   */
  render() {
    let linksDropdown = (
      <ul className="navbar-dropdown mui-dropdown__menu mui--is-open" style={{top: '39.5px'}}>
        <li className={this.dropdownClass} style={{backgroundColor: 'indianred'}}>
          <a href="mylinks.html" className={this.dropdownClass}>My Links</a>
        </li>
        <li className={this.dropdownClass} style={{backgroundColor: 'indianred'}}>
          <a href="blmlinks.html" className={this.dropdownClass}>BLM Links</a>
        </li>
      </ul>
    );

    return (
      <div id="navbar-container">
        <div id="navbar-title-container">
          <Typography id="navbar-title" variant="h2">
            NATALIE WAGNER
          </Typography>
        </div>
        <div id="navbar-buttons-container">
          <Button color="inherit" onClick={() => this.navigateTo('index.html')}>
            Home
          </Button>

          <Button color="inherit" onClick={() => this.navigateTo('resume.html')}>
            Resume
          </Button>

          <Button color="inherit" className={this.dropdownClass}
            onClick={() => this.navigateTo('links.html')}
            onMouseEnter={() => this.openDropdown(linksDropdown)}
            onMouseLeave={this.closeDropdown}>
            Links
          </Button>

          {/* <Button color="inherit" onClick={() => this.navigateTo('emailnatalie.html')}>
            Email Me
          </Button> */}

          <Button color="inherit" href={'mailto:nat82alie@gmail.com'}>
            Email Me
          </Button>

          <div id="navbar-secondary"
            onMouseLeave={this.closeDropdown}
            className={`${this.dropdownClass} mui-dropdown MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit`}
            style={{display: 'block', padding: '0px', borderWidth: '0px'}}>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
