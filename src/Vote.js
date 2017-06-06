import React, { Component } from 'react'
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
          <button className='Vote--button' onClick={() => handleVote(1)}>One</button>
          <button className='Vote--button' onClick={() => handleVote(2)}>Two</button>
          <button className='Vote--button' onClick={() => handleVote(3)}>Three</button>
          <button className='Vote--button' onClick={() => handleVote(4)}>Four</button>
          <button className='Vote--button' onClick={() => handleVote(5)}>Five</button>
        </div>
      </div>
    )
  }
}

export default Vote
