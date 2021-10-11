import React, { useState } from "react";

export default function InstagramModal(props) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-opacity-50 bg-black bg-blend-normal">
      <div className="flex w-8/12 h-4/6 xl:h-5/6 bg-white">
        <div className="flex justify-start w-8/12 h-full">
          <img src={props.src} className="h-full w-full object-scale-down xl:object-cover"></img>
        </div>
        <div className="flex w-4/12 h-full px-4 overflow-auto">
          <div className="flex flex-col items-start pt-5">
            <h1 className="font-bold text-base">{props.username}</h1>
            <p className="font-body text-sm text-left pt-2">{props.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
