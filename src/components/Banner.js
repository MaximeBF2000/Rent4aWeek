import React from 'react'
import BannerMainImage from "../assets/merco_redSide.jpg"
import { Button } from "@material-ui/core"

export default function Banner() {
  return (
    <div className="banner">
      <img className="mainImage" src={BannerMainImage} alt="Luxurious Car" />
      <div className="innerBox">
        <h2 className="banner_title">The Luxurious for everyone</h2>
        <p className="banner_text">
          Have fun driving the most luxurious cars during your vacation for the price of just one more meal at the restaurant
        </p>
        <Button className="banner_cta" >See our selection</Button>
      </div>
    </div>
  )
}
