import React, { useState } from "react";

export default function InstagramModal(props) {
  return (
    <div className="fixed w-full h-full z-30 top-0 left-0 flex items-center justify-center bg-opacity-50 bg-black bg-blend-normal	z-50">
      <div className="flex w-9/12 h-5/6">
        <img src={props.src} className="object-scale-down"></img>
        <div className="bg-white z-50">
          <div className="mx-8 flex flex-col items-start pt-5">
            <h1 className="font-bold text-base">{props.username}</h1>
            <p className="font-body text-sm text-left pt-2">{props.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
