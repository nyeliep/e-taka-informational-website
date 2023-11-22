import React from 'react';
import './style.css';

const TeamItem = ({ imageUrl, name, role }) => {
    return (
      <div className="team-item-container">
        <div>
        <div className="div-style-1"></div>
        <div className="div-style-2"></div>
        <div className="div-style-3">
          {imageUrl && <img src={imageUrl} alt="member" className="img-style" />}
        </div>
        <h2 className="name-style">{name}</h2>
        <p className="role-style">{role}</p>
        </div>
      </div>
    );
  };

export default TeamItem;
