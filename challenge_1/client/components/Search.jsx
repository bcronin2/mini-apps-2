import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
  }

  updateSearchQuery(e) {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  }

  render() {
    const { submit } = this.props;
    const { searchQuery } = this.state;
    return (
      <div>
        <input
          onChange={this.updateSearchQuery}
          onKeyUp={e => submit(e, searchQuery)}
          autoFocus
        />
      </div>
    );
  }
}
