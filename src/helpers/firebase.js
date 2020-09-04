import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAhK5p5nDcn7jxqENORB-6gBwv9uzD2vLw",
  authDomain: "rent4aweek-192c7.firebaseapp.com",
  databaseURL: "https://rent4aweek-192c7.firebaseio.com",
  projectId: "rent4aweek-192c7",
  storageBucket: "rent4aweek-192c7.appspot.com",
  messagingSenderId: "321225640184",
  appId: "1:321225640184:web:0e2694a178e145e172d30d"
}
firebase.initializeApp(config)


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export default firebase