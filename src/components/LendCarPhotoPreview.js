import React from 'react'

export default function LendCarPhotoPreview({ photos, setPhotos }) {
  const deletePhoto = photoToDelete => {
    const withoutPhoto = photos.filter(photo => (
      photo.name !== photoToDelete.name
    ))
    setPhotos(withoutPhoto)
    console.log(withoutPhoto)
  }

  return (
    <div className="lendCar_photosPreview">
      {
        photos && photos.map(photo => (
          <div className="photoPreview" key={photo.name+photo.size} onClick={() => deletePhoto(photo)}>
            <img src={photo.preview} alt={photo.name} />
          </div>
        ))
      }
    </div>
  )
}
