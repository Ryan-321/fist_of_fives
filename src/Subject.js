import React, { Component } from 'react'
import './Subject.css'

class Subject extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { subject, handleClick } = this.props
    return (
      <li className='Subject' onClick={() => handleClick(subject)}>{subject}</li>
    )
  }
}

export default Subject
