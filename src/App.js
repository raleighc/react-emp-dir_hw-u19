import React, { Component } from "react";
import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <div className="container">
          <div className="row"></div>
        </div>
      </>
    );
  }
}

export default App;
