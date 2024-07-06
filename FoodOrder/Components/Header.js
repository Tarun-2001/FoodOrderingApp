import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <h1>Order Your Food</h1>
      <div className="nav-items">
        <ul className="list-container">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/aboutUs">
            <li>About Us</li>
          </Link>
          <Link className="link" to="/contactUs">
            <li>Contact Us</li>
          </Link>
          <li>Cart</li>
          <button
            className="logout"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
