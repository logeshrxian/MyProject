import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';



const products = [
  
  {
    id: 1,
    name: 'Sterling Silver Strike Studs',
    price: 9.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML859_Sterling-Silver-Strike-Studs_2-500x500.jpg',
    
  },
  {
    id: 2,
    name: 'Sterling Silver Thunder Bolt Studs',
    price: 9.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/07/ML860_Sterling-Silver-Thunder-Bolt-Studs_Model-500x500.jpg',
  },
  {
    id: 3,
    name: 'Sterling Silver Zeus Studs',
    price: 9.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML858_Sterling-Silver-Zeus-Studs_4-500x500.jpg',
  },
  {
    id: 4,
    name: 'Sterling Silver Curb Chain Cuffs',
    price: 13.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/07/ML986_Sterling-Silver-Curb-Chain-Cuffs_2-copy-500x500.jpg',
  },
  {
    id: 5,
    name: 'Sterling Silver Paradise Hoops',
    price: 14.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/07/ML985_Sterling-Silver-Paradise-Hoops_3-500x500.jpg',
  },
  {
    id: 6,
    name: 'Sterling Silver Stangier Hoops',
    price: 15.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/07/ML987_Sterling-Silver-Goddess-Hoops_1-500x500.jpg',
  },
  {
    id: 7,
    name: 'Sterling Silver Goddess Hoops',
    price: 13.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/07/ML992_Sterling-Silver-Tangier-Hoops_5-500x500.jpg',
  },
  {
    id: 8,
    name: 'Sterling Silver Dahilla Dangaly Earings',
    price: 16.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML993_Sterling-Silver-Dahlia-Dangly-Earrings_1-500x500.jpg',
  },
  {
    id: 9,
    name: 'Sterling Silver Oval Ripple Earings',
    price: 13.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML849L_Sterling-Silver-Oval-Ripple-Earrings_3-500x500.jpg',
  },
  {
    id: 10,
    name: 'Sterling Silver Fern Feather Necklace',
    price: 20.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML848_Sterling-Silver-Fern-Feather-Necklace_5-500x500.jpg',
  },
  {
    id: 11,
    name: 'Sterling Silver Oval Opal flow Necklace',
    price: 20.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML847_Sterling-Silver-Oval-Opal-Flow-Necklace_4-500x500.jpg',
  },
  {
    id: 12,
    name: 'Amazonite Gemstone Beded Necklace ',
    price: 31.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML846P_Amazonite-Gemstone-Beaded-Necklace_2-500x500.jpg',
  },
  {
    id: 13,
    name: 'Amethyst Gemstone Beded Necklace',
    price: 42.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML845_Amethyst-Gemstone-Beaded-Necklace_4-500x500.jpg',
  },
  {
    id: 14,
    name: 'Sunset Mixed Gemstone Beded Necklace',
    price: 42.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML844_Sunset-Mixed-Gemstone-Beaded-Necklace_6-500x500.jpg',
  },
  {
    id: 15,
    name: 'Sunrise Mixed Gemstone Beded Necklace',
    price: 33.95,
    image: 'https://www.marthajackson.co.uk/content/uploads/2024/06/ML842_Sunrise-Mixed-Gemstone-Beaded-Necklace_3-500x500.jpg',
  },
];

const ProductList = () => {
  
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div className="buttons">
            <button className="add-to-cart">Add to Basket</button>
            <Link to={`/product`}>
              <button className="buy-now">View item</button>
            </Link>
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>£{product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;