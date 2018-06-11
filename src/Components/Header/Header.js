import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>Store</p>
      </div>
    );
  }
}

export default Header;
