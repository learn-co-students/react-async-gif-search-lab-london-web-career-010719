import React, { Component } from 'react';
import GifSearch from './../components/GifSearch';
import GifList from './../components/GifList';

export default class GifListContainer extends React.Component {
  state = {
    searchTerm:"",
    searchResult:[]
  }

  searchGif=(event, searchTerm)=>{
    event.preventDefault();
    this.setState({searchTerm:searchTerm})
  }

  componentDidUpdate(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res=>res.json())
      .then(info=>info.data.map(gif=>gif.images.original.url))
      .then(urls=>this.setState({searchResult:urls}))
  }

  render(){
    return(
      <div>
        <GifSearch searchGif={this.searchGif} />
        <GifList searchResult={this.state.searchResult} />
      </div>
    )
  }
}
