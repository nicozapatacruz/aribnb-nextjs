"use client";
import Navbar from "@/app/components/Navbar";
import TypesNavbar from "@/app/components/TypesNavbar";
import PostType from "@/app/components/PostType";
import { useState } from "react";
import { useGlobalContext } from "./Context/store";

import data from "./db/data";

export default function Home() {
  const { likedPosts, setLikedPosts } = useGlobalContext();
  const [postType, setPostType] = useState("cabins");

  return (
    <div>
      <Navbar />
      <TypesNavbar postType={postType} setPostType={setPostType} />
      <PostType
        data={data.filter((object) => object.type === postType)}
        postType={postType}
        likedPosts={likedPosts}
        setLikedPosts={setLikedPosts}
      />
    </div>
  );
}
