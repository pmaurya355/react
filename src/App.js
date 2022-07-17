import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Impetus from './components/pages/Impetus';
import WhyCa from './components/pages/WhyCa';
import SignUp from './components/pages/SignUp';


import Footer from './components/footer/Footer';

function  App() {
  window.scrollTo(0, 0);
  return (
    <>
       
      <Router>
      <Navbar />
        <Routes>
        
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/impetus" element={<Impetus />}/>
          <Route exact path="/whyca" element={<WhyCa/>}/>
          <Route exact path="/whyca" element={<SignUp />}/>
          <Route exact path="/whyca" element={<SignUp />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
         
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
