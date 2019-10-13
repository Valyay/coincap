import React from "react";
import PropTypes from "prop-types";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "rank")}>
            Rank {props.sortField === "rank" ? setIcon(props.sort) : null}
          </th>
          <th onClick={props.onSort.bind(null, "name")}>
            Name {props.sortField === "name" ? setIcon(props.sort) : null}
          </th>
          <th onClick={props.onSort.bind(null, "priceUsd")}>
            Price {props.sortField === "priceUsd" ? setIcon(props.sort) : null}
          </th>
          <th onClick={props.onSort.bind(null, "marketCapUsd")}>
            Market Cap{" "}
            {props.sortField === "marketCapUsd" ? setIcon(props.sort) : null}
          </th>
          <th onClick={props.onSort.bind(null, "changePercent24Hr")}>
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
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.priceUsd}</td>
            <td>{coin.marketCapUsd}</td>
            {coin.changePercent24Hr >= 0 ? (
              <td style={{ color: "green" }}>{coin.changePercent24Hr}</td>
            ) : (
              <td style={{ color: "red" }}>{coin.changePercent24Hr}</td>
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
