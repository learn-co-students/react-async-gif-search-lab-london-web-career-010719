import React, { Component } from 'react';

export default class GifList extends React.Component {
  render(){
    return(
      <div>
      <ul>
        {this.props.searchResult.map(url=><li><img src={url} alt="hehe" /></li>)}
      </ul>
      </div>
    )
  }
}
