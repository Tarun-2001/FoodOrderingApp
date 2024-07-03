import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0ElOBVTLWho6jbj4If_Rz7keEHazExyTbyqZzHHqlBnyF5D_ob0dEvxtW4yjE__gpw8&usqp=CAU'/>
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
