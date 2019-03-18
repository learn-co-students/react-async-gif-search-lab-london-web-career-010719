import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const BASE_URL =
  'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q='

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ''
  }

  setSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }
  getSearchTerm = () => this.state.searchTerm

  search = () => {
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(respObj => this.setState({ gifs: respObj.data.slice(0, 3) }))
  }

  render() {
    return (
      <div>
        <GifSearch
          search={this.search}
          getSearchTerm={this.getSearchTerm}
          setSearchTerm={this.setSearchTerm}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
