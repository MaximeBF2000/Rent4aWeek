import React, { useContext } from 'react'
import ReactDom from "react-dom"
import { AppContext } from "../context/AppContext"
import { motion, AnimatePresence } from "framer-motion"

export default function LendFormPopup({ visible, close }) {
  const { user } = useContext(AppContext)
  
  const handleClose = e => {
    if(e.target.classList.contains("lendFormBackground")){
      close()
    }
  }

  // FOR PROD
  // if(visible && !user){
  //   alert("You need to be connected to lend your car")
  // }

  return ReactDom.createPortal(
    <AnimatePresence>
      {/* CONDITION FOR PROD : (vissible && user) */}
      {(visible) && (
        <motion.div
          className="lendFormBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.form 
            className="lendFormPopup"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          >
            <div className="formControl">
              <label htmlFor="carName">Car name</label>
              <input type="text" name="carName" />
            </div>
            <div className="formControl">
              <label htmlFor="carDate">Car date</label>
              <input type="date" name="carDate" />
            </div>
            <div className="formControl">
              <label htmlFor="carPhotos">Add car photos</label>
              <input type="file" name="carPhotos" />
            </div>
            <h4>ADD LOCATION WITH ALGOLIA PLACES API</h4>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector("#portalRoot")
  )
}
