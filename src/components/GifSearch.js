import React, { Component } from 'react';

export default class GifSearch extends React.Component {
  state = {
    searchTerm:""
  }

  handleChange = (event) => {
    this.setState(
      {[event.target.id]:event.target.value}
    )
  }


  render(){
    return(
      <form onSubmit={(event)=>this.props.searchGif(event, this.state.searchTerm)}>
        <label for="searchTerm">Type in what you want to search</label>
        <input type='text' id="searchTerm" className="form-control" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type='submit' value='Search' className="btn btn-success"/>
      </form>
    )
  }
}
