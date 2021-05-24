// <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>
// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyChUUv3b5EKb5e36HMU4ZvW1gaLAGEcndY',
  authDomain: 'disney-clone-a0123.firebaseapp.com',
  projectId: 'disney-clone-a0123',
  storageBucket: 'disney-clone-a0123.appspot.com',
  messagingSenderId: '726334983906',
  appId: '1:726334983906:web:a470e7abe363fbc62918bb'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const storage = firebase.storage()
export const db = firebase.firestore()

export default firebase
