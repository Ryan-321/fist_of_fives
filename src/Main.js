import React, { Component } from 'react';
import { auth, database } from './firebase';
import SignIn from './SignIn';
import Vote from './Vote'
import UserInfo from './UserInfo';
import './Main.css';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: null,
      polls: {}
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      if(currentUser) {
        console.log(currentUser);
        this.setState({ currentUser }); // set the state to user logged in
      }
    })
  }
  
  render () {
    const { currentUser } = this.state;
    return (
      <div className="Main">
        <header className="Main--header">
          <h1>Fist of Fives</h1>
        </header>
        {currentUser
          ? <section className="Main--section-container">
            <UserInfo photoURL={currentUser.photoURL}/>
            <Vote />
          </section>
          : <SignIn />
        }
      </div>
    );
  }
}

export default Main;
