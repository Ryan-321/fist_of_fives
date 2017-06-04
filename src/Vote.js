import React, { Component } from 'react'
import database from 'firebase'
import './Vote.css'

class Vote extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { currentSubject, handleVote } = this.props
    return (
      <div className='Vote'>
        <h2>Subject: {currentSubject}</h2>
        <div className='Vote--button-container'>
          <button className='Vote--button' onClick={() => handleVote('one')}>One</button>
          <button className='Vote--button' onClick={() => handleVote('two')}>Two</button>
          <button className='Vote--button' onClick={() => handleVote('three')}>Three</button>
          <button className='Vote--button' onClick={() => handleVote('four')}>Four</button>
          <button className='Vote--button' onClick={() => handleVote('five')}>Five</button>
        </div>
      </div>
    )
  }
}

export default Vote
