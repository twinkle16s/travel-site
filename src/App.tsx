import React from 'react';
import { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from './Components/Home';

import Background from './Components/Background';



const App: React.FC = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Background title="plan Your Trip"/>
        <Home/>
        <Routes> 
          <Route path="/" element={<Home />} />
          
          
         </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;