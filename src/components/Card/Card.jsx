import React, { useState } from 'react'
import './Card.css'
const Card = ({ id, name, info, image, price }) => {
    const [readmore, setReadmore] = useState(false);
    if(!desc)?
    const description = `${info.substring(0, 100)}...`

    return (
        <div className='card'>
            <img className='image' src={image} />
            <div className='card-content '>
                <h3>{price}/-</h3>
                <h1>{name}</h1>
                <p className='card-description'>{description} <span>{readmore?'Show less':'Read more'}</span></p>
            </div>
            <div className='button'>
                <button>Not interested</button>
            </div>
        </div>
    )
}

export default Card