import React from 'react'

export default function NewFavoritesCard({queso, clickAction}) {

    const handleClick = () => {
        clickAction(queso)
    }

    return (
        <div className='new-favorites'  id="new-favs" onClick={handleClick}>
            <div className="card text-center" >
            <div className="overflow">
                <img src={queso.image} alt='Melted Cheese' className="card-img-top"/>
            </div>    
                <h1 className='card-title-2'>{queso.name}</h1>
                <h2 className='card-restaurant-2'>{queso.restaurant}</h2>
            </div>
        </div>
    )
}
