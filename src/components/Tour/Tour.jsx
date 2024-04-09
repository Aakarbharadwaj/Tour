import React from 'react'
import Card from '../Card/Card'
import './Tour.css'
const Tour = ({ tours, removeTours }) => {
    return (
        <>
            <div className='head'>
                <h1>Tour And Explore</h1>
            </div>
            <div className='tour-body'>
                {
                    tours.map(item => {
                        return <Card {...item} key={item.id} removeTours={removeTours} />
                    })
                }
            </div>
        </>
    )
}

export default Tour