import React from 'react';
import './Details.style.css';
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import "animate.css/animate.min.css";
import opp from '../../assets/images/opp.png';
import comm from '../../assets/images/comm.png';
import conn from '../../assets/images/connection.png';
import comp from '../../assets/images/comp.png';
import pub from '../../assets/images/pub.png';
import trend from '../../assets/images/trend.png';
import M1 from '../../assets/images/M1.png';
import M2 from '../../assets/images/M2.png';
import M3 from '../../assets/images/M3.png';
import M4 from '../../assets/images/M4.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
function WhyCa() {
    return (
        <>
       
            <div className='whyca'>
            <link rel="stylesheet" href="./WhyCa.css"/> 
           
                <h1 class="hr-lines">WHY CA?</h1>

                <div class="grid-container">



                    <ul class="grid-item"><img
                        className='cards__item__img'
                        alt=''
                        src={opp}
                        height={50}
                        width={50}

                    />Golden opportunity to witness the splendor of Techkriti at IIT Kanpur, one of the nation's distinguished institutions.</ul>

                    <ul class="grid-item"><img
                        className='cards__item__img'
                        alt=''
                        src={comm}
                        height={50}
                        width={50}
                    />Excellent platform to sharpen your Communication and Technical skills</ul>

                    <ul class="grid-item"><img
                        className='cards__item__img'
                        alt=''
                        src={pub}
                        height={50}
                        width={50}
                    />Be a part of national level event promotion and brand management</ul>

                    <ul class="grid-item"><img


                        className='cards__item__img'
                        alt=''
                        src={comp}
                        height={50}
                        width={50}
                    />Chance to organize National Level Competitions in your college</ul>

                    <ul class="grid-item"><img
                        className='cards__item__img'
                        alt=''
                        src={conn}
                        height={50}
                        width={50}
                    />Form a valuable network with thousands of brilliant like-minded students from all across the country</ul>

                    <ul class="grid-item"><img
                        className='cards__item__img'
                        alt=''
                        src={trend}
                        height={50}
                        width={50}
                    />An easy way to get acquainted with ever-changing trends of the Technical and Entrepreneurial World</ul>

                </div>

           

            </div>
        

            <div className='respons'>
                <h1 id="respons">RESPONSIBILITIES</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <AnimationOnScroll

                            animateOnce={true}
                            animateIn="animate__fadeInUp">
                            <Row id='group'>


                                <CardItem
                                    src={M2}
                                    title="Coordination"
                                    text='CAs are responsible for collaborating with the numerous participating colleges.
                                    CAs arrange workshops and activities in their respective colleges with the aid of Techkriti.
                                   
                                    '
                                />

                                <CardItem
                                    src={M3}
                                    title="College Publicity"
                                    text="A campus ambassador also aids in publicising Techkriti and ensuring campus community participation."


                                />
                                <CardItem
                                    src={M4}
                                    title="Social Media"
                                    text="CAs must also promote Techkriti via the social media platform by advertising its activities on Facebook, Twitter, Instagram, etc., utilizing their social media network for the development of Techkriti'23.
                                   
                                    "


                                />
                                <CardItem
                                    src={M1}
                                    title="Blogs"
                                    text="A campus ambassador also enhances his/her writing abilities through our blog series, in which he/she can share opinions on any topic for publication on Techkriti's official Facebook, Instagram, Twitter, and other social media applications.
                                    "

                                />

                            </Row>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </>


    );
}

export default WhyCa;