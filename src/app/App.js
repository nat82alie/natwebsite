import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import './App.css';

/**
 * App class
 */
class App extends Component {
  /**
   * Render the App component
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router>
          <Routes/>
        </Router>
        <Footer/>
        <div id="whitespace-chunk"/>
      </div>
    );
  };
}

export default App;
