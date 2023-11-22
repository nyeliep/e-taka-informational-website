import React from 'react';
import './style.css'

const CustomerReview = ({ imageUrl, h1, text, fontSize }) => {
  return (
    <div className="customer-review-container">
      {imageUrl && <img src={imageUrl} alt="VCutout" className="review-image" />}
      <div className="review-div">
        <div className="review-text-container">
          {h1 && <div className="review-title">{h1}</div>}
          {text && <div className="review-text">{text}</div>}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;