import React from "react";
import "./search.css";

export default class Search extends React.Component {
  render() {
    return (
      <form>
        <label>Search:</label>
        <input type="text" value="" placeholder="Type a book!"></input>
        <button className="searchButton">Search</button>
      </form>
    );
  }
}
