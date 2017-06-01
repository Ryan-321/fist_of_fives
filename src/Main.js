import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import Vote from './Vote'
import UserInfo from './UserInfo'
import Material from './Material'
import './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.handleUser = this.handleUser.bind(this)
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

  render () {
    const { currentUser } = this.state
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
              <Material />
              <Vote currentUser={currentUser} />
            </div>
          </section>
          : <SignIn />
        }
      </div>
    )
  }
}

export default Main
