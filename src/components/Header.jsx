import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [btnNameReact,setBtnNameReact] =useState("login");


    return (
      <div className="header">
        <div className='logo-container'>
          <img className='logo'
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" 
            onClick={() => {
              setBtnNameReact(btnNameReact === 'Login' ? 'Logout' : 'Login');
            }}
            >
            {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;