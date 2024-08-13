import React from 'react';
import './Addtocart.css';

const Addtocart = () => {
  return (
    <div className="shopping-cart">
      <h2 className="title">Y o u r   S h o p p i n g   B a s k e t</h2>
      <div className="basket">
        <p >Your basket is currently empty.</p>
      </div>
      <button className="button">RETURN TO SHOP</button>
    </div>
  );
};

export default Addtocart;