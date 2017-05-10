import React, { Component } from 'react';
import { auth, database } from './firebase';
import SignIn from './SignIn';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main--header">
          <h1>Fist of Fives</h1>
        </header>
        <SignIn />
      </div>
    );
  }
}

export default Main;
