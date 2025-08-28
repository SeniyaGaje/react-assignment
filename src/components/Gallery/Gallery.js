import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './Gallery.css';

const Gallery = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="no-results">
        <p>No images found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="gallery">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;