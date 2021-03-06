import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Vote from './Vote'
import UserInfo from './UserInfo'
import SubjectContainer from './SubjectContainer'
import Results from './Results'

import voteHelper from './VoteHelper'
import './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      currentSubject: '',
      currentSubjectId: '',
      currentVotes: []
    }
    this.handleUser = this.handleUser.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.setState({ currentUser })
      }
    })
  }

  handleUser (currentUser) {
    this.setState({ currentUser })
  }

  handleClick (id) {
      database.ref(`/subjects/${id}`).once('value').then((snapshot) => {
        this.setState({
          currentSubject: snapshot.val().subject,
          currentSubjectId: id
        })
      }).then(() => {
        voteHelper.getVotes(id).then((votes) => {
          this.setState({currentVotes: votes})
      })
    })
  }

  handleVote (value) {
    new Promise((resolve, reject) => {
      let key = this.state.currentSubjectId
      let user = this.state.currentUser.displayName
      if (key) {
        voteHelper.findUserAndUpdate(key, user, value)
        voteHelper.addVote(key, value)
      }
      resolve(key)
    }).then((key) => {
      voteHelper.getVotes(key).then((votes) => {
        this.setState({currentVotes: votes})
      })
    })
  }

  render () {
    const { currentUser, currentSubject, currentVotes } = this.state
    return (
      <div className='Main'>
        <header className='Main--header'>
          <h1>Fist of Fives</h1>
        </header>
        {currentUser
          ? <section className='Main--section-container'>
            <UserInfo
              currentUser={currentUser}
              handleUser={this.handleUser}
            />
            <div className='Main--div-wrapper'>
              <SubjectContainer handleClick={this.handleClick} currentUser={currentUser} />
              <Vote
                currentSubject={currentSubject}
                handleVote={this.handleVote}
              />
              <Results votes={currentVotes} />
            </div>
          </section>
          : <SignIn />
        }
      </div>
    )
  }
}

export default Main
