import React from "react";
import "./About.css";
import aboutme from "../../img/noccosh.png";
import Pdf from "../../Documents/Cv.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={aboutme} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Lidt om mig</h1>
        <p className="a-desc">
          Rutineret gamer der, når han ikke sidder foran computeren, går ude på
          golfbanen, træner i fitness og ind i mellem prøver at ramme en smash i
          padel tennis. Ellers er jeg smilende, en god teamplayer, konkurrence
          menneske og habil dust2 spiller. Ved siden af studiet underviser jeg
          nemlig i CS:GO ved Odense Esport.
          <br />
          <br />
          Jeg har igennem tiden fået erfaringer med
          <strong> HTML</strong> & <strong>CSS</strong>,
          <strong> JavaScript</strong>, frontend-frameworks som
          <strong> React</strong> og
          <strong> Vue.js</strong>, samt<strong> C#</strong> og{" "}
          <strong> .NET</strong>. Derudover har jeg lavet lidt freelance arbejde
          med <strong>WordPress</strong>, hvor jeg også i flere projekter har
          udviklet custom themes i WordPress med
          <strong> PHP</strong>.
        </p>
        <div className="button">
          <a href={Pdf} without rel="noopener noreferrer" target="_blank">
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
