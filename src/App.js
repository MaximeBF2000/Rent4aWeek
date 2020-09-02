import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./styles/App.scss"
import Header from './components/Header'
import Banner from './components/Banner'
import CarOptionsRow from './components/CarOptionsRow'
import Login from "./components/Login"
import Register from "./components/Register"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <CarOptionsRow />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
