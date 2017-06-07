import React, { Component } from 'react'
import { database } from './firebase'
import './Results.css'

class Results extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {votes} = this.props
    return (
      <div className='Results'>
        <h2>Results: </h2>
        <ul>
          {
            votes.map((vote, index) => {
              let num = index + 1
              return <li key={index} className='Results--li'>
                <span className='Results--span'>Voted: {num}</span>
                {vote}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Results
