import React from "react";

export default function Post(props) {
  return (
    <div>
      <img src={props.src} className="h-96 w-96 object-scale-down"></img>
    </div>
  );
}
