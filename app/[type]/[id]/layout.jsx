"use client";
import Navbar from "../../components/Navbar";

export default function PostLayout({ children }) {
  return (
    <div className="px-16">
      <Navbar />
      {children}
    </div>
  );
}
