"use client";
import Navbar from "@/app/components/Navbar";
import PostBox from "@/app/components/PostBox";
import { useState, useEffect } from "react";

import data from "../db/data";

export default function LikedPosts() {
  const [likedPosts, setLikedPosts] = useState(JSON.parse(localStorage.getItem("likedPosts")) ?? []);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const likedData = data.filter((object) => likedPosts.includes(object.id));
  return (
    <>
      <Navbar />
      {likedData.length ? (
        <div className="grid grid-cols-4 items-center justify-between gap-5 w-full pt-12">
          {likedData.map((data) => (
            <div key={data.id}>
              <PostBox data={data} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-2xl text-center pt-24">
          <h1>You haven&apos;t liked any post</h1>
          <h1 className="pt-4">Like the ones you like so you can see them here</h1>
          <i className="fa-light fa-heart text-8xl pt-10 hover:text-bnb-pink"></i>
        </div>
      )}
    </>
  );
}
