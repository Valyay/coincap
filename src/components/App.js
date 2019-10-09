import React, { Component } from "react";
import _ from "lodash";
import { Table } from "./Table";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCoins: [],
      sort: "asc",
      sortField: "id"
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

  onSort = sortField => {
    const cloneData = this.state.dataCoins.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      dataCoins: orderedData,
      sort: sortType,
      sortField
    });
  };

  render() {
    return (
      <div className="container">
        <Table dataCoins={this.state.dataCoins} onSort={this.onSort} />
      </div>
    );
  }
}

export default App;
