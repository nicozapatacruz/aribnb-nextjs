import Image from "next/image";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push(`/search?search=${query}`);
  });

  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image width="135" height="135" alt="airbnb_logo" src="/airbnb_logo.png" />
      </Link>
      <div className="">
        <form onSubmit={handleSubmit} className="border-2 rounded-full h-14 min-w-[500px] pl-8 py-2 flex items-center">
          <input
            type="text"
            id="search"
            placeholder="Search by location..."
            value={query}
            onChange={handleParam(setQuery)}
            className="bg-transparent outline-0	w-[90%]"
          />
          <button type="submit" className="align-end w-[8%] h-full bg-bnb-pink rounded-full">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <Link href="/liked_posts" className="flex items-center gap-4">
        <i className="fa-solid fa-heart text-3xl text-bnb-pink"></i>
        <p className="text-xl">Liked</p>
      </Link>
    </div>
  );
}
