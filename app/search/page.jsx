"use client";
import Navbar from "../components/Navbar";
import PostBox from "../components/PostBox";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import normalizeText from "../services/normalizeText";

import data from "../db/data";

export default function SearchPage() {
  const [likedPosts, setLikedPosts] = useLocalStorage("likedPosts", []);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const searchNorm = normalizeText(search);
  const searchData = data.filter((object) => {
    return normalizeText(object.location).includes(searchNorm);
  });

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
