import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"
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
            <div className="userOption">Se connecter</div>
            <div className="userOption">S'inscrire</div>
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
