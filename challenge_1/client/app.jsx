import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ENDPOINTS from "./endpoints";

const PAGE_SIZE = 20;

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      resultsPage: 1
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { value } = e.target;
    const { resultsPage } = this.state;
    const url = `${
      ENDPOINTS.searchApi
    }/?q=${value}&_page=${resultsPage}&_limit=${PAGE_SIZE}`;
    axios.get(url).then(results => {
      this.setState({ searchResults: results.data });
    });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <input onChange={this.handleSearch} />
        {searchResults.map(searchResult => (
          <div>{JSON.stringify(searchResult)}</div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<SearchHistory />, document.getElementById("container"));
