import React from 'react';
import "./portfolioList.css";
import Product from "../product/product";
import {projects} from "../../data";

const portfolioList = () => {
  return <div className='pl'>
      <div className="pl-texts">
          <h1 className='pl-title'>Mine Projekter</h1>
          <p className='pl-desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eros in tortor tristique mattis. Suspendisse sollicitudin mauris a dignissim aliquam. Etiam non fermentum orci. Integer suscipit luctus nisl. Ut venenatis placerat risus in posuere. Fusce in euismod lectus. Mauris ut iaculis sapien
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
