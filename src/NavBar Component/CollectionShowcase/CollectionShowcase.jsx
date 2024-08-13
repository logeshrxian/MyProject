import React from 'react';
import './CollectionShowcase.css';
// import leftArrow from './leftArrow.svg';
// import rightArrow from './rightArrow.svg';

const collections = [
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2023/09/Teja-Heart-for-catagory-2.jpg', 
    label: 'Lockets'
  },
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML762_Sterling-Silver-October-Birth-Flower-Necklace_2.jpg', 
    label: 'Necklace'
  },
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2021/09/Group-Shot-ML927-ML929-Sterling-Silver-Oval-Cushion-Signet-Ring-Sterling-Silver-Pinky-Oval-Signet-Ring.jpg', 
    label: 'Signets'
  },
  {
    image: 'https://www.marthajackson.co.uk/content/uploads/2022/11/BRACELET-CATEGORY-FRONT-PAGE-1980x1980.jpg', 
    label: 'Bracelets'
  }
];

const CollectionShowcase = () => {
  return (
    <div className="showcase">
      <button className="showcase__arrow showcase__arrow--left">
        {/* <img src={leftArrow} alt="Left Arrow" /> */}
      </button>
      <div className="showcase__content">
        <p className='collection'>E x p l o r e   O u r   C o l l e c t i o n s</p>
        <div className="showcase__items">
          {collections.map((collection, index) => (
            <div className="showcase__item" key={index}>
              <img src={collection.image} alt={collection.label} />
              <div className="showcase__label">{collection.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="showcase__arrow showcase__arrow--right">
        {/* <img src={rightArrow} alt="Right Arrow" /> */}
      </button>
    </div>
  );
}

export default CollectionShowcase;
