import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        ></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Hello Madhav</span>
            <span className="header_optionLine2">Sign In</span>
          </div>
        </Link>
        <Link className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Returns</span>
            <span className="header_optionLine2">& Orders</span>
          </div>
        </Link>
        <Link className="header_link">
          <div className="header_option">
            <span className="header_optionLine1">Your</span>
            <span className="header_optionLine2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLine2 header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
