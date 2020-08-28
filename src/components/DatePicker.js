import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { motion, AnimatePresence } from "framer-motion"
import { DateRangePicker } from "react-date-range"

export default function DatePicker({ visible }) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
    color: "#F0C243",
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="datePickerContainer"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: .3 }}
        >
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
