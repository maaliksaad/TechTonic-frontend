import React from "react";
import Carousel from "../sub/carousel/BlogsCarousel";
import { fetchBlogs } from "@/lib/actions/blogs.actions";

const LatestPosts = async () => {
  const LatestPosts = await fetchBlogs();
  return (
    <section className="my-20">
      <div className="space-y-2 flex flex-col items-start ml-5 lg:ml-[5.3125rem] mb-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Latest Posts
        </h2>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Check out our latest blog posts.
        </p>
      </div>
      <Carousel LatestPosts={LatestPosts} />
    </section>
  );
};

export default LatestPosts;
