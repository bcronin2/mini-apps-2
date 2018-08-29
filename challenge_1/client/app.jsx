import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ENDPOINTS from "./endpoints";

const PAGE_SIZE = 20;

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: [],
      currentPage: 1
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
      console.log(results);
      this.setState({ searchResults: results.data });
    });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <input onChange={this.updateSearchQuery} onKeyUp={this.submitSearch} />
        {searchResults.map(searchResult => (
          <div>{JSON.stringify(searchResult)}</div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<SearchHistory />, document.getElementById("container"));
