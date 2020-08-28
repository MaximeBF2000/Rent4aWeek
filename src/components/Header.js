import React, { useState, useContext } from 'react'
import { AppContext } from "../context/AppContext"
import { Avatar } from '@material-ui/core'
import { Button } from "@material-ui/core"
import DatePicker from "./DatePicker"

import DateRangeIcon from '@material-ui/icons/DateRange'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import SearchIcon from '@material-ui/icons/Search'

export default function Header() {
  const { searchQuery, dispatch } = useContext(AppContext)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: "" })
  }

  const handleSearchChange = e => dispatch({ type: "UPDATE_SEARCH_QUERY", payload: e.target.value })

  return (
    <header className="header">
      <div className="header_left">
        <div className="logo">
          <EmojiTransportationIcon style={{ marginRight: 5 }} /> Rent4aWeek
        </div>
      </div>

      <form className="searchbar" onSubmit={handleSubmit} >
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      <div className="header_right">
        <button className="datePicker" onClick={() => setShowDatePicker(ps => !ps)}>
          <DateRangeIcon />
        </button>
        <DatePicker visible={showDatePicker} />

        <Button className="lend">
          Lend your car
        </Button>

        <button className="user">
          <Avatar />
        </button>
      </div>
    </header>
  )
}
