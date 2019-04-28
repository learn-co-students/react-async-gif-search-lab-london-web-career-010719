import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  handleSearch = searchTerm => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(foundGifs => this.setState({ gifs: foundGifs.data.slice(0, 3) }));
  };

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
