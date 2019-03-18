import React from "react";

export default class GifSearch extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(e.target.search.value);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="search..." />
          <button>Search!</button>
        </form>
      </div>
    );
  }
}
