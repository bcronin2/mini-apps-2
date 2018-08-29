import React from "react";
import axios from "axios";

import Search from "./Search.jsx";
import ResultList from "./ResultList.jsx";

import urlParser from "../helpers/urlParser";
import ENDPOINTS from "../helpers/endpoints";

const PAGE_SIZE = 20;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: [],
      currentPage: 1,
      lastPage: 1
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  updateSearchQuery(e) {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  }

  submitSearch(e) {
    if (e.key === "Enter") {
      this.executeSearch();
    }
  }

  executeSearch() {
    const { searchQuery } = this.state;
    const url = `${
      ENDPOINTS.searchApi
    }/?q=${searchQuery}&_page=1&_limit=${PAGE_SIZE}`;
    axios.get(url).then(results => {
      const { link } = results.headers;
      const lastPage = urlParser.getLastPage(link);
      this.setState({ lastPage, searchResults: results.data });
    });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <Search update={this.updateSearchQuery} submit={this.submitSearch} />
        <ResultList results={searchResults} />
      </div>
    );
  }
}
