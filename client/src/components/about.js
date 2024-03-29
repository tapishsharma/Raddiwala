import React from "react";
import "./combined.css"

const About =()=>{
return(
   <div class="about-body-class">
    <section class="about-section-div">
        <div class = "about-div">
            <h1 class="aboutsection-title">About Us!</h1>
        </div>
        <div class="about-div-container">
            <p class="aboutsection-paragraph">
                Ever thought about the <span className = "text-change"  >scrap</span> at your home and what it can be <span className = "text-change"  >used</span> for?
                Ever thought what can you do with it? 
                We have a  <span className = "text-change"  >perfect solution.</span>
                At <span className = "text-change"  >रaddiwala</span>, we Pick-up scrap from your home at your convenience and <span className = "text-change"  >pay</span> you the equivalent amount <span className = "text-change">without any extra charge.</span>
                With your help and scrap, we can move a step to cleaner and <span className = "text-change">healthier environment</span> where recycling is part and parcel of our lives
            </p>
        </div>
    </section>
    </div>
)
}
export default About;