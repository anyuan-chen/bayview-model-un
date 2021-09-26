import React, { useState } from "react";
import Hamburger from "./hamburger";

export default function Navbar() {
  const [sideBar, setsideBar] = useState(false);
  const toggleSidebar = () => {
    setsideBar(!sideBar);
  };
  return (
    <div className="grid grid-cols-3">
      <div
        className="px-4 col-start-1 row-start-1 py-3"
        onClick={toggleSidebar}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="80" height="10"></rect>
          <rect y="20" width="80" height="10"></rect>
          <rect y="40" width="80" height="10"></rect>
        </svg>
      </div>
      <div className="justify-self-center py-3">
        <h1>Bayview Model UN</h1>
      </div>
      {sideBar === true && (
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 absolute w-64 text-white">
          <div className=" space-y-5 h-screen bg-main ">
            <div onClick={toggleSidebar} className="px-4 py-3">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="80" height="10" style={{ fill: "white" }}></rect>
                <rect
                  y="20"
                  width="80"
                  height="10"
                  style={{ fill: "white" }}
                ></rect>
                <rect
                  y="40"
                  width="80"
                  height="10"
                  style={{ fill: "white" }}
                ></rect>
              </svg>
            </div>
            <div className="space-y-10 font-body text-xl pl-4">
              <h3>home</h3>
              <h3>about us</h3>
              <h3>our team</h3>
              <h3>mailing list</h3>
              <h3>contact</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
