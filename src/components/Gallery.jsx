import React from 'react';
import TourCard from './TourCard';
import './Gallery.css'; // Optional: Add styles for the gallery

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;