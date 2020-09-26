import React, { Component } from 'react';
import MyResume from '../../resources/Wagner_Resume.pdf';
import './resume.css';

/**
 * Resume class
 */
class Resume extends Component {
  /**
   * Render the Resume component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="page-container">
        <embed src={MyResume} width="800px" height="1069px"></embed>
      </div>
    );
  }
}

export default Resume;
