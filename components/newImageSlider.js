import React, { useState, useEffect } from "react";
import sliderData from "../data/sliderData";
export default function NewImageSlider() {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([
    sliderData[index % sliderData.length],
    sliderData[(index + 1) % sliderData.length],
    sliderData[(index + 2) % sliderData.length],
    sliderData[(index + 3) % sliderData.length],
    sliderData[(index + 4) % sliderData.length],
  ]);

  useEffect(() => {
    setLoadedImages([
      sliderData[index % sliderData.length],
      sliderData[(index + 1) % sliderData.length],
      sliderData[(index + 2) % sliderData.length],
      sliderData[(index + 3) % sliderData.length],
      sliderData[(index + 4) % sliderData.length],
    ]);
    console.log(loadedImages);
  }, [index]);

  return (
    <div className="flex">
      <img
        src={loadedImages[0].image}
        className="hidden h-72 w-screen object-scale-down"
      ></img>
      <button onClick={() => setIndex(index + 1)}>
        <img
          src={loadedImages[1].image}
          className="h-72 w-screen object-scale-down"
        ></img>
      </button>
      <img
        src={loadedImages[2].image}
        className="h-72 w-screen object-scale-down"
      ></img>
      <button onClick={() => setIndex(index + 1)}>
        <img
          src={loadedImages[3].image}
          className="h-72 w-screen object-scale-down"
        ></img>
      </button>
      <img
        src={loadedImages[4].image}
        className="hidden h-72 w-screen object-scale-down"
      ></img>
    </div>
  );
}
