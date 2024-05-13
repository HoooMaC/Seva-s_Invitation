import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
// import "./Experiment.css";

import placeholderImage from "../assets/images/temp/PLACEHOLDER IMAGE.png";

const ImageFrame = ({ id, src, alt, top, left, bottom, right }) => {
  const calculatePositionStyle = () => {
    let positionStyle = {};

    // Check if left or right property is provided
    if (left !== undefined) {
      positionStyle.left = left;
    } else if (right !== undefined) {
      positionStyle.right = right;
    }

    // Check if top or bottom property is provided
    if (top !== undefined) {
      positionStyle.top = top;
    } else if (bottom !== undefined) {
      positionStyle.bottom = bottom;
    }

    return positionStyle;
  };

  return (
    <img
      id={id}
      className="image-frame"
      src={src}
      alt={alt}
      style={{ position: "absolute", ...calculatePositionStyle() }}
    />
  );
};

const Experiment = () => {
  useEffect(() => {
    const transformComponent = document.querySelector(
      ".react-transform-component",
    );
    const imageContent = document.querySelector(".image-content");
    transformComponent.addEventListener("click", e => {
      console.log(e);
    });
    transformComponent.addEventListener("click", e => {
      console.log("Transform");
    });
    // imageContent.addEventListener('click', e => {console.log("image component")});
  });
  return (
    <TransformWrapper>
      {({ zoomToElement }) => (
        <>
          <button type="button" onClick={() => zoomToElement("image")}>
            Zoom to element 1
          </button>
          <TransformComponent
            onClick={e => console.log(e)}
            style={{ zIndex: -2 }}
          >
            <div className="box">
              <ImageFrame
                id="image"
                src={placeholderImage}
                alt="image"
                top="20%"
                left="50%"
              />
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default Experiment;
