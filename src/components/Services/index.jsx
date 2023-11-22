
import React from "react";
import './style.css'



export const Services = () => {

    return (
        <div className="service-centred-section">
        <div className="service-section-container">
            <div className="header" id="services">
                <h1 className="services-title">Services</h1>
            </div>
            <div className="services-content">
                <div className="left-col">
                    <h1 className="mini-title">Give your old elctronics a new life</h1>
                    <p className="service-text">Sell them to us, and we will recycle them and sell the recycled products at a fraction of the cost of new ones.</p>
                    <a href="/"><img src="images/button.png" alt="button" className="button"></img></a>
                </div>
                <div className="right-col">
                    <img className="phone-image" src="images/E-Taka1.png" alt="E-Taka"/>
                </div>
            </div>
            </div>
        </div>
    )
}