import React, { Component } from 'react'
import { auth } from './firebase'
import './UserInfo.css'

class UserInfo extends Component {
  constructor (props) {
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut () {
    auth.signOut()
    this.props.handleUser()
  }

  render () {
    const { photoURL, displayName } = this.props.currentUser
    return (
      <aside className='UserInfo'>
        <img src={photoURL} alt='Picture of User' className='UserInfo--img' />
        <h3>{displayName}</h3>
        <button onClick={this.handleSignOut}>
          Sign Out
        </button>
      </aside>
    )
  }
}

export default UserInfo
