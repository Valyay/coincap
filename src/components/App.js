import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCoins: {}
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
        this.setState({ dataCoins: data });
        return data;
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return (
      <div>
        <h1>My React App!</h1>
      </div>
    );
  }
}

export default App;
