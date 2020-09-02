import React, { useState, useContext } from 'react'
import ReactDom from "react-dom"
import LendCarPhotoPreview from "./LendCarPhotoPreview"
import { AppContext } from "../context/AppContext"
import { Button } from "@material-ui/core"
import { motion, AnimatePresence } from "framer-motion"
import { useDropzone } from "react-dropzone"
import AlgoliaPlaces from 'algolia-places-react'


export default function LendFormPopup({ visible, close }) {
  const { user } = useContext(AppContext)

  const [carModel, setCarModel] = useState("")
  const [photos, setPhotos] = useState([])
  const [city, setCity] = useState(null)

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDragEnter: e => e.target.classList.toggle("draggingIn"),
    onDragLeave: e => e.target.classList.toggle("draggingIn"),
    onDrop: files => {
      document.querySelector(".photosDragndropZone").classList.remove("draggingIn")
      const newPhotos = files.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
      setPhotos( oldPhotos => [...oldPhotos, ...newPhotos] )
    }
  })
  
  const handleClose = e => { if(e.target.classList.contains("lendFormBackground")) close() }

  const handleLocationChange = LocationInfos => {
    setCity(LocationInfos.suggestion.county)
    console.log(LocationInfos)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log({ carModel, photos, city })
  }

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
            onSubmit={handleFormSubmit}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          >
            <div className="formControl">
              <label htmlFor="carName">Car model</label>
              <input type="text" name="carName" value={carModel} onChange={e => setCarModel(e.target.value)} />
            </div>
            <div className="formControl">
              <label htmlFor="carPhotos">Add car photos</label>
              <div className="photosDragndropZone" { ...getRootProps() }>
                <input type="file" { ...getInputProps() } name="carPhotos" />
                <p className="photosDropzoneText">
                  Upload your photos here...
                </p>
              </div>
            </div>
            <LendCarPhotoPreview photos={photos} setPhotos={setPhotos} />
            <div className="formControl">
              <label htmlFor="rentPlace">Where do you rent your car ?</label>
              <AlgoliaPlaces
                name="rentPlace"
                placeholder="Write your city here"
                options={{
                  appId: "plE9LBPFKBZ9",
                  apiKey: "0c69ac4769be55c13f86ad71c5b54c47",
                  language: "en",
                  countries: ["us", "gb", "au", "ca"],
                  type: "city"
                }}
                onChange={handleLocationChange}
              />
            </div>

            <Button className="submitBtn" variant="outlined" type="submit"> 
              Lend my car
            </Button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector("#portalRoot")
  )
}
