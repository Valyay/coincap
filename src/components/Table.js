import React from "react";
import PropTypes from "prop-types";

export function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Change (24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {props.dataCoins.map(coin => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.priceUsd}</td>
            <td>{coin.marketCapUsd}</td>
            <td>{coin.changePercent24Hr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  dataCoins: PropTypes.array
};
