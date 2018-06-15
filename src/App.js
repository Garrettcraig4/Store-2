import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
