import React, { Component } from "react";
import Header from "./components/layout/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row"></div>
        </div>
      </>
    );
  }
}

export default App;
