"use client";
import Navbar from "./components/Navbar";
import TypesNavbar from "./components/TypesNavbar";
import PostType from "./components/PostType";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";

export default function Home() {
  const [postType, setPostType] = useLocalStorage("postType", "cabins");
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
