import React from 'react';
import '../../App.css';
import Counter from '../counter/counter';
import HeroSection from '../hero-section/HeroSection';
import AboutUs from '../about-us/aboutus';
import Testimonials from '../testimonials/testimonials';

function Home () {
  
    return (
        
        <>
            <HeroSection />
            <AboutUs /> 
            <Counter/>
            {/* <Testimonials/> */}
        </>
    )
}

export default Home;