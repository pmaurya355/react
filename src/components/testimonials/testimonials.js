import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./testimonials.style.css"
import M4 from '../../assets/images/profile2.jpg';


function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css" rel="stylesheet" integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
crossorigin="anonymous"></link>
      <div id="carousel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}

          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
         <div className="card">
                <img src={M4} class="profile-img" alt=""/>
                <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore consequuntur minima sit? At, eaque minus omnis explicabo mollitia reprehenderit dolorem alias, vitae culpa neque adipisci quibusdam sequi, architecto molestiae!</p>
                <h2 className="name">John Doe</h2>
                
            </div>
            <div className="card">
                <img src={M4} class="profile-img" alt=""/>
                <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore consequuntur minima sit? At, eaque minus omnis explicabo mollitia reprehenderit dolorem alias, vitae culpa neque adipisci quibusdam sequi, architecto molestiae!</p>
                <h2 className="name">John Doe1</h2>
                
            </div>
            <div className="card">
                <img src={M4} class="profile-img" alt=""/>
                <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore consequuntur minima sit? At, eaque minus omnis explicabo mollitia reprehenderit dolorem alias, vitae culpa neque adipisci quibusdam sequi, architecto molestiae!</p>
                <h2 className="name">John Doe2</h2>
                
            </div>
            <div className="card">
                <img src={M4} class="profile-img" alt=""/>
                <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore consequuntur minima sit? At, eaque minus omnis explicabo mollitia reprehenderit dolorem alias, vitae culpa neque adipisci quibusdam sequi, architecto molestiae!</p>
                <h2 className="name">John Doe3</h2>
                
            </div>
        
        </Carousel>;
      </div>
    </>
  );
}

export default Testimonials;

