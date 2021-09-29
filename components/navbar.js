import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [sideBar, setsideBar] = useState(false);
  const toggleSidebar = () => {
    setsideBar(!sideBar);
  };
  return (
    <div className="grid grid-cols-3">
      <div
        className="px-12 col-start-1 row-start-1 py-6"
        onClick={toggleSidebar}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="80" height="10"></rect>
          <rect y="20" width="80" height="10"></rect>
          <rect y="40" width="80" height="10"></rect>
        </svg>
      </div>
      <div className="justify-self-center self-center">
        <h1>Bayview Model UN</h1>
      </div>
      {sideBar === true && (
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 absolute w-96 text-white shadow-xl z-50">
          <div className=" space-y-5 h-screen bg-sub ">
            <div onClick={toggleSidebar} className="px-12 py-6">
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
            <div className="space-y-10 font-body text-xl pl-12  flex flex-col">
              <Link href="/">
                <a>home</a>
              </Link>
              <Link href="/about">
                <a>about us</a>
              </Link>
              <Link href="/team">
                <a>our team</a>
              </Link>
              <Link href="/mailing">
                <a>mailing list</a>
              </Link>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
