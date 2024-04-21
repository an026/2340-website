import React, { useState } from 'react';
import './css/CollapsibleCard.css'; // Ensure you create this CSS file

const CollapsibleCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-card">
      <div className="card-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <div className={`arrow ${isOpen ? 'open' : ''}`}>▼</div>
      </div>
      {isOpen && <div className="card-content"><p>{content}</p></div>}
    </div>
  );
};

export default CollapsibleCard;
