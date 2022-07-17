import React from 'react';
import './aboutus.style.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AboutUs() {
  return (
    <>
      <div className='aboutus'>
      <link rel="stylesheet" href="./aboutus.style.css"/> 
        <AnimationOnScroll
          delay={0}
          animateOnce={true}
          animateIn="animate__fadeInUp">

          <h1 className="title">ABOUT US</h1>
         
            <div className='text'>
            Techkriti is the annual inter-collegiate Technical and Entrepreneurship festival organized by the students of IIT Kanpur.  Techkriti is a non-profit organization that was founded in 1995 with the purpose of fostering an interest in technology and encouraging innovation among Indian students. Indian Institute of Technology Kanpur, widely celebrated as a center of academic excellence, is proud to announce the 28th edition of its Technological and Entrepreneurial Festival, Over time, Techkriti has solidified its status as one of Asia's largest technical festivals, inspiring the desire of aspiring individuals and giving a stage for them to demonstrate their abilities. Innovation and tenacity are at the heart of this groundbreaking event, with social welfare also receiving the attention it merits.  Every year, we appoint ambassadors from various institutions across the nation, whose primary task is to promote Techkriti within and outside their campus, while also gaining organizational and managerial experience.
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default AboutUs;
