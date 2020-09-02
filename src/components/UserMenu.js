import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function UserMenu({ visible }) {
  const { user } = useContext(AppContext)

  const userMenuProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: .2 }
  }

  if(!user){
    return (
      <AnimatePresence>
        {visible && (
          <motion.div 
            className="userMenu"
            {...userMenuProps}
          >
            <Link to="/login"> <div className="userOption"> Login </div> </Link>
            <Link to="/register"> <div className="userOption"> Register </div> </Link>
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
          <div className="menuTitle">Hello {user}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
