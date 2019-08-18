import React, { Component } from "react";
import Header from "../header/header";
import Search from "../search/search";
import Filter from "../filter/filter";
import Booklist from "../booklist/booklist";

const key = "AIzaSyDyeka9DmrpZqMvs-LvNjoR-ELMYeDUGvk";

class BooklistApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "daniel",
      results: {},
      error: "",
      filter: ""
    };
  }

  updateSearch(value) {
    this.setState({ search: value });
  }

  updateFilter(filter) {
    this.setState({ filter: filter });
  }

  componentDidMount() {
    const searchTerm = this.state.search;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDyeka9DmrpZqMvs-LvNjoR-ELMYeDUGvk`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    console.log(this.state.results);
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="search">
          <Search handleSearch={value => this.updateSearch(value)} />
        </div>
        <div className="filter">
          <Filter handleFilter={filter => this.updateFilter(filter)} />
        </div>
        <div className="booklist">
          <Booklist />
        </div>
      </div>
    );
  }
}

export default BooklistApp;
