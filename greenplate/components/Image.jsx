import React from 'react';
import PropTypes from 'prop-types';
import './css/Image.css';

const Image = ({ id, imageUrl, alt, description }) => {
  return (
    <div id={id} className="image-component"> {/* Apply the id here */}
      <img src={imageUrl} alt={alt} className="responsive-image" width="500px" />
      {description && (
        <div className="image-description-container">
          <p className="image-description">{description}</p>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  id: PropTypes.string, // Add id propType
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  description: PropTypes.string
};

export default Image;
