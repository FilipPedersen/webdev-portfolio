import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Interesseret i at høre mere?</h1>
          <p className="c-desc">Så kan jeg kontaktes på følgende</p>
          <div className="c-info">
            <div className="c-icon">
              <i class="far fa-envelope fa-fw"></i>
              <a href="mailto:filip@filipsmedia.dk">filip@filipsmedia.dk</a>
            </div>
            <div className="c-icon">
              <i class="fas fa-phone-alt fa-fw"></i>
              <p>+45 22 27 99 86</p>
            </div>
            <div className="c-icon">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <p>Odense C</p>
            </div>
          </div>
        </div>

        <div className="c-rigth"></div>
      </div>
    </div>
  );
};

export default Contact;
