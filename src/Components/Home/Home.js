import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome To The Store</h1>
        <Link to="/Store">
          <a>Store</a>
        </Link>
      </div>
    );
  }
}

export default Home;
