import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(image.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorites(image.id);
    } else {
      addToFavorites(image);
    }
  };

  return (
    <div className="image-card">
      <img 
        src={image.urls.small} 
        alt={image.alt_description || 'Unsplash image'} 
        className="image"
      />
      <div className="image-overlay">
        <button 
          className={`favorite-button ${favorite ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;