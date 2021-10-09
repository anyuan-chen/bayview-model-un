import React from "react";
import Navbar from "../components/navbar";
import eventData from "../data/eventData";
import Event from "../components/event";

export default function PastEvents() {
  const events = eventData.map((event) => {
    return (
      <Event
        src={event.src}
        title={event.title}
        date={event.date}
        location={event.location}
      ></Event>
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-white bg-main flex pl-6 py-12 mb-6">
        <h1 className="bold text-4xl pb-6 pl-1 sm:pl-12">Past Events</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 px-6 mb-10">{events}</div>
    </div>
  );
}
