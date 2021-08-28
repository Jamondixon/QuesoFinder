
import React from 'react'


export default function QuesoCard({queso, clickAction}) {

    const handleClick = () => {
        clickAction(queso)
    }

    const displayPrice = () => {
        if ((queso.price) <= 5){
            return  "🤑"
        }else if ((queso.price) >= 6 && (queso.price) <= 9){
            return "🤑🤑"
        }else if ((queso.price) >= 10){
            return  "🤑🤑🤑"}
    }
    const displaySpicy = () => {
        if ((queso.spicy) <= 3){
            return  "🔥"
        }else if ((queso.spicy) >= 4 && (queso.spicy) <= 6){
            return "🔥🔥"
        }else if ((queso.spicy) >= 7){
            return  "🔥🔥🔥"}
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
                <div className='parent'>
                    <p className='price'>{displayPrice()}</p>
                    <div className='child'>
                        <p className='price2'>{displaySpicy()}</p>
                    </div>
                    <div className='price-heading'>
                        <h3>Price</h3>
                    </div>
                    <div className='spice-heading'>  
                        <h3>Spice</h3>
                    </div> 
                </div>

            </div>
        
    )
}
