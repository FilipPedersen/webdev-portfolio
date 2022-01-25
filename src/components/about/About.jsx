import React from 'react';
import "./About.css";
import aboutme from "../../img/noccosh.png"

const About = () => {
  return <div className='a'>
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
          <img src={aboutme} alt="" className="a-img" />
          </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">Lidt om mig</h1>
          <p className="a-sub">
            Indledende tekst
          </p>
          <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button type='button'>Download CV</button>
      </div>
  </div>;
};

export default About;
