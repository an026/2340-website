import React from 'react';
import PropTypes from 'prop-types';
import './css/Video.css';


const Video = ({ videoUrl, description }) => {
  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="youtube-video-component">
      <h2>Functionality Demo</h2>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {description && <p className="video-description">{description}</p>}
    </div>
  );
};

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Video;
