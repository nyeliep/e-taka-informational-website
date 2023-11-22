import React from "react";
import './style.css'



const Landing =()=>{
    return(
        <div className="landing-centred-section">
        <div className="landing-section-container">
            <div className="home-section" id="home">
            <h1><span>Welcome</span> to our <span>E-Waste</span> Recycling Platform</h1>
             <p>Join us in making a positive impact on the environment by recycling your electronic devices responsibly.</p>
            <img className="home" src="images/home.png" alt="Home"/>
            </div>
        </div>
        </div>
    )
}

export default Landing;