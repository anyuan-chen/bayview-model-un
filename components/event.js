import React, { useState } from "react";

export default function Event(props) {

  const [onImage, setOnImage] = useState(false);
  const [offImage, setOffImage] = useState(false);

  const getClassName = () => {
    if(!onImage && !offImage) {
      return "";
    }
    if(onImage) {
      return "event-on-image";
    }
    return "event-off-image";
  }

  const hoverImage = () => {
    setOnImage(true);
    setOffImage(false);
  }

  const unHoverImage = () => {
    setOffImage(true);
    setOnImage(false);
  }
  
  return (
    <div className="flex flex-col shadow-md p-8 content-between justify-between">
      <div className="event">
        <div className={getClassName()} onMouseEnter={() => hoverImage()} onMouseLeave={() => unHoverImage()}>
          <img src={props.src} className=" w-70 object-cover"></img>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold pt-4">{props.title}</h1>
        <div className="mb-auto">
          <h4 className="font-bold">{props.date}</h4>
          <h4>{props.location}</h4>
        </div>
        <button className="underline text-left pt-4">Learn More</button>
      </div>
    </div>
  );
}
