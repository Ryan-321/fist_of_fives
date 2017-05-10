import React, { Component } from 'react';
import './Vote.css';

class Vote extends Component {
  render () {
    return (
      <div className="Vote">
        <header className="Vote--header">
          <h1>Subject:</h1>
        </header>
        <div className="Vote--button-container">
          <button className="Vote--button">One</button>
          <button className="Vote--button">Two</button>
          <button className="Vote--button">Three</button>
          <button className="Vote--button">Four</button>
          <button className="Vote--button">Five</button>
        </div>
      </div>
    )
  }
}

export default Vote;
