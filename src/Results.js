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
              return <li key={index} className='Results--li'>
                <span className='Results--span'>{index}</span>
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
