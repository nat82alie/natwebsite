import React, { Component } from 'react';
import Navbar from './navbar/navbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router>
          <Routes/>
        </Router>
      </div>
    );
  };
}

export default App;
