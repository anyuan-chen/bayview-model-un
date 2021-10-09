import React from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import Link from "next/link";
export async function getStaticProps() {
  const data = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,caption&access_token=${process.env.INSTAGRAM_CODE}`
  ).then((data) => data.json());
  return {
    props: {
      data: data,
    },
  };
}

export default function About({ data }) {
  const posts = data.data.map((post) => {
    return (
      <Post
        key={post.id}
        src={post.media_url}
        caption={post.caption}
        username={post.username}
      ></Post>
    );
  });
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="pl-32 text-white flex flex-col justify-center bg-main h-screen/2 z-0">
        <h1 className="bold text-4xl pb-6">About Us</h1>
        <p className="w-1/3 hidden md:block">
          Lorem ipsum dolor Insert filler text here. Insert filler text here.
          Insert filler text here. Insert filler text here.Insert filler text
          here. Insert filler text here.Insert filler text here. Insert filler
          text here.Insert filler text here. Insert filler text hereInsert
          filler text here. Insert filler text here. Insert filler text here.
          Insert filler text here.Insert filler text here. Insert filler text
          here.Insert filler text here.{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="shadow-lg w-7/12 px-12 py-12 rounded-lg -translate-y-16 z-10 bg-white">
          <h1>Our Latest Events</h1>
          <p className="hidden md:block ">
            Insert filler text here. Insert filler text here. Insert filler text
            here. Insert filler text here.Insert filler text here. Insert filler
            text here.Insert filler text here. Insert filler text here.Insert
            filler text here. Insert filler text here.{" "}
          </p>
          <Link href="/pastEvents">
            <a className="underline">View More</a>
          </Link>
        </div>
      </div>
      <div className="px-2 md:px-16 md:pt-2 lg:px-32 text-black text-4xl">
        <h1 className="pb-5">Latest Updates</h1>
        <div className="flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {posts}
        </div>
      </div>
    </div>
  );
}
