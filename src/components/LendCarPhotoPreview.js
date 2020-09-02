import React from 'react'

export default function LendCarPhotoPreview({ photos, setPhotos }) {
  const deletePhoto = photoToDelete => {
    const withoutPhoto = photos.filter(photo => (
      photo.name !== photoToDelete.name
    ))
    setPhotos(withoutPhoto)
  }

  return (
    <div className="lendCar_photosPreview">
      {
        photos && photos.map((photo, i) => (
          <div className="photoPreview" key={i} onClick={() => deletePhoto(photo)}>
            <img src={photo.preview} alt={photo.name} />
          </div>
        ))
      }
    </div>
  )
}
