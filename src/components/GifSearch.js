import React from 'react'

class GifSearch extends React.Component {

    render() {
        return(
            <div className='col-md-4'>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Enter a Search Term: </label>
                    <br></br>
                    <input type='text' className='form-control' onChange={this.props.handleChange} />
                    <br></br>
                    <input type='submit' className="btn btn-success" value='Find Gifs' />
                </form>
            </div>
        )
    }
}

export default GifSearch;