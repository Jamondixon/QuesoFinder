
import React from 'react'

export default function QuesoCard({queso, clickAction}) {

    const handleClick = () => {
        clickAction(queso)
    }

    const displayPrice = () => {
        if ((queso.price) <= 5){
            return  "$"
        }else if ((queso.price) >= 6 && (queso.price) <= 9){
            return "$$"
        }else if ((queso.price) >= 10){
            return  "$$$"}
    }


    return (
        <div className="card text-center" onClick={handleClick}>
            <div className="overflow">
                <img src={queso.image} alt='Melted Cheese' className="card-img-top"/>
            </div>    
                <h1 className='card-title'>{queso.name}</h1>
                <h2 className='card-restaurant'>{queso.restaurant}</h2>
                <p className='card-description'>{queso.description}</p>
                <a href={queso.location} className="btn btn-outline-primary">{queso.restaurant}</a>
                <div>
                    <p className='price'>{displayPrice()}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-cash" viewBox="0 0 16 16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                </div>

            </div>
        
    )
}
