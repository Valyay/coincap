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
      <div>
        <h1>My React App!</h1>
        <Table />
      </div>
    );
  }
}

export default App;
