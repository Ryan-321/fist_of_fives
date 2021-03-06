import { database } from './firebase'

const voteHelper = {
  minusVote: (key, oldVote) => {
    database.ref(`/subjects/${key}/votes/${oldVote}`).once('value').then((snapshot) => {
      var currentValue = snapshot.val()
      if (currentValue > 0) {
        currentValue--
        database.ref(`/subjects/${key}/votes`)
        .child(oldVote)
        .set(currentValue)
      }
    })
  },
  addVote: (key, value) => {
    database.ref(`/subjects/${key}/votes/${value}`).once('value').then((snapshot) => {
      var currentValue = snapshot.val()
      currentValue++
      database.ref(`/subjects/${key}/votes`)
      .child(value)
      .set(currentValue)
    })
  },
  findUserAndUpdate: (key, user, value) => {
    // NOTE probably could split this up into smaller functions
    var query = database.ref(`/subjects/${key}/voted`)
    query.once('value').then((snapshot) => {
      let userFound = false
      let votedFound = snapshot.val()
      if (votedFound) {
        snapshot.forEach((child) => {
          if (user === child.val().name) {
            const oldVote = child.val().vote
            voteHelper.minusVote(key, oldVote)
            // NOTE  why wasn't 'this' working here ^w/ bind
            query.child(child.key).update({vote: value})
            userFound = true
          }
        })
      } else if (userFound || !votedFound) {
        database.ref(`/subjects/${key}/voted`)
        .push({name: user, vote: value})
      }
    })
  },
  getVotes (key) {
    const query = database.ref(`/subjects/${key}/votes`)
    let buildVotes = query.once('value').then((snapshot) => {
      let votes = []
      snapshot.forEach((child) => {
        votes.push(child.val())
      })
      return votes
    })
    return buildVotes
  }
}

export default voteHelper
