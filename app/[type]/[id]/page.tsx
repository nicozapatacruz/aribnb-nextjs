"use client";
import PostImages from "@/app/components/PostImages";
import PostOffers from "@/app/components/PostOffers";
import { useState, useEffect } from "react";

import data from "../../db/data";

export default function Post({ params }) {
  const [likedPosts, setLikedPosts] = useState(JSON.parse(localStorage.getItem("likedPosts")) ?? []);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const { id: stringId } = params;

  interface PostData {
    id: number;
    type: string;
    location: string;
    rating: number;
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
    title: string;
    subtitle: string;
    price: number;
    reviews: number;
    description: string;
    wifi: boolean;
    tv: boolean;
    washer: boolean;
    ac: boolean;
    heating: boolean;
    breakfast: boolean;
    freeParking: boolean;
    refrigerator: boolean;
    freezer: boolean;
    dishwasher: boolean;
    stove: boolean;
    oven: boolean;
    coffeeMaker: boolean;
    url: string;
  }
  const {
    id,
    type,
    location,
    rating,
    guests,
    bedrooms,
    beds,
    baths,
    title,
    subtitle,
    price,
    reviews,
    description,
    wifi,
    tv,
    washer,
    ac,
    heating,
    breakfast,
    freeParking,
    refrigerator,
    freezer,
    dishwasher,
    stove,
    oven,
    coffeeMaker,
    url,
  }: PostData = data.find((post) => post.id === parseInt(stringId));
  return (
    <div className="pt-8">
      <h1 className="text-3xl">
        <strong>{title}</strong>
      </h1>
      <div className="flex justify-between pt-3">
        <div className="flex items-center gap-2">
          {rating > 0 ? (
            <>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-star"></i>
                <p>{rating.toFixed(Math.max(1, (rating.toString().split(".")[1] || []).length))}</p>
              </div>
              <p>
                <strong>·</strong>
              </p>
            </>
          ) : null}
          {reviews > 0 ? (
            <>
              <p>{reviews} reviews</p>
              <p>
                <strong>·</strong>
              </p>
            </>
          ) : null}
          <p>{location}</p>
        </div>
        <button
          className="flex items-center gap-1"
          onClick={(e) => {
            e.preventDefault();
            likedPosts.includes(id) ? setLikedPosts(likedPosts.filter((post) => post !== id)) : setLikedPosts([...likedPosts, id]);
          }}
        >
          <i className={`${likedPosts.includes(id) ? "fa-solid text-bnb-pink" : "fa-regular"} fa-heart`}></i>
          <p className="underline">Save{likedPosts.includes(id) ? "d" : null}</p>
        </button>
      </div>
      <PostImages type={type} id={id} />
      <div className="pt-12 flex justify-between">
        <div className="w-[60%]">
          <h1 className="text-2xl">
            <strong>{subtitle}</strong>
          </h1>
          <div className="flex items-center gap-2 pt-2 text-xl">
            <p>
              {guests} guest{guests > 1 ? "s" : null}
            </p>
            <p>
              <strong>·</strong>
            </p>
            <p>
              {bedrooms} bedroom{bedrooms > 1 ? "s" : null}
            </p>
            <p>
              <strong>·</strong>
            </p>
            <p>
              {beds} bed{beds > 1 ? "s" : null}
            </p>
            <p>
              <strong>·</strong>
            </p>
            <p>
              {baths} bath{baths > 1 ? "s" : null}
            </p>
          </div>
          <hr className="my-8"></hr>
          <p className="leading-8 text-lg">{description}</p>
        </div>
        <div className="w-[35%] border-2 rounded-2xl border-gray-500 p-6 ">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-xl">
              <strong>
                {price.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                COP
              </strong>
            </p>
            <p>night</p>
            <div className="flex gap-1 items-center">
              {rating > 0 ? (
                <>
                  <div className="flex items-center gap-1 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <p>{rating.toFixed(Math.max(1, (rating.toString().split(".")[1] || []).length))}</p>
                  </div>
                </>
              ) : null}
              {reviews > 0 ? (
                <>
                  <p>·</p>
                  <p className="text-gray-400 underline text-xs">{reviews} reviews</p>
                </>
              ) : null}
            </div>
          </div>
          <hr className="my-8 bg-gray-500"></hr>
          <h2 className="pb-3 text-xl">
            <strong>What this place offers</strong>
          </h2>
          <PostOffers
            data={{ wifi, tv, washer, ac, heating, breakfast, freeParking, refrigerator, freezer, dishwasher, stove, oven, coffeeMaker }}
          />
          <a target="_blank" href={url} rel="noopener noreferrer">
            <button className="w-full h-14 bg-bnb-pink text-xl rounded-lg">See post in AirBnB</button>
          </a>
        </div>
      </div>
    </div>
  );
}
