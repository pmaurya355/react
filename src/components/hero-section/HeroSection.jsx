import React from 'react';
import { Button } from '../button/Button';
import video2 from '../../assets/video-2.mp4';

import './HeroSection.styles.css'
import '../../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        
        {/* <video src={video2} autoPlay loop muted /> */}
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
    
         
    </div>
  )
}

export default HeroSection;