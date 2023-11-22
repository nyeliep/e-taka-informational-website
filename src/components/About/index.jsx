import React from "react";
import './style.css';
import { VectorElement } from "../../Atoms/aboutAtoms";



export const About = () => {
    return (
        <div className="about-centred-section">
          <div className="about-section-container">
            <div className="header" id="about">
                <h1 className="about-title">About Us</h1>
                <h2 className="vision">Vision</h2>
                <h6 className="empower">To empower responsible e-waste disposal in Kenya.</h6>
                <p className="goal">Our goal is to give individuals and organizations in Kenya
                the knowledge, tools and resources  to safely and environmentally consciously
                dispose of electronic waste . This involves  recycling  electronic waste  and
                preventing harmful practices such as dumping e-waste in ways that harm the environment.
                 The aim is to encourage responsible  and sustainable e-waste management practices in Kenya
                 to protect both public health and the environment.</p>
            </div>
            <div className="value">
      <div className="header">
      <h1 className="core">Core Values</h1>
      </div>
        <div className="values-container">
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Customer Satisfaction"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="images/RoundVector.png" />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Community Engagement"  text="We seek to engage with the community and raising awareness about the importance of e-waste recycling. " imageUrl="images/community.png"   />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Sustainabilty"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="images/MoonVector.png" />
      </div>
      </div>
      </div>
      </div>
    );
  };