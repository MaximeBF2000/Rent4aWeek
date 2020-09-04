import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./styles/App.scss"
import Header from './components/Header'
import SignIn from "./components/SignIn"

import Homepage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/search/:category">
          <SearchPage />
        </Route>
        <Route path="/search">
          <Redirect to="/search/:category" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
