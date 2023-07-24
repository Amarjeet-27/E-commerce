import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input type="text" className="input" placeholder="search" />
            <i className="fa-solid fa-magnifying-glass searchBar" />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">MY APP</h1>
        </div>
        <div className="right">
          <button>REGISTER</button>
          <button>SIGN IN</button>
          <i class="fa-solid fa-cart-shopping cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
