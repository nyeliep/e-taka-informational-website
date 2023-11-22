

import React from 'react';
import './style.css'; 


export const VectorElement = ({ triangleColor, imageUrl, h1, text, fontSize }) => {
  return (
    <div className="vectorElement">
      <div className='icon'>
      {imageUrl && <img src={imageUrl} alt="VectorElement" className="imageStyle" />}
      <div className="sustainability"></div>
      <div className="community"></div>
      </div>
      <div className="divContainerStyle">
        {h1 && <div className="customer">{h1}</div>}
        {text && <div className="text">{text}</div>}
      </div>
    </div>
  );
};
