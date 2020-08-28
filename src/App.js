import React from 'react'
import "./styles/App.scss"
import Header from './components/Header'
import Banner from './components/Banner'
import CarMainOptionsRow from './components/CarOptionsRow'

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <CarMainOptionsRow />
    </>
  )
}
