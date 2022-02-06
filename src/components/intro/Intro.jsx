import React from "react";
import "./Intro.css";
import Me from "../../img/me.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Filip Kuusisto Pedersen</h2>
          <h1 className="i-name">Webudvikler studerende på UCL i Odense</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML & CSS</div>
              <div className="i-title-item">Tailwind</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">C#</div>
              <div className="i-title-item">React.js</div>
            </div>
          </div>
          <div className="intro-m-right">
            <div className="i-m-right-wrapper">
              <div className="i-m-bg"></div>
              <img src={Me} alt="Introbillede" className="i-m-img" />
            </div>
          </div>
          <div className="i-desc">
            <p>
              Jeg er en 23-årig årig frisk og energisk ung mand, der har en
              brændende passion for <strong>Frontend udvikling</strong> og
              webdesign. Da jeg snart er færdig med min bachelor, er jeg på
              udkig efter et <strong>praktiksted</strong>. Jeg er sulten efter
              at komme igang og benytte mine kompetencer til at skabe noget{" "}
              <strong>fedt</strong>.
            </p>
          </div>

          <div className="i-sm-icon">
            <a
              href="https://www.linkedin.com/in/filip-pedersen-42b3a81a2/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/FilipPedersen"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github-square fa-fw"></i>
            </a>
            <a
              href="https://twitter.com/zeqCSGO"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="i-right-wrapper">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
