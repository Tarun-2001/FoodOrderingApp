import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import { UserContext } from "../utils/Context/UserContext";
import { CartContext } from "../utils/Context/CartContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlieStatus = useOnlineStatus();
  const loginData = useContext(UserContext);
  const [cartLength,setCartLength] = useState(0)
  const {cartObject} = useContext(CartContext)

  useEffect(()=>{
    let len = 0;
   for(let cartObj in cartObject) len+=cartObject[cartObj]
   setCartLength(len)
  },[cartObject])
  return (
    <div className="header">
     
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div><h1>Order Your Food</h1></div>
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
          <Link className="link" to="/cart">
            <li><b>Cart({cartLength})</b></li>
          </Link>
          <Link className="link" to="/classComponent">
            {" "}
            <li>ClassComponent</li>{" "}
          </Link>
          <button
            className="logout"
            onClick={() => {
              if (loginData.loginStatus) {
                setBtnName("logout");
                loginData.setLoginStatus(false);
              } else {
                setBtnName("login");
                loginData.setLoginStatus(true);
              }
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
