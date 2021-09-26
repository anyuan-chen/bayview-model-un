import React from "react";

export default function TeamMember(props) {
  return (
    <div className="flex justify-center">
      <img src={props.img} className=" max-h-64 max-w-16"></img>
      <div className=" flex items-center flex-col">
        <h1 className="text-2xl">{props.name}</h1>
        <p className="pt-5">{props.bio}</p>
      </div>
    </div>
  );
}
