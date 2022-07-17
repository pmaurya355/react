import CountUp from 'react-countup';
import React, { Component }  from 'react';
import "animate.css/animate.min.css";
import '../counter/counter.style.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Counter() {
    return (
        <>
           
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
                <div className='counter'>
               
                    <ul className='counter_item' >
                    <AnimationOnScroll
              
              animateOnce={true}
              animateIn="animate__fadeInUp">
                        <p >Ambassadors</p>
                        <CountUp
                            start={0} end={25000} delay={0}>
                            {({ countUpRef }) => (
                                <div id='a'>
                                    <span id='a'
                                        ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        </AnimationOnScroll>

                    </ul>
                    

                    <ul className='counter_item'>
                    <AnimationOnScroll
              
              animateOnce={true}
              animateIn="animate__fadeInUp">
                        <p>College</p>
                        <CountUp start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div id='a'>
                                    <span id='a'
                                        ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        </AnimationOnScroll>
                    </ul>
                    

                    <ul className='counter_item'>
                    <AnimationOnScroll
              
              animateOnce={true}
              animateIn="animate__fadeInUp">
                        <p>Reach</p>
                        <CountUp start={0} end={20} delay={0}>
                            {({ countUpRef }) => (
                                <div id='a'>
                                    <span id='a'
                                        ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        </AnimationOnScroll>
                    </ul>
                  
                </div>

           


        <div/>
        
        </>
    );
}
export default Counter;
