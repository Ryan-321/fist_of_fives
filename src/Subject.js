import React, { Component } from 'react'
import './Subject.css'

class Subject extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { subject, handleClick, id } = this.props
    return (
      <li className='Subject' onClick={() => handleClick(id)}>
        {subject}
        <span className='Subject--span'>X</span>
      </li>
    )
  }
}

export default Subject
