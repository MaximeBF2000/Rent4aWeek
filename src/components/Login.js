import React from 'react'
import ReactDom from "react-dom"

export default function Login() {
  return ReactDom.createPortal(
    <div className="login">
      <div className="loginBox">
        <h2>Login</h2>
        <button className="loginWithGoogleBtn loginBtn">Login with Google</button>
      </div>
    </div>,
    document.querySelector("#portalRoot")
  )
}
