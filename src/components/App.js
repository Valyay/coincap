import React, { Component } from "react";
import Table from "./Table";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        MyApp
        <Table />
      </div>
    );
  }
}

export default App;
