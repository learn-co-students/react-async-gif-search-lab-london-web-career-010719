import React from "react"

const GifSearch = props => {
  return (
    <input
      onChange={event => props.setSearch(event)}
      type="text"
      value={props.search}
    />
  )
}

export default GifSearch
