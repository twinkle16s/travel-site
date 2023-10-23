import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';


interface Image {
  src: string;
  title: string;
  url: string;
}

const images: Image[] = [
  {
    src: "/images/img-9.jpg",
    title: "Explore the hidden waterfall deep inside the Amazon jungle",
    url: "/waterfall",
  },
  {
    src: "/images/img-2.jpg",
    title: "Travel through the Islands of Ball in a Private cruise",
    url: "/islands",
  },
  {
    src: "/images/img-3.jpg",
    title: "Set sail in the Atlantic Ocean visiting Uncharted Water",
    url: "/sail",
  },
  {
    src: "/images/img-4.jpg",
    title: "Experience Football on the Top of Himalayan Mountains",
    url: "/football",
  },
  {
    src: "/images/img-8.jpg",
    title: "Ride through the Sahara Desert on a guided camel tour",
    url: "/desert",
  }
]

const Home: React.FC = () => {
  return (
    <>
    
      <div className="div">
 
      <div className="text-area">
        <h1>Check Out these EPIC Destinations!</h1>
      </div>
      <div className="image-list">
        {images.map((image,index) => {
          return (
            <div className="image-div">
              <Link to="/services">
                <img src={image.src} alt="" className="image"   key={index} />
              </Link>
              <p className="text">{image.title}</p>
            </div>
          );
        })}
      </div>
    </div>
    </>
    
  )
}

export default Home