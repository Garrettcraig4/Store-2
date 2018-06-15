import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/Store">
          <p className="link">Store</p>
        </Link>

        <Link to="/Cart">
          <p className="link">Cart</p>
        </Link>
      </div>
    );
  }
}

export default Header;
