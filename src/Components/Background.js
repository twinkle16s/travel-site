import React from 'react'
import './Background.css'

function Background() {
  return (
    <div className="video-bg">

    <video autoPlay loop muted>
    <source src="/video/video1.mp4" type="video/mp4" />
  </video>
  <h1 className="main-text">Plan YOUR Trip</h1>
      </div> 
  )
}

export default Background