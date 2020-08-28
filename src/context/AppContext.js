import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import initialState from "./initState"

export const AppContext = createContext(initialState)

export const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}