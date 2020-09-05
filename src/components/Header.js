import React, { useState, useContext } from 'react'
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import { Avatar } from '@material-ui/core'
import { Button } from "@material-ui/core"
import DatePicker from "./DatePicker"
import LendFormPopup from "./LendFormPopup"
import UserMenu from "./UserMenu"

import DateRangeIcon from '@material-ui/icons/DateRange'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import SearchIcon from '@material-ui/icons/Search'

export default function Header() {
  const { searchQuery, user, dispatch } = useContext(AppContext)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showLendForm, setShowLendForm] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: "" })
  }

  const handleSearchChange = e => dispatch({ type: "UPDATE_SEARCH_QUERY", payload: e.target.value })

  const handleLendBtn = () => {
    if(user){
      setShowLendForm(ps => !ps)
    } else {
      // alert("You need to be connected to lend your car")
      // POUR DEV
      setShowLendForm(ps => !ps)
    }
  }

  return (
    <header className="header">
      <div className="header_left">
        <div className="logo">
          <Link to ="/">
            <EmojiTransportationIcon style={{ marginRight: 5 }} /> Rent4aWeek
          </Link>
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

        {/* 👇 FOR PROD -->  disabled={!user} */}
        <Button className="lend" onClick={handleLendBtn}>
          Lend your car
        </Button>
        <LendFormPopup visible={showLendForm} close={() => setShowLendForm(false)} />

        <button className="user" onClick={() => setShowUserMenu(ps => !ps)}>
          <Avatar src={user ? user.photoURL : null} />
        </button>
        <UserMenu visible={showUserMenu} />
      </div>
    </header>
  )
}
