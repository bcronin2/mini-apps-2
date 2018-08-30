import React from "react";
import axios from "axios";

import Search from "./Search.jsx";
import ResultList from "./ResultList.jsx";
import Pages from "./Pages.jsx";

import urlParser from "../helpers/urlParser";
import ENDPOINTS from "../helpers/endpoints";

const PAGE_SIZE = 10;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: [],
      currentPage: 1,
      lastPage: 1
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.changePage = this.changePage.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  submitSearch(e, searchQuery) {
    if (e.key === "Enter") {
      this.setState({ searchQuery }, this.executeSearch);
    }
  }

  executeSearch() {
    const { searchQuery } = this.state;
    const url = `${
      ENDPOINTS.API
    }/?q=${searchQuery}&_page=1&_limit=${PAGE_SIZE}`;
    axios.get(url).then(results => {
      const { link } = results.headers;
      const lastPage = urlParser.getLastPage(link);
      this.setState({ lastPage, currentPage: 1, searchResults: results.data });
    });
  }

  changePage(pageNumber) {
    const { searchQuery } = this.state;
    const url = `${
      ENDPOINTS.API
    }/?q=${searchQuery}&_page=${pageNumber}&_limit=${PAGE_SIZE}`;
    axios.get(url).then(results => {
      this.setState({
        searchResults: results.data,
        currentPage: pageNumber
      });
    });
  }

  editEvent(id, data) {
    const url = `${ENDPOINTS.API}/${id}`;
    axios.patch(url, data);
  }

  render() {
    const { searchResults, currentPage, lastPage } = this.state;
    return (
      <div className="app">
        <div className="title">Search History</div>
        <Search submit={this.submitSearch} />
        {searchResults[0] && (
          <ResultList results={searchResults} edit={this.editEvent} />
        )}
        {lastPage > 1 && (
          <Pages
            currentPage={currentPage}
            lastPage={lastPage}
            changePage={this.changePage}
          />
        )}
      </div>
    );
  }
}
