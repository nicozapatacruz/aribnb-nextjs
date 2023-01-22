"use client";
import Navbar from "@/app/components/Navbar";
import PostBox from "@/app/components/PostBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import normalizeText from "../services/normalizeText";

import data from "../db/data";

export default function SearchPage() {
  const [likedPosts, setLikedPosts] = useState(JSON.parse(localStorage.getItem("likedPosts")) ?? []);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const regex = normalizeText(search);
  const searchData = data.filter((object) => regex.test(normalizeText(object.location)));

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);
  return (
    <>
      <Navbar />
      {searchData.length ? (
        <>
          <div className="w-full text-2xl text-center pt-8">
            <h1>Results for posts in &ldquo;{search}&rdquo;</h1>
          </div>
          <div className="grid grid-cols-4 items-center justify-between gap-5 w-full pt-8">
            {searchData.map((data) => (
              <div key={data.id}>
                <PostBox data={data} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full text-2xl text-center pt-24">
          <h1>No posts found with the search &ldquo;{search}&rdquo;</h1>
          <i className="fa-light fa-shop-slash text-8xl pt-10"></i>
        </div>
      )}
    </>
  );
}
