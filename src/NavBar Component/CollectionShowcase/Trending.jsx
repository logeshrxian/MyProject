import React from 'react';
import './Trending.css';

const images = [
  {
    src: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML849L_Sterling-Silver-Oval-Ripple-Earrings_3-500x500.jpg',
    alt: 'Sterling Silver Secret Message Ring',
    title: 'Sterling Silver Secret Message Ring',
    price: '£21.95',
  },
  {
    src: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML849S_Sterling-Silver-Oval-Ripple-Earrings_2-500x500.jpg',
    alt: 'Sterling Silver Moon and Stars Layered Charm Necklace',
    title: 'Sterling Silver Moon and Charm Necklace',
    price: '£26.95',
  },
  {
    src: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML847_Sterling-Silver-Oval-Opal-Flow-Necklace_4-500x500.jpg',
    alt: 'Sterling Silver Hanging Lanterns Chain Studs',
    title: 'Sterling Silver Hanging Lanterns Chain Studs',
    price: '£16.95',
  },
  {
    src: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML848_Sterling-Silver-Fern-Feather-Necklace_5-500x500.jpg',
    alt: 'Sterling Silver Bold Coil Drop Earrings',
    title: 'Sterling Silver Bold Coil Drop Earrings',
    price: '£12.00',
    
  },
];

const Trending = () => {
  return (
    <div className="trending-container">
      <p className='trending'>T r e n d i n g</p>
      <div className="trending-grid">
        {images.map((image, index) => (
          <div key={index} className="trending-item">
            <img src={image.src} alt={image.alt} />
            <div className="trending-item-content">
              <h3>{image.title}</h3>
              <p>{image.price}</p>
              {image.sale && <span className="sale">Sale</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;