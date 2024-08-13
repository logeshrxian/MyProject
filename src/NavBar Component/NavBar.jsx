import React, { useState } from 'react';
import './NavBar.css';
import marthalogo from '../Images/marthalogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__top">
        <div className="navbar__contact">
          <p>T: +44 (0)117 330 3542</p>
        </div>
        <div className="navbar__banner">
          <a href="/"><img src={marthalogo} alt="Banner" /></a>
        </div>
        <div className="navbar__icons">
          <a href="/account">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="/cart">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
        </div>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <button id="search-button-2" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="navbar__menu">
          <a href="/">New In</a>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('earrings')} onMouseLeave={handleMouseLeave}>
            <a href="/">Earrings</a>
            {dropdown === 'earrings' && <div className="navbar__dropdown">Studs</div>}
          </div>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('rings')} onMouseLeave={handleMouseLeave}>
            <a href="/">Rings</a>
            {dropdown === 'rings' && <div className="navbar__dropdown">Wedding Rings</div>}
          </div>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('necklaces')} onMouseLeave={handleMouseLeave}>
            <a href="/">Necklaces & Chains</a>
            {dropdown === 'necklaces' && <div className="navbar__dropdown">Couple's Chains</div>}
          </div>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('bracelets')} onMouseLeave={handleMouseLeave}>
            <a href="/">Bracelets & Anklets</a>
            {dropdown === 'bracelets' && <div className="navbar__dropdown">Valentine Bracelets</div>}
          </div>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('collections')} onMouseLeave={handleMouseLeave}>
            <a href="/">Collections</a>
            {dropdown === 'collections' && <div className="navbar__dropdown">Silver & Gold Collections</div>}
          </div>
          <div className="navbar__item" onMouseEnter={() => handleMouseEnter('personalised')} onMouseLeave={handleMouseLeave}>
            <a href="/">Personalised</a>
            {dropdown === 'personalised' && <div className="navbar__dropdown">Name Necklaces</div>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
