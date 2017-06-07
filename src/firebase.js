import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCzUizPWAVQd2Rla85zmCAa1l9FkihOBXw',
  authDomain: 'fist-of-fives.firebaseapp.com',
  databaseURL: 'https://fist-of-fives.firebaseio.com',
  projectId: 'fist-of-fives',
  storageBucket: 'fist-of-fives.appspot.com',
  messagingSenderId: '491343967179'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
