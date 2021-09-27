import React from "react";
import Navbar from "../components/navbar";
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default function About() {
  return (
    <div className="flex flex-col ">
      <Navbar></Navbar>
      <div className="pl-32 text-white flex flex-col justify-center bg-main h-screen/2 z-0">
        <h1 className="bold text-4xl pb-6">About Us</h1>
        <p className="w-1/3">
          Lorem ipsum dolor Insert filler text here. Insert filler text here.
          Insert filler text here. Insert filler text here.Insert filler text
          here. Insert filler text here.Insert filler text here. Insert filler
          text here.Insert filler text here. Insert filler text hereInsert
          filler text here. Insert filler text here. Insert filler text here.
          Insert filler text here.Insert filler text here. Insert filler text
          here.Insert filler text here.{" "}
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="shadow-lg w-7/12 px-12 py-12 rounded-lg -translate-y-16 z-10 bg-white">
          <h1>View Results for Our Latest Event</h1>
          <p>
            Insert filler text here. Insert filler text here. Insert filler text
            here. Insert filler text here.Insert filler text here. Insert filler
            text here.Insert filler text here. Insert filler text here.Insert
            filler text here. Insert filler text here.{" "}
          </p>
          <a>Learn More</a>
        </div>
      </div>
      <div className="px-32 pt-2 text-black text-4xl">
        <h1>Latest Updates</h1>
      </div>
    </div>
  );
}
