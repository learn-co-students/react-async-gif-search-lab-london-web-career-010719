import React, { Component } from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends Component {
  state = {
    gifs: [],
    search: ""
  }

  getGifs(search) {
    return fetch(
      `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(message => this.setState({ gifs: message.data.slice(0, 3) }))
  }

  componentDidUpdate() {
    this.getGifs(this.state.search)
  }

  setSearch(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <div>
        <GifSearch
          setSearch={event => this.setSearch(event)}
          search={this.state.search}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
