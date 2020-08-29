import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import App from '../App'
import CarMainOption from './CarOption'

export default function CarOptionsRow() {
  const { cards } = useContext(AppContext)
  return (
    <div className="carOptions">
      {
        cards.map((card, i) => (
          <CarMainOption 
            key={i}
            img={card.img}
            title={card.title}
            text={card.text}
            i={i}
          />
        ))
      }
    </div>
  )
}
