import React from 'react'
import backgroundPic from '../Images/Italy.jpg'

export const Home = () => {
  return (
    <div className='relative h-screen bg-cover bg-center' 
      style={{backgroundImage: 'url(${backgroundPic})'}} >

      <div className='absolute inset-0 bg-black bg-opacity-50 flex-col items-center justify-center' >
        <h1>EXPLORE THE BEST CITIES WITH US</h1>
        <p>Discover amazing places with the most affordable deals.</p>
        <button>Get started</button>
      </div>
    </div>
  )
}
