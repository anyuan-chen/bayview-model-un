import React from "react";

export default function Event(props) {
  return (
    <div className="flex flex-col shadow-md p-8 content-between justify-between">
      <div className="overflow-hidden">
        <img src={props.src} className=" w-70 object-cover "></img>
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
