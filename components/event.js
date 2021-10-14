import React from "react";

export default function Event(props) {
  return (
    <div className="flex flex-col shadow-md p-4 content-between sm:p-8">
      <div className="overflow-hidden">
        <div className="event">
          <img src={props.src} className="h-72 w-full object-scale-down"></img>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold pt-4">{props.title}</h1>
        <div className="mb-auto">
          <h4 className="font-bold">{props.date}</h4>
          <h4>{props.location}</h4>
        </div>
      </div>
    </div>
  );
}
