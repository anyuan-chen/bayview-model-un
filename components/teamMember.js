import React from "react";

export default function TeamMember(props) {
  return (
    <div className="team-slide-in">
      <div className="grid grid-cols-2 shadow-lg rounded-xl gap-3">
        <div className="col-start-1 col-span-1 my-2 mx-2">
          <img src={props.img} className="h-64 w-screen object-scale-down"></img>
        </div>
        <div className="col-start-2 col-span-1 mx-2 my-2">
          <h1 className="text-2xl flex-wrap">{props.name}</h1>
          <p className="pt-5 flex-wrap">{props.bio}</p>
        </div>
      </div>
    </div>
  );
}
