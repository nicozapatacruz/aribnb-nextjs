"use client";
import Navbar from "@/app/components/Navbar";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-16">
      <Navbar />
      {children}
    </div>
  );
}
