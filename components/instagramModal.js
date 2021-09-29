import React, { useState } from "react";

export default function InstagramModal({ props }) {
  return (
    <div className="fixed">
      <img></img>
      <div>
        <h1>{props.account}</h1>
        <h2>{props.bio}</h2>
      </div>
    </div>
  );
}
