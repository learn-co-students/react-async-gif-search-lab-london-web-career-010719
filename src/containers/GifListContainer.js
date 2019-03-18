import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs: [],
        searchTerm: 'YOUR QUERY HERE'
    }

    componentDidUpdate() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifData => this.setState({gifs: gifData.data}))
    }


    handleSubmit = (event, term) => {
        event.preventDefault()
        this.setState({
            searchTerm: term
        })
        // fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
        // .then(res => res.json())
        // .then(gifData => this.setState({gifs: gifData.data}))
    }

    render() {
        return(
            <div className='row'>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>          
        )
    }
}

export default GifListContainer;