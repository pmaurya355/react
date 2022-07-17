import React from 'react'

import './Footer.styles.css'

function Footer() {
    return (
      <div className='footer-container'>
        
        <section class='social-media'>
          <div class='social-media-wrap'>
            
            <div class='website-rights'>Techkriti © 2022</div>
            <div class='social-icons'>
            <a 
            class='social-icon-link facebook'
            aria-label='Facebook'
            rel="noopener noreferrer" href="https://www.facebook.com/techkriti.iitk" target="_blank"> <i class='fab fa-facebook-f' /></a>
              
              <a
               rel="noopener noreferrer" href="https://www.instagram.com/techkriti.iitk/"
                class='social-icon-link instagram'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </a>
              
              <a
                class='social-icon-link youtube'
                rel="noopener noreferrer" href="https://www.youtube.com/c/TechkritiIITKanpur"
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </a>
              <a
                class='social-icon-link twitter'
                rel="noopener noreferrer" href="https://twitter.com/techkriti_iitk"
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </a>
              <a
                class='social-icon-link twitter'
                rel="noopener noreferrer" href="https://www.linkedin.com/school/techkriti'13/"
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;
  