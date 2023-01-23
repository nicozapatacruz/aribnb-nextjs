import PostBox from "./PostBox";
import { use } from "react";

const getData = async () => {
  return await (
    await fetch("https://aooy8uembg.execute-api.us-east-1.amazonaws.com/default/getPostsData", {
      mode: "no-cors",
      cache: "force-cache",
    })
  ).json();
};

import data from "../db/data";

export default function PostType({ postType, likedPosts, setLikedPosts }) {
  //const data = use(getData());
  const filteredData = data.filter((object) => object.type === postType);
  return (
    <>
      {filteredData.length ? (
        <div className="grid grid-cols-4 items-center justify-between gap-5 w-full pt-12">
          {filteredData.map((data) => (
            <div key={data.id}>
              <PostBox data={data} likedPosts={likedPosts} setLikedPosts={setLikedPosts} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full text-2xl text-center pt-24">
          <h1 className="pt-4">
            We have no post of type &ldquo;{postType.charAt(0).toUpperCase() + postType.slice(1).replace("_", " ")}&rdquo; at the moment
          </h1>
          <i className="fa-light fa-face-sad-sweat text-8xl pt-10"></i>
        </div>
      )}
    </>
  );
}
