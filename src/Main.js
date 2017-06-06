import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Vote from './Vote'
import UserInfo from './UserInfo'
import SubjectContainer from './SubjectContainer'
import voteHelper from './VoteHelper'
import './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      currentSubject: '',
      currentSubjectId: ''
    }
    this.handleUser = this.handleUser.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        console.log(currentUser)
        this.setState({ currentUser })
      }
    })
  }

  handleUser (currentUser) {
    this.setState({ currentUser })
  }

  handleClick (id) {
    database.ref(`/subjects/${id}`).once('value').then((snapshot) => {
      this.setState({currentSubject: snapshot.val().subject})
      this.setState({currentSubjectId: id})
    })
  }

  handleVote (value) {
    var key = this.state.currentSubjectId
    var user = this.state.currentUser.displayName
    if (key) {
      voteHelper.findUserAndUpdate(key, user, value)
      voteHelper.addVote(key, value)
    }
  }

  render () {
    const { currentUser, currentSubject } = this.state
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
            </div>
          </section>
          : <SignIn />
        }
      </div>
    )
  }
}

export default Main
