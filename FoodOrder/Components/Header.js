import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlieStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <h1>Order Your Food</h1>
      <div className="nav-items">
        <ul className="list-container">
          <li>Status {onlieStatus ? "Online - 🟢" : "Offline - 🔴"}</li>
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
          <Link className="link" to='/classComponent' > <li>ClassComponent</li> </Link>
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
