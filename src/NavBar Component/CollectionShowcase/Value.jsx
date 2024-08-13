import React from 'react';
import './Value.css';

const imageData = [
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/makers-small-1.jpg',
    
  },
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/customers-small.jpg',
    
  },
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/team-small.jpg',
   
  },
];

const MJValues = () => {
  return (
    <div className="mj-values">
      <p className="mj-values-title"> M J  V a l u e s</p>
      <div className="mj-values-container">
        {imageData.map((item, index) => (
          <div key={index} className="mj-values-item">
            <img src={item.image} alt={item.text} />
            <p className="mj-values-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MJValues;
