import React from "react";

export default function TeamMember(props) {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <img src={props.img}></img>
      <div>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}
