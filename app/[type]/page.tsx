"use client";
import Navbar from "@/app/components/Navbar";
import TypesNavbar from "@/app/components/TypesNavbar";
import PostType from "@/app/components/PostType";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const pathname = usePathname();
  const [postType, setPostType] = useState(pathname.replace("/", ""));
  const [likedPosts, setLikedPosts] = useLocalStorage("likedPosts", []);

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
      <PostType postType={postType} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
    </div>
  );
}