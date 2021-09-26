import React, { useState } from "react";
import Hamburger from "./hamburger";

export default function Navbar() {
  const [sideBar, setsideBar] = useState(false);

  return (
    <div className="grid grid-cols-3 px-4 py-6">
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="80" height="10"></rect>
        <rect y="20" width="80" height="10"></rect>
        <rect y="40" width="80" height="10"></rect>
      </svg>
      <div className="justify-self-center">
        <h1>Bayview Model UN</h1>
      </div>
      <div className="col-start-1">
        <Hamburger></Hamburger>
      </div>
    </div>
  );
}
