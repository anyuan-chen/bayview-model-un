import React, { useState } from "react";
import InstagramModal from "./instagramModal";

export default function Post(props) {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const getClassName = () => {
    if(!showModal) return "default-modal";
    return "modal-fade-in";
  }

  return (
    <div>
      <div className="hidden md:flex shadow-xl justify-center">
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
      <div className=" md:hidden">
        <div className="flex">
          <img src={props.src} className="h-full w-screen object-scale-down"/>
          <div className="text">
            <div>
              {props.username}
            </div>
            <div>
              {props.caption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
