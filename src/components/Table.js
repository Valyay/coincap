import React, { Component } from "react";

class Table extends Component {
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
        this.setState({ dataCoins: data });
        return data;
      })
      .catch(error => console.error("Error:", error));
  }

  renderTableData() {
    return this.state.dataCoins.map(coin => {
      const {
        rank,
        id,
        name,
        priceUsd,
        marketCapUsd,
        changePercent24Hr
      } = coin;
      return (
        <tr key={id}>
          <td>{rank}</td>
          <td>{name}</td>
          <td>{priceUsd}</td>
          <td>{marketCapUsd}</td>
          <td>{changePercent24Hr}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    if (this.state.dataCoins.length !== 0) {
      let coin = Object.values(this.state.dataCoins)[0];
      delete coin.id;
      delete coin.maxSupply;
      delete coin.supply;
      delete coin.symbol;
      delete coin.volumeUsd24Hr;
      delete coin.vwap24Hr;

      let header = Object.keys(coin);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
