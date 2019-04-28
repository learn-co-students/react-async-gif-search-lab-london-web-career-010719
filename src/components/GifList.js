import React, { Component, Fragment } from 'react'

class GifList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.gifs.map(gif => (
          <img src={gif.images.original.url} />
        ))}
      </Fragment>
    )
  }
}
export default GifList
