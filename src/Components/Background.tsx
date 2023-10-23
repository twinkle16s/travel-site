import React from 'react'
import './Background.css'

interface BackgroundProps {
  title:string;
}

const Background: React.FC<BackgroundProps> = ({title}) => {
  return (
    <div className="video-bg">

    <video autoPlay loop muted>
    <source src="/video/video1.mp4" type="video/mp4" />
  </video>
  <h1 className="main-text">{title}</h1>
      </div> 
  )
}

export default Background
