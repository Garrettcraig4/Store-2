import React, { Component } from "react";
import "./Store.css";
class Store extends Component {
  render() {
    return (
      <div className="Store">
        <h1>Shopeeeeee!</h1>
        <div className="flex">
          <div className="box">
            <p>name1</p>
            <p>$10000</p>
            <p>picture</p>
          </div>
          <div className="box">
            <p>name2</p>
            <p>$10000</p>
            <p>picture</p>
          </div>
          <div className="box">
            <p>name3</p>
            <p>$10000</p>
            <p>picture</p>
          </div>
          <div className="box">
            <p>name4</p>
            <p>$10000</p>
            <p>picture</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
