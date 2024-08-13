import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faRing, faShippingFast, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './HeaderIcons.css'; 

const HeaderIcons = () => {
  return (
    <div className="header-icons__container">
      <div className="header-icon">
        <FontAwesomeIcon icon={faGift} />
        <p>Free Gift Box</p>
      </div>
      <div className="header-icon">
        <FontAwesomeIcon icon={faRing} />
        <p>Sterling Silver Jewelry</p>
      </div>
      <div className="header-icon">
        <FontAwesomeIcon icon={faShippingFast} />
        <p>Free UK Shipping</p>
      </div>
      <div className="header-icon">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
        <p>LetterBox Friendly</p>
      </div>
    </div>
  );
}

export default HeaderIcons;
