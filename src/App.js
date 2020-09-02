import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./styles/App.scss"
import Header from './components/Header'
import Login from "./components/Login"
import Register from "./components/Register"

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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
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
