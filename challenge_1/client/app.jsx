import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ENDPOINTS from "./endpoints";

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { value } = e.target;
    axios.get(ENDPOINTS.searchApi).then(results => {
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
