import React, { Component } from 'react'
import { database } from './firebase'

class Material extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subjects: [],
      subject: ''
    }

    this.materialRef = database.ref('/materials')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.materialRef.push({subject: this.state.subject})
  }

  // componentDidMount () {
  //   this.marterialRef.once('value').then(function (snapshot) {
  //     console.log('promise', snapshot.val())
  //   })
  //   // need to put materials in a list
  // }

  render () {
    const { subject } = this.state
    return (
      <section className='Material'>
        <h1>Current Subject: </h1>
        <form>
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
      </section>
    )
  }
}

export default Material
