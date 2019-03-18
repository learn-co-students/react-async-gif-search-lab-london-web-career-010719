import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs: [],
        searchTerm: undefined
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(gifData => this.setState({gifs: gifData.data}))
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifData => this.setState({gifs: gifData.data}))
    }

    render() {
        return(
            <div className='row'>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>          
        )
    }
}

export default GifListContainer;