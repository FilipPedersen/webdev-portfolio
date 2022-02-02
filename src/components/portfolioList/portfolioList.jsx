import React from "react";
import "./portfolioList.css";
import Product from "../product/product";
import { projects } from "../../data";

const portfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Mine Projekter</h1>
        <p className="pl-desc">
          Dette er et udpluk af mine projekter fra studiet og freelance-arbejde.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default portfolioList;
