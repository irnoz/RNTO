import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(new Set());

    const addFavourite = (item) => {
        setFavourites(new Set(favourites.add(item)));
    };

    const removeFavourite = (item) => {
        favourites.delete(item);
        setFavourites(new Set(favourites));
    }

    const clearFavourites = () => {
        setFavourites(new Set());
    }

    const isFavourite = (item) => {
        return favourites.has(item)
    }

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, clearFavourites, isFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouritesContext);
