import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src="https://www.marthajackson.co.uk/content/uploads/2024/06/ML858_Sterling-Silver-Zeus-Studs_4.jpg" alt="Sterling Silver Strike Studs" />
      </div>
      <div className="product-details">
        <h2>Sterling Silver Strike Studs</h2>
        <p className="price">£9.95</p>
        <ul className="product-info">
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEObV2Q3xyvBVqLIXGngBKwnHTpYk-gLSXkA&s" alt="925 Sterling Silver" className="icon" /> 925 Sterling Silver</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7-RISHdswh0vh_ZA_bf6dWtL3OjcnGOjCA&s" alt="FREE UK Shipping" className="icon" /> FREE UK Shipping</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGHj4ThEsx-OylSChFc8qvtOtBpoxCLs30Q&s" alt="Presented in a gift box" className="icon" /> Presented in a gift box</li>
        </ul>
        <ul className="product-description">
          <li>Sterling silver studs</li>
          <li>Sterling silver butterfly backs</li>
          <li>Made from recycled sterling silver</li>
        </ul>
        <div className="dimensions">
          <h3>Dimensions:</h3>
          <p>3mm x 12mm</p>
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" min="1" defaultValue="1" />
        </div>
        <button className="add-to-basket">ADD TO BASKET</button>
        <div className="payment-options">
          <img src="https://images.prismic.io/docsportal/502240a8-506e-44b3-84eb-d8e57609ab93_Marketing_Badge_With_Clear_Space.png?auto=compress,format" alt="Klarna" className="klarna-logo" />
          <p>Pay in 30 days. <a href="#">Learn more</a></p>
          <p>18+, T&C apply, Credit subject to status.</p>
        </div>
        <div className="full-product-description">
          <p>Full Product description</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;