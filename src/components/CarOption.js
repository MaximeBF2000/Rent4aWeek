import React from 'react'

export default function CarMainOption({ img, title, text, i }) {
  return (
    <div className={`carOption ${i <= 2 ? "mainOption" : ""}`}>
      <div className="optionImage">
        <img src={img} alt="vehicule image"/>
      </div>
      <div className="optionInfo">
        <h3 className="optionTitle"> {title} </h3>
        <p className="optionSubText"> {text} </p>
      </div>
    </div>
  )
}
