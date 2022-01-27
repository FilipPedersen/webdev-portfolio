import React from "react";
import "./product.css";

const product = ({ img, link, title, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-wrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
          <div className="p-overlay">
            <div class="img-title">{title}</div>
            <p className="img-desc">{desc}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default product;
