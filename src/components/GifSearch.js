import React from "react";

export default class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={event =>
              this.setState({ searchTerm: event.target.value })
            }
            type="text"
            name="search"
            placeholder="search..."
          />
          <button>Search!</button>
        </form>
      </div>
    );
  }
}
