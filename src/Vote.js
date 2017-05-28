import React, { Component } from 'react'
import database from 'firebase'
import './Vote.css'

class Vote extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (value) {
    console.log('value', value)
    console.log('currentUser', this.props.currentUser.displayName)
    // const currentUser = this.props.currentUser
    // database.ref('/material')
    //   .child('vote')
    //   .child(value)
    //   .child(currentUser.uid)
    //   .set(currentUser.displayName)
  }

  render () {
    return (
      <div className='Vote'>
        <div className='Vote--button-container'>
          <button className='Vote--button' onClick={() => this.handleClick(1)}>One</button>
          <button className='Vote--button' onClick={() => this.handleClick(2)}>Two</button>
          <button className='Vote--button' onClick={() => this.handleClick(3)}>Three</button>
          <button className='Vote--button' onClick={() => this.handleClick(4)}>Four</button>
          <button className='Vote--button' onClick={() => this.handleClick(5)}>Five</button>
        </div>
      </div>
    )
  }
}

export default Vote
