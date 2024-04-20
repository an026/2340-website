import React from 'react';
import Image from './Image'; // Assuming Image is in the same directory
import './css/Gallery.css'; // Path to your CSS file for styling the gallery

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <Image key={index} imageUrl={img.url} alt={img.alt} description={img.description} />
      ))}
    </div>
  );
};

export default Gallery;
