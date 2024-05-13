import React from "react";

import "./ImageContainer.css";

const ImageContainer = ({ src, title }) => {
  return (
    <>
      <div className="image-container">
        <div className="family-image-wrapper"></div>
        {/* <img src={src} alt={title} className="family-image" /> */}
        <div className="family-title-wrapper">
          <h2 className="family-title">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
