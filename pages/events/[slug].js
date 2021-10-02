import React from "react";
import eventData from "../../data/eventData";
export async function getStaticPaths() {
  const paths = eventData.map((events) => ({
    params: {
      slug: events.title.replace(/ /g, ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({params: {slug}}){

}
export default function EventPage() {
  return <div></div>;
}
