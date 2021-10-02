import React, { useState, useEffect } from "react";
import sliderData from "../data/sliderData";
export default function NewImageSlider() {
  const [globalIndex, setGlobalIndex] = useState(0);
  const isHidden = (index) => {
    if (index === globalIndex + 1) {
      return "newFadeRightIn";
    }
    if (index <= globalIndex + 3 && index >= globalIndex + 1) {
      return "newFadeRightIn";
    }

    return "hiddenImage";
  };

  let imageComponents = sliderData.map((image, localIndex) => {
    const classApplied = isHidden(localIndex);
    if (localIndex === globalIndex + 1) {
      return (
        <button onClick={() => setGlobalIndex(globalIndex - 1)}>
          <div className={classApplied}>
            <img
              src={image.image}
              className="h-72 w-screen object-scale-down"
            ></img>
          </div>
        </button>
      );
    } else if (localIndex === globalIndex + 3) {
      return (
        <button onClick={() => setGlobalIndex(globalIndex + 1)}>
          <div className={classApplied}>
            <img
              src={image.image}
              className="h-72 w-screen object-scale-down"
            ></img>
          </div>
        </button>
      );
    }

    return (
      <div className={classApplied}>
        <img
          src={image.image}
          className="h-72 w-screen object-scale-down"
        ></img>
      </div>
    );
  });

  return <div className="flex ">{imageComponents}</div>;
}
