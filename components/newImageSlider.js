import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import sliderData from "../data/sliderData";
export default function NewImageSlider() {
  const leftToCenter = useSpring({
    to: async (next, cancel) => {
      await next({ transform: "translateX(33%) scale(1.5)" });
    },
    from: { transform: "translateX(0px) scale(1.0)" },
  });
  const centerToRight = useSpring({
    to: async (next, cancel) => {
      await next({ transform: "translateX(33%) scale(1.0)" });
    },
    from: { transform: "translateX(0px) scale(1.5)" },
  });
  const fadeIn = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: "100%" });
    },
    from: { opacity: "0%" },
  });
  const fadeOut = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: "0%" });
    },
    from: { opacity: "100%" },
  });

  const [center, setCenter] = useState(1);
  const [animationStates, setanimationStates] = useState(
    sliderData.map((image, index) => {
      if (Math.abs(center - index) < 2) {
        return fadeIn;
      }
      return "";
    })
  );
  //sets initial state of the image and initial animations
  let imageComponents = sliderData.map((image, index) => {
    if (index === center - 1) {
      return (
        <button>
          <animated.div style={animationStates[index]}>
            <img
              src={image.image}
              className="h-72 w-screen object-scale-down"
              key={Math.random()}
            ></img>
          </animated.div>
        </button>
      );
    }
    if (index === center) {
      return (
        <animated.div style={animationStates[index]}>
          <img
            src={image.image}
            className="h-72 w-screen object-scale-down"
            key={Math.random()}
          ></img>
        </animated.div>
      );
    }
    if (index === center + 1) {
      return (
        <button onClick={() => setFuck(fuck + 1)}>
          <animated.div style={animationStates[index]}>
            <img
              src={image.image}
              className="h-72 w-screen object-scale-down"
              key={Math.random()}
            ></img>
          </animated.div>
        </button>
      );
    }
  });

  return <div className="flex">{imageComponents}</div>;
}
