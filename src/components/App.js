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
      sortField: "rank"
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
        data.map(coin => {
          coin.rank = parseInt(coin.rank);
          coin.priceUsd = +parseFloat(coin.priceUsd).toFixed(4);
          coin.marketCapUsd = parseInt(coin.marketCapUsd);
          coin.changePercent24Hr = +parseFloat(coin.changePercent24Hr).toFixed(
            2
          );
        });
        this.setState({
          dataCoins: _.orderBy(data, this.state.sortField, this.state.sort)
        });
        const currencies = this.state.dataCoins.map(item => item.id).join(",");
        this.updatePrices(currencies);
      })
      .catch(error => console.error("Error:", error));
  }

  updatePrices(list) {
    const priceWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${list}`);

    priceWs.onmessage = message => {
      const price = JSON.parse(message.data);

      this.setState(currentState => {
        return {
          dataCoins: currentState.dataCoins.map(coin => {
            for (let key in price) {
              if (key === coin.id) {
                coin.priceUsd = +parseFloat(price[key]).toFixed(4);
              }
            }
            return coin;
          })
        };
      });
    };
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
        <Table
          dataCoins={this.state.dataCoins}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
        />
      </div>
    );
  }
}

export default App;
