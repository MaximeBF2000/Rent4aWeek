import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function UserMenu({ visible }) {
  const { user, dispatch } = useContext(AppContext)

  const userMenuProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: .2 }
  }

  const signOut = () => dispatch({ type: "UPDATE_USER", payload: null })

  if(!user){
    return (
      <AnimatePresence>
        {visible && (
          <motion.div 
            className="userMenu"
            {...userMenuProps}
          >
            <Link to="/signin"> <div className="userOption"> SignIn </div> </Link>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="userMenu"
          {...userMenuProps}
        >
          <div className="menuTitle" style={{ padding: ".5rem" }}>Hello {user.displayName}</div>
          <div className="userOption" onClick={signOut}> SignOut </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
