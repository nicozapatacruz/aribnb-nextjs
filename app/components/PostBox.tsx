import Image from "next/image";
import Link from "next/link";

export default function Post({ data, likedPosts, setLikedPosts }) {
  const { type, id, location, rating, guests, bedrooms, price } = data;
  return (
    <Link href={`${type}/${id}`}>
      <div className="relative pb-[90%]">
        <Image className="rounded-2xl object-cover" fill alt={`${type} ${id} image_1`} src={`/house_images/${type}/${id}/image_1.webp`} />
        <button
          onClick={(e) => {
            e.preventDefault();
            likedPosts.includes(id) ? setLikedPosts(likedPosts.filter((post) => post !== id)) : setLikedPosts([...likedPosts, id]);
          }}
        >
          <i
            className={`${likedPosts.includes(id) ? "fa-solid text-bnb-pink" : "fa-regular"} fa-heart text-3xl absolute top-3 right-3`}
          ></i>
        </button>
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="text-xl truncate">
          <strong>{location}</strong>
        </h1>
        {rating > 0 ? (
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-star"></i>
            <p>{rating}</p>
          </div>
        ) : null}
      </div>
      <div>
        <p className="text-gray-400">Guests: {guests}</p>
        <p className="text-gray-400">Bedrooms: {bedrooms}</p>
      </div>
      <div className="flex flex-row gap-1 pt-2">
        <p className="text-xl">
          <strong>
            {price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </strong>
        </p>
        <p className="text-lg">night</p>
      </div>
    </Link>
  );
}
