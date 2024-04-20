import React from 'react';
import PropTypes from 'prop-types';
import './css/Image.css';

const Image = ({ imageUrl, alt, description }) => {
  return (
    <div className="image-component">
      <img src={imageUrl} alt={alt} className="responsive-image" width='500px' />
      {description && (
        <div className="image-description-container">
          <p className="image-description">{description}</p>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  description: PropTypes.string
};

export default Image;
