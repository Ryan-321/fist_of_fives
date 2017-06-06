import React, { Component } from 'react'
import { database } from './firebase'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSubjectId: ''
    }
    // this.votesRef = database.ref(`/subjects/${this.state.currentSubjectId}/votes`)
    // this.votesRef.once('value')
    //              .then((snapshot) => {
    //                console.log(snapshot.val())
    //              })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentSubjectId !== this.props.currentSubjectId) {
      this.setState({
        currentSubjectId: nextProps.currentSubjectId
      })
    }
  }

  render () {
    return (
      <h1>
        {this.state.currentSubjectId}
      </h1>
    )
  }
}

export default Results
