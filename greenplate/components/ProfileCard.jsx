import React from 'react';
import PropTypes from 'prop-types';
import './css/ProfileCard.css'; // Make sure to create this CSS file

const ProfileCard = ({ profilePic, name, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-pic-container">
        <img src={profilePic} alt={`Profile of ${name}`} className="profile-pic" />
        <div className="name">{name}</div>
      </div>
      <div className="profile-description">{description}</div>
    </div>
  );
};

ProfileCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProfileCard;
