import React, { useState } from "react";
import InstagramModal from "./instagramModal";

export default function Post(props) {
  const [showModal, setshowModal] = useState(false);
  const [showText, setShowText] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  const getClassName = () => {
    if (!showModal) return "default-modal";
    return "modal-fade-in";
  };

  const showFullText = () => {
    if(showText) return "text-xs px-2";
    return "text-xs px-2 truncate";
  };

  return (
    <div>
      <div className="hidden lg:flex shadow-xl">
        <button onClick={toggleModal}>
          <img src={props.src} className="h-full w-screen object-scale-down"></img>
          <div className={getClassName()}>
            <InstagramModal
              src={props.src}
              username={props.username}
              caption={props.caption}
            ></InstagramModal>
          </div>
        </button>
      </div>
      <div className="flex-col py-4 shadow-xl lg:hidden">
          <img src={props.src} className="h-full w-screen sm:h-4/6 md:h-full object-scale-down"/>
          <div className="">
            <div className="text-sm font-bold px-2 py-2">
              {props.username}
            </div>
            <div className="space-y-0">
              <div className={showFullText()}>
                {props.caption} 
              </div>
              <div onClick={()=> toggleText()} className="px-2 text-xs text-gray-400 cursor-pointer"> 
                {showText? "Show less": "Show more"}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
