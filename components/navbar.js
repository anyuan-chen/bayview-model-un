import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [sideBar, setsideBar] = useState(false);
  const [clickedSideBar, setClickedSideBar] = useState(false);

  const toggleSidebar = () => {
    setsideBar(!sideBar);
    setClickedSideBar(true);
  };

  const getSideBarClassName = () => {
    if(!clickedSideBar) {
      return "hidden-sideBar";
    }
    return sideBar? "slideIn" : "slideOut";
  }

  const getSideBarElementClassName = () => {
    console.log(window.innerWidth);
    if(window.innerWidth > 680) {
      return "default-element";
    }
    return "";
  }

  const clickedOutside = (ref) => {
    useEffect(() => {
      /**
      * Alert if clicked on outside of element
      **/
      function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target)) {
          setsideBar(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  clickedOutside(wrapperRef);

  return (
    <div className="grid grid-cols-3 sticky top-0 bg-white z-50 shadow-lg">
      <div className="px-10 col-start-1 row-start-1 py-6">
        <button onClick={toggleSidebar} className="pl-2 pt-2">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="80" height="10"></rect>
            <rect y="20" width="80" height="10"></rect>
            <rect y="40" width="80" height="10"></rect>
          </svg>
        </button>
      </div>
      <div className="justify-self-center self-center">
        <h1>Bayview Model UN</h1>
      </div>
      <div ref={wrapperRef} className={getSideBarClassName()}>
        <div className="absolute w-96 text-white shadow-xl z-50">
            <div className="space-y-5 h-screen bg-sub overflow-y-auto">
              <div onClick={toggleSidebar} className="px-10 py-6">
                <button className="pt-2 pl-2">
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
                </button>
              </div>
              <div className="space-y-10 font-body text-xl pl-8 pr-12 flex flex-col z-50">
                <Link href="/">
                  <a className="sm: default-element">
                    home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="sm: default-element">
                    about us
                  </a>
                </Link>
                <Link href="/team">
                  <a className="sm: default-element">
                    our team
                  </a>
                </Link>
                <Link href="/mailing">
                  <a className="sm: default-element">
                    mailing list
                  </a>
                </Link>
                <Link href="/pastEvents">
                  <a className="sm: default-element">
                    past events
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="sm: default-element">
                      contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  
  );
}
