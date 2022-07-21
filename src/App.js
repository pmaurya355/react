import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import Home from "./components/pages/Home";

import WhyCa from "./components/details/Details";
import Register from "./components/register/Register";
import Impetus from "./components/impetus/Impetus";
import ContactUs from "./components/contactus/ContactUs";

import Footer from "./components/footer/Footer";

function App() {
  window.scrollTo(0, 0);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/whyca" element={<WhyCa />} />
          <Route exact path="/impetus" element={<Impetus />} />
          <Route exact path="/impetus" element={<Impetus />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
