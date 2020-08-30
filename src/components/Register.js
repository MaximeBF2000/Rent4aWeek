import React from 'react'
import ReactDom from "react-dom"

export default function Register() {
  return ReactDom.createPortal(
    <div className="login">
      <div className="registerBox">
        <h2>Register</h2>
        <button className="registerWithGoogleBtn registerBtn">Register with Google</button>
        <button className="registerWithFacebookBtn registerBtn">Register with Facebook</button>
      </div>
    </div>,
    document.querySelector("#portalRoot")
  )
}
