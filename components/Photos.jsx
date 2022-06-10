import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { getPhotos } from '../services'

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos()
      .then((newPhotos) => {setPhotos(newPhotos)}
      );
  }, []);

  console.log(photos)
  
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mx-28 my-6">
      {photos.map((photo) => (
        <div className="relative  ">                  
          <img src={photo.images[0].url} layout='fill' className="w-full aspect-video rounded-lg mb-4 drop-shadow-md " />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 rounded-lg flex flex-col justify-center items-center text-white font-semibold hover:backdrop-opacity-60 bg-black/60">
            <p className="text-sm pb-12 ">{photo.description}</p>
            
            <h1 className="text-xl pb-2 text-lightPink">{photo.titre}</h1>
            <h2 className="text-xs text-lightPink">{photo.pays}</h2>
            
          </div>
        </div>
      ))}
      
      
      
    </div>
  )
}

export default Photos