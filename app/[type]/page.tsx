"use client";
import Navbar from "@/app/components/Navbar";
import TypesNavbar from "@/app/components/TypesNavbar";
import PostType from "@/app/components/PostType";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import data from "../db/data";

export default function Home() {
  const pathname = usePathname();
  const [postType, setPostType] = useState(pathname.replace("/", ""));
  const [likedPosts, setLikedPosts] = useState(JSON.parse(localStorage.getItem("likedPosts")) ?? []);

  useEffect(() => {
    localStorage.setItem("postType", postType);
  }, [postType]);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

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
