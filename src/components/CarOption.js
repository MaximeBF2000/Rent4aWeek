import React from 'react'
import { Link } from "react-router-dom"

export default function CarMainOption({ img, title, text, i }) {
  return (
    <Link to={`/search/${title}`}>
      <div className={`carOption ${i <= 2 ? "mainOption" : ""}`}>
        <div className="optionImage">
          <img src={img} alt="vehicule image"/>
        </div>
        <div className="optionInfo">
          <h3 className="optionTitle"> {title} </h3>
          <p className="optionSubText"> {text} </p>
        </div>
      </div>
    </Link>
  )
}
