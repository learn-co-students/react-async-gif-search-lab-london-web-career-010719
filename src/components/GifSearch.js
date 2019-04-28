import React from 'react'

class GifSearch extends React.Component {
    state = {
        searchTerm: undefined
    }

    handleChange = (event) => {
        event.persist()
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className='col-md-4'>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.searchTerm)}>
                    <label>Enter a Search Term: </label>
                    <br></br>
                    <input type='text' className='form-control' onChange={this.handleChange} />
                    <br></br>
                    <input type='submit' className="btn btn-success" value='Find Gifs' />
                </form>
            </div>
        )
    }
}

export default GifSearch;