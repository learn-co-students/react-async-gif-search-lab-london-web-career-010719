import React, { Component } from 'react'

class GifSearch extends Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.search()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.props.getSearchTerm()}
          onChange={e => this.props.setSearchTerm(e.target.value)}
          placeholder='search for a gif...'
        />
        <button className='btn btn-sm btn-success'>Get Dem Gifs</button>
      </form>
    )
  }
}
export default GifSearch
