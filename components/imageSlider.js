import React, { useEffect, useState } from "react";
import sliderData from "../data/sliderData.js";
export default function ImageSlider() {
  const length = sliderData.length;

  const [current, setCurrent] = useState(0);

  const [prevFadeIn, setPrevFadeIn] = useState(false);
  const [nextFadeIn, setNextFadeIn] = useState(false);

  const [loadedImages, setLoadedImages] = useState([
    sliderData[current % sliderData.length],
    sliderData[(current + 1) % sliderData.length],
    sliderData[(current + 2) % sliderData.length],
    sliderData[(current + 3) % sliderData.length],
    sliderData[(current + 4) % sliderData.length],
  ]);

  useEffect(() => {
    setLoadedImages([
      sliderData[current % sliderData.length],
      sliderData[(current + 1) % sliderData.length],
      sliderData[(current + 2) % sliderData.length],
      sliderData[(current + 3) % sliderData.length],
      sliderData[(current + 4) % sliderData.length],
    ]);
    console.log(loadedImages);
  }, [current]);

  /*if(!Array.isArray(slides) || slides.length <= 0) {
        console.log(Array.isArray(slides));
        console.log(slides.length);
        return null;
        
    }*/

  const nextSlide = () => {
    setNextFadeIn(true);
    setPrevFadeIn(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setNextFadeIn(false);
    setPrevFadeIn(true);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const getClassName = (index) => {
    if (!prevFadeIn && !nextFadeIn) {
      if (index === 0 || index === 2) {
        return "default-side";
      }
      return "default-current";
    }
    if (prevFadeIn) {
      if (index === 0) {
        return "leftToggleIn";
      } 
      if(index === 1) {
        return "leftToggleOut";
      }   
      return "default-side";
    }
    if (nextFadeIn) {
      if (index === 2) {
        return "rightToggleIn";
      }
      if(index === 1) {
        return "rightToggleOut";
      }
      return "default-side";
    }
    return "";
  };

  const getIndex = (index) => {
    if(nextFadeIn) {
      return (index - 1 + 3) % 3;
    }
    else if(prevFadeIn) {
      return (index + 1) % 3;
    }
    return index;
  }
  return (
    <div className="flex items-center h-72 space-evenly justify-evenly flex-col gap-5">
      <div>
        <button className="test2"></button>
      </div>
      <div className="flex w-4/5">
        <section className="flex justify-content-center">
          <div key={Math.random()} className={getClassName(0)}>
            <img
              src={loadedImages[getIndex(0)].image}
              className="h-72 w-screen object-scale-down"
            />
          </div>
          <div key={Math.random()} className={getClassName(1)}>
            <img
              src={loadedImages[getIndex(1)].image}
              className="h-72 w-screen object-scale-down"
            />
          </div>
          <div key={Math.random()} className={getClassName(2)}>
            <img
              src={loadedImages[getIndex(2)].image}
              className="h-72 w-screen object-scale-down"
            />
          </div>
        </section>
      </div>
      <div className="flex item-end gap-3">
          <button className="px-16 py-2 bg-gray-400" onClick={prevSlide}>left arrow</button>
          <button className="px-16 py-2 bg-gray-400" onClick={nextSlide}>right arrow</button>
      </div>
    </div>
  );
}
