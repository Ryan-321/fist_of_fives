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
    this.setSubjects = this.setSubjects.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { subject } = this.state
    const user = this.props.currentUser.displayName
    const votes = {one: 0, two: 0, three: 0, four: 0, five: 0}
    this.subjectsRef.push({subject: subject, creator: user, votes})
    this.setSubjects()
  }

  setSubjects () {
    this.subjectsRef.once('value').then((snapshot) => {
      let obj = snapshot.val()
      let arr = []
      for (var key in obj) {
        const o = {id: key, subject: obj[key].subject}
        arr.push(o)
      }
      this.setState({subjects: arr})
    })
  }

  componentDidMount () {
    this.setSubjects()
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
            subjects.map((obj, key) => {
              return <Subject
                        key={obj.id}
                        id={obj.id}
                        subject={obj.subject}
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
