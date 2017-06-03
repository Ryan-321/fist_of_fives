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
      currentSubject: ''
    }
    this.usersRef = database.ref('/users')
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

  handleClick (subject) {
    this.setState({currentSubject: subject})
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
              <SubjectContainer handleClick={this.handleClick} />
              <Vote currentUser={currentUser} currentSubject={currentSubject} />
            </div>
          </section>
          : <SignIn />
        }
      </div>
    )
  }
}

export default Main
