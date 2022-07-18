import React from "react";
import "./incentive.style.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function incentives() {
  return (
    <>
      <div class="background">
        <div class="box2">
          <i class="fas fa-certificate" aria-hidden="true"></i>
          <p>
            A Certificate of Appreciation undersigned by Techkriti’23 IIT Kanpur
            to top 100 CA's
          </p>
        </div>
        <div class="box2">
          <i class="fas fa-chalkboard-teacher" aria-hidden="true"></i>
          <p>
            Top Ambassadors will get a chance to attend Workshops at
            Techkriti’23 IITK
          </p>
        </div>
        <div class="box2">
          <i class="fas fa-award" aria-hidden="true"></i>
          <p>
            Top campus ambassadors will be felicitated with Special Appreciation
            Award
          </p>
        </div>

        <div class="box2">
          <i class="fas fa-file-signature" aria-hidden="true"></i>
          <p>
            Recognition in the form of name integration on the Techkriti’23
            Website
          </p>
        </div>
        <div class="box2">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <p>
            Get to become a part of Campus Ambassador diaries through Techkriti
            Facebook Page
          </p>
        </div>
      </div>
    </>
  );
}
