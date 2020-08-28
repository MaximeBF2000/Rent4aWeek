import React from "react"
import ReactDom from "react-dom"
import { AppProvider } from "./context/AppContext"
import App from "./App"

ReactDom.render(<AppProvider>
  <App />
</AppProvider> , document.querySelector("#root"))