import React from 'react'
import hero from '../assets/pic2.jpg'

function Hero() {
  return (
    <div>
        <img src={hero} className="w-full max-h-[500px] object-cover" />
    </div>
  )
}

export default Hero