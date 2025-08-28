import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import './Header.css';

const Header = () => {
  const { favoritesCount } = useFavorites();

  return (
    <header className="header">
      <h1>Image Search</h1>
      <div className="favorites-count">
        Favorites: {favoritesCount}
      </div>
    </header>
  );
};

export default Header;