import React from "react";

export default class Giflist extends React.Component {
  showGifs = () => {
    return this.props.gifs.map(gif => (
      <img key={gif.slug} src={gif.images.original.url} alt="gif" />
    ));
  };

  render() {
    return <div>{this.showGifs()}</div>;
  }
}

// showGifs = () => {
//     return this.props.gifs.map(gif => console.log(gif.original.url));
// };
