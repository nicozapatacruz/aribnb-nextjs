import Image from "next/image";
import Link from "next/link";

import types from "../db/postTypes";

export default function TypesNavbar({ postType, setPostType }) {
  return (
    <div className="flex justify-between pt-12">
      {types.map(({ label, type }) => (
        <Link
          href={`/${type}`}
          key={type}
          className={
            postType === type
              ? "cursor-default border-b-2 pb-2 border-gray-900"
              : "opacity-60 border-b-2 pb-2 border-transparent hover:opacity-100 hover:border-gray-500"
          }
          onClick={() => {
            setPostType(type);
          }}
        >
          <Image width="30" height="30" alt={type} src={`/house_types_icons/${type}.png`} className="m-auto pb-2" />
          <div className="m-auto">
            <p>{label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
