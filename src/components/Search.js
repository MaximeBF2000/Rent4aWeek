import React from 'react'
import { useParams } from "react-router-dom"

export default function Search() {
  const { category } = useParams()

  return (
    <div className="search">
      <h2 className="searchTitle">
        Cars found for {category}
      </h2>
    </div>
  )
}
