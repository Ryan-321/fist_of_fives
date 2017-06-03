import React, { Component } from 'react'
import { database } from './firebase'
import Subject from './Subject'
import './SubjectContainer.css'

class SubjectContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subjects: [],
      subject: ''
    }
    this.subjectsRef = database.ref('/subjects')
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.subjectsRef.push({subject: this.state.subject})
    this.updateState()
  }

  updateState () {
    this.subjectsRef.once('value').then((snapshot) => {
      let obj = snapshot.val()
      let arr = []
      for (var key in obj) {
        arr.push(obj[key].subject)
      }
      this.setState({subjects: arr})
    })
  }

  componentDidMount () {
    this.updateState()
  }

  render () {
    const { subject, subjects } = this.state
    const { handleClick } = this.props
    return (
      <section className='SubjectContainer'>
        <h3 className='SubjectContainer--h3'>Pick a Subject or new: </h3>
        <form className='SubjectContainer--form'>
          <input
            type='text'
            value={subject}
            placeholder='Name a subject to feedback'
            onChange={(event) => this.setState({ subject: event.target.value })}
          />
          <button
            onClick={this.handleSubmit}
            >
              Submit
          </button>
        </form>
        <ul>
          {
            subjects.map((sub, key) => {
              return <Subject
                        key={key}
                        subject={sub}
                        handleClick={handleClick}
                      />
            })
          }
        </ul>
      </section>
    )
  }
}

export default SubjectContainer
