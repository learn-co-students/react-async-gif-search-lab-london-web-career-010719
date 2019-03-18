import React from "react";

export default class Giflist extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }

  showGifs = () => {
    return this.props.gifs.map(gif => console.log(gif.original.url));
  };

  render() {
    return <ul />;
  }
}
