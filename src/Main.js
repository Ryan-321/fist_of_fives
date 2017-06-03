import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Vote from './Vote'
import UserInfo from './UserInfo'
import SubjectContainer from './SubjectContainer'
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
    console.log(value)
  }

  render () {
    const { currentUser, currentSubject, currentSubjectId } = this.state
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
              <SubjectContainer handleClick={this.handleClick} />
              <Vote
                currentUser={currentUser}
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
