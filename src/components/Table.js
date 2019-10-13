import React from "react";
import PropTypes from "prop-types";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../styles/Table.css";

export function Table(props) {
  return (
    <table className="table table-hover table-fixed">
      <thead className="thead-dark">
        <tr>
          <th className="rank" onClick={props.onSort.bind(null, "rank")}>
            Rank {props.sortField === "rank" ? setIcon(props.sort) : null}
          </th>
          <th className="name" onClick={props.onSort.bind(null, "name")}>
            Name {props.sortField === "name" ? setIcon(props.sort) : null}
          </th>
          <th
            className="priceUsd"
            onClick={props.onSort.bind(null, "priceUsd")}
          >
            Price {props.sortField === "priceUsd" ? setIcon(props.sort) : null}
          </th>
          <th
            className="marketCapUsd"
            onClick={props.onSort.bind(null, "marketCapUsd")}
          >
            Market Cap{" "}
            {props.sortField === "marketCapUsd" ? setIcon(props.sort) : null}
          </th>
          <th
            className="changePercent24Hr"
            onClick={props.onSort.bind(null, "changePercent24Hr")}
          >
            Change (24Hr){" "}
            {props.sortField === "changePercent24Hr"
              ? setIcon(props.sort)
              : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.dataCoins.map(coin => (
          <tr key={coin.id}>
            <td className="rank">{coin.rank}</td>
            <td className="name">{coin.name}</td>
            <td className="priceUsd">$ {coin.priceUsd}</td>
            <td className="marketCapUsd">$ {coin.marketCapUsd}</td>
            {coin.changePercent24Hr >= 0 ? (
              <td className="changePercent24Hr" style={{ color: "green" }}>
                {coin.changePercent24Hr}%
              </td>
            ) : (
              <td className="changePercent24Hr" style={{ color: "red" }}>
                {coin.changePercent24Hr}%
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function setIcon(sort) {
  if (sort === "asc") {
    return <ArrowDropUpIcon></ArrowDropUpIcon>;
  } else {
    return <ArrowDropDownIcon></ArrowDropDownIcon>;
  }
}

Table.propTypes = {
  dataCoins: PropTypes.array,
  onSort: PropTypes.func,
  sortField: PropTypes.string,
  sort: PropTypes.string
};
