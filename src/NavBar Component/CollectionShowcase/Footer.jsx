import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="https://www.marthajackson.co.uk/content/themes/twentytwenty-marthajackson/images/logo.svg" alt="Martha Jackson" />
      </div>
      <div className="footer__content">
        <div className="footer__newsletter">
          <p className='footer__title'>N e w s  l e t t e r </p>
          <form className="footer__form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer__payment">
          <img src="https://i.pinimg.com/originals/2d/8f/2d/2d8f2d0c852509c079562c441baeec2d.png" alt="Visa" />
          <img src="https://www.marthajackson.co.uk/content/themes/twentytwenty-marthajackson/images/logo-maestro.svg" alt="Maestro" />
          <img src="https://www.marthajackson.co.uk/content/themes/twentytwenty-marthajackson/images/logo-mastercard.svg" alt="Mastercard" />
          <img src="https://images.prismic.io/docsportal/502240a8-506e-44b3-84eb-d8e57609ab93_Marketing_Badge_With_Clear_Space.png?auto=compress,format" alt="Klarna" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal" />
        </div>
        <div className="footer__info">
          <a href="#">Delivery Info</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Returns Info</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Martha Jackson</a>
          <a href="#">How Klarna works</a>
        </div>
        <div className="footer__contact">
          <p>Unit 16, 14 King Square, Bristol, BS2 8JH, United Kingdom</p>
          <p><strong>T:</strong> +44 (0)117 330 3542</p>
          <p><strong>E:</strong> enquiries@marthajackson.co.uk</p>
        </div>
        <div className="footer__social">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ok_rJsBmJESDdl_ZiTmc6omPfuJmQTOOFA&s" alt="Facebook" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaA7wpNxbP81xdkh2BDkZk3KZ8c9lJRCAxg&s" alt="TikTok" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzL5YSeQN7VALokegXGWQYYzkkRKXL44N-Q&s" alt="Instagram" />
          <img src="https://www.svgrepo.com/show/140631/pinterest-white-logo-inside-a-black-square.svg" alt="Pinterest" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
