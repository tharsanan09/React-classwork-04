import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./page/About";
import "./App.css";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;