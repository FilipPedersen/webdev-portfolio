import React from 'react';
import "./portfolioList.css";
import Product from "../product/product";
import {projects} from "../../data";

const portfolioList = () => {
  return <div className='pl'>
      <div className="pl-texts">
          <h1 className='pl-title'>Mine Projekter</h1>
          <p className='pl-desc'>
              Disse er nogle af mine projekter, som jeg i min fritid og gennem min skoletid har lavet.
          </p>
      </div>
      <div className="pl-list">
          {projects.map(item => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
          
      </div>
  </div>
};

export default portfolioList;
