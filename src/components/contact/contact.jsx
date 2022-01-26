import "./contact.css"
import React from 'react';

const Contact = () => {
  return <div className='c'>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Interesseret i at høre mere?</h1>
              <p className="c-desc">Så kan jeg kontaktes på følgende</p>
            <div className="c-info">
                <div className="c-email">
                    <i class="far fa-envelope"></i>
                    <a href="mailto:98fpeder@gmail.com">98fpeder@gmail.com</a>
                </div>
                <div className="c-loc">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Odense C</p>
                </div>
            </div>
          </div>

          <div className="c-rigth"></div>
      </div>
  </div>;
};

export default Contact;
