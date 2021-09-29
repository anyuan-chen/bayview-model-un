import React, { useState } from "react";

export default function InstagramModal(props) {
  return (
    <div className="fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center">
      <div className="flex w-7/12 h-5/6">
        <img src={props.src}></img>
        <div className="bg-white">
          <h1>{props.username}</h1>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  );
}
