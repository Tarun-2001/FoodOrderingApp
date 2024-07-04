import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={LOGO_URL}/>
      </div>
      <h1>Food Order App</h1>
      <div className='nav-items'>
        <ul className='list-container'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
