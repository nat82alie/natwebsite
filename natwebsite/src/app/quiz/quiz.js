import React, { Component } from 'react';
import './quiz.css';
import { Typography } from '@material-ui/core';

class Quiz extends Component {
  render() {
    return (
      <div className="page-container">
        <Typography variant="h6">
          Quiz!
        </Typography>
      </div>
    );
  }
}

export default Quiz;
