import React, { Component } from 'react'
import { database } from './firebase'

class Results extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { votes } = this.props
    console.log('votes', votes)
    return (
      <div>
        <h2>Results: </h2>
        <ul>
          {
            votes.map((vote, index) => {
              return <li key={index}>{vote}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Results
