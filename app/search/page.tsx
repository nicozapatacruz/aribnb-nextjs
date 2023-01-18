"use client";
import Navbar from "@/app/components/Navbar";
import PostBox from "@/app/components/PostBox";
import { useGlobalContext } from "../Context/store";
import { useSearchParams } from "next/navigation";
import normalizeText from "../services/normalizeText";

import data from "../db/data";

export default function SearchPage() {
  const { likedPosts, setLikedPosts } = useGlobalContext();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const regex = normalizeText(search);
  const searchData = data.filter((object) => regex.test(normalizeText(object.location)));
  console.log(searchData);
  return (
    <>
      <Navbar />
      {searchData.length ? (
        <div className="grid grid-cols-4 items-center justify-between gap-5 w-full pt-12">
          {searchData.map((data) => (
            <div key={data.id}>
              <PostBox data={data} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-2xl text-center pt-24">
          <h1>No posts found with the search &ldquo; {search} &rdquo;.</h1>
          <i className="fa-light fa-shop-slash text-8xl pt-10"></i>
        </div>
      )}
    </>
  );
}