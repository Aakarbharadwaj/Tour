import React, { useState } from 'react'
import './Card.css'
const Card = ({ id, name, info, image, price ,removeTours}) => {
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore?info:`${info.substring(0, 100)}...`
    const readmoreHandler = ()=>{
        setReadmore(!readmore);
    }
    return (
        <div className='card'>
            <img className='image' src={image} />
            <div className='card-content '>
                <h3>{price}/-</h3>
                <h1>{name}</h1>
                <p className='card-description'>{description} <span onClick={readmoreHandler}>{readmore?'Show less':'Read more'}</span></p>
            </div>
            <div className='button'>
                <button onClick={()=>removeTours(id)}>Not interested</button>
            </div>
        </div>
    )
}

export default Card