import React from "react";

export default function Modal(props) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-opacity-50 bg-black bg-blend-normal">
      <div className="flex flex-col px-10 py-10 w-10/12 h-2/6 md:w-8/12 bg-white overflow-hidden">
        <div className="py-2">
            <h1 className="font-bold text-4xl">{props.caption}</h1>
        </div>
        <div className="py-2">
            <p className="text-base">{props.message}</p>
        </div>
      </div>
    </div>
  );
}