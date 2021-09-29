import React, { useState } from "react";
import InstagramModal from "./instagramModal";

export default function Post(props) {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <button onClick={toggleModal}>
      <img src={props.src} className="h-96 w-96 object-scale-down"></img>
      {showModal && (
        <InstagramModal
          src={props.src}
          username={props.username}
          caption={props.caption}
        ></InstagramModal>
      )}
    </button>
  );
}
