
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
                    <div className='dollar'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-cash" viewBox="0 0 16 16">
                            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                        </svg>
                    </div>
                    <div className='thermometer'>  
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-thermometer-half" viewBox="0 0 16 16">
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                        </svg>
                    </div> 
                </div>

            </div>
        
    )
}
