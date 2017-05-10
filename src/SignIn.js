import React, { Component }  from 'react';
import { auth, googleAuthProvider, githubAuthProvider } from './firebase';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <header className="SignIn--header">
          <h2>Real Time Polling</h2>
          <p>Find out what your class is thinking.  Load a subject, tell them to log in and vote. Get your results real time.</p>
        </header>
        <div className="SignIn--section-wrapper">
          <section className="SignIn--section">
            <img src="/images/google_icon.png" alt="Github Logo" className="Icon--google" />
            <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
              Sign In
            </button>
          </section>
          <span>or</span>
          <section className="SignIn--section">
            <img src="/images/github_logo.png" alt="Github Logo" className="Icon--github" />
            <button onClick={() => auth.signInWithPopup(githubAuthProvider)}>
              Sign In
            </button>
          </section>
        </div>
      </div>
    )
  }
}

export default SignIn;
