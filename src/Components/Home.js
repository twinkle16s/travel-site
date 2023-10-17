import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const images = [
  {
    sno: 1,
    src: "/images/img-9.jpg",
    title: "Explore the hidden waterfall deep inside the Amazon jungle",
  },
  {
    src: "/images/img-2.jpg",
    title: "Travel through the Islands of Ball in a Private cruise",
  },
  {
    src: "/images/img-3.jpg",
    title: "set cell in the Atlantic Ocean viisiting Uncharted Water",
  },
  {
    src: "/images/img-4.jpg",
    title: "Experience Footeball on the Top of Himilaynan Maountains",
  },
  {
    src: "/images/img-8.jpg",
    title: "Ride through the Sahara Desert on a guided caamel tour",
  },
];
const Home = () => {
  return (
    <div className="div">
      <div className="text-area">
        <h1>Check Out these EPIC Destinations!</h1>
      </div>
      <div className="image-list">
        {images.map((image) => {
          return (
            <div className="image-div" key={image.id}>
              <Link to="/">
                <img src={image.src} alt="" className="image" />
              </Link>
              <p className="text">{image.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
