import React, { useContext } from 'react'
import ReactDom from "react-dom"
import { AppContext } from "../context/AppContext"
import { useHistory } from "react-router-dom"
import firebase, { googleAuthProvider } from "../helpers/firebase"

export default function Register() {
  const { dispatch } = useContext(AppContext)
  const history = useHistory()

  const googleSignIn = () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(authResult => {
        console.log({ authResult })
        dispatch({ type: "UPDATE_USER", payload: authResult.user })
        history.push("/")
      })
  }

  return ReactDom.createPortal(
    <div className="login">
      <div className="signInBox">
        <h2>Sign In</h2>
        <button className="signInWithGoogleBtn signInBtn" onClick={googleSignIn}>Register with Google</button>
      </div>
    </div>,
    document.querySelector("#portalRoot")
  )
}
