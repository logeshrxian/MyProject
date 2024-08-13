import React from 'react';
import './EaringsGallery.css';

function EaringsGallery() {
  return (
    <div className="earings-gallery">
      <p className='earings-title'>N e w  I n </p>
      <div className="earings-container">
        <div className="earings-product">
          <img src="https://www.marthajackson.co.uk/content/uploads/2021/05/HAMMERED_AND_PLAIN_RING_ENGRAVING_1_900x900-350x350.jpg" alt="Sterling Silver Oval Ripple Earrings" />
          <p>Sterling Silver Oval Ripple Earrings</p>
          <p>£13.95</p>
        </div>
        <div className="earings-product">
          <img src="https://www.marthajackson.co.uk/content/uploads/2021/05/ml920sterlingsilvermoonandstarscharmsnecklace1-500x500.png" alt="Sterling Silver Small Oval Ripple Earrings" />
          <p>Sterling Silver Small Oval Ripple Earrings</p>
          <p>£13.95</p>
        </div>
        <div className="earings-product">
          <img src="https://www.marthajackson.co.uk/content/uploads/2022/08/ML968_STERLING-SILVER-HANGING-LANTERNS-STUD-CHAIN-EARRINGS_3-500x500.jpg" alt="Sterling Silver Fern Feather Necklace" />
          <p>Sterling Silver Fern Feather Necklace</p>
          <p>£20.95</p>
        </div>
        <div className="earings-product">
          <img src="https://www.marthajackson.co.uk/content/uploads/2022/07/ME515_STERLING-SILVER-BOLD-COIL-DROP-EARRINGS_4-500x500.jpg" alt="Sterling Silver Oval Opal Flow Necklace" />
          <p>Sterling Silver Oval Opal Flow Necklace</p>
          <p>£20.95</p>
        </div>
      </div>
    </div>
  );
}

export default EaringsGallery;
