import React from 'react'

const GifList = (props) => {
    return(
        <div className='col-md-8'>
            <ul>
                {props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.slug}/></li>)}
            </ul>
        </div>
    )
}

export default GifList;