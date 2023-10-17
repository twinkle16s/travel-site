import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { useEffect } from "react";
import Footer from "./Components/Footer";
// import Alert from './Components/Alert';
import Background from "./Components/Background";

function App() {
  useEffect(() => {
    alert("welcom");
  }, []);
  return (
    <>
      <Router>
        {/* <Alert/> */}
        <Navbar />
        <Background />
        <Home />
        <Routes>
          <Route path="/home" exact component={Home} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
