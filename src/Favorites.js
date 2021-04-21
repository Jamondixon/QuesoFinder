import React from 'react'
import NewFavoritesCard from './NewFavoritesCard'

export default function Favorites({favorites, clickAction}) {

    const displayFavorites = () => favorites.map(favorite => {
        return <NewFavoritesCard key={favorite.id} queso={favorite} clickAction={clickAction}/>
    })
    
    return (
        <div className="plate">
            {displayFavorites()}
        </div>
    )
}
