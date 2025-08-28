import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (image) => {
    setFavorites(prevFavorites => [...prevFavorites, image]);
  };

  const removeFromFavorites = (imageId) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(image => image.id !== imageId)
    );
  };

  const isFavorite = (imageId) => {
    return favorites.some(image => image.id === imageId);
  };

  const value = {
    favorites,
    favoritesCount: favorites.length,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};