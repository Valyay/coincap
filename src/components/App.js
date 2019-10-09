import React, { Component } from "react";
import { Table } from "./Table";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCoins: []
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      hostname: "api.coincap.io",
      path: "/v2/assets",
      headers: {}
    };

    fetch("https://api.coincap.io/v2/assets", options)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ dataCoins: data, isLoading: false });
        return data;
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <div className="container">
        <Table dataCoins={this.state.dataCoins} />
      </div>
    );
  }
}

export default App;
