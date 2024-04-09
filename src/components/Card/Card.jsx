import React from 'react'
import './Card.css'
const Card = ({ id, name, info, image, price }) => {

    const description = info.sub
    return (
        <div className='card'>
            <img className='image' src={image} />
            <div className='card-content '>
                <h3>{price}/-</h3>
                <h1>{name}</h1>
                <p className='card-description'>{info}... <span>Read more</span></p>
            </div>
            <div className='button'>
                <button>Not interested</button>
            </div>
        </div>
    )
}

export default Card