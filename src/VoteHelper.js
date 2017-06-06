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
    var query = database.ref(`/subjects/${key}/voted`)
    query.once('value').then((snapshot) => {
      let userFound = false
      let votedFound = snapshot.val()
      if (votedFound) {
        snapshot.forEach(function (child) {
          if (user === child.val().name) {
            const oldVote = child.val().vote
            voteHelper.minusVote(key, oldVote)
            query.child(child.key).update({vote: value})  // reset users vote record
            userFound = true
          }
        })
      } else if (userFound || !votedFound) {
        database.ref(`/subjects/${key}/voted`)
        .push({name: user, vote: value})
      }
    })
  }
}

export default voteHelper
