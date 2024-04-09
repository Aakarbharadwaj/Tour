import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div className='card'>
            <img src='' />
            <div className='card-content '>
                <h1>Title</h1>
                <h3>4500/-</h3>
                <p className='card-description'>hello world <span>Read more...</span></p>
            </div>
            <button>Not interested</button>
        </div>
    )
}

export default Card