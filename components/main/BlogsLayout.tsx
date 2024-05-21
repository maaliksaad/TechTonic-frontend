import React from "react";
import BlogPostCard from "../sub/cards/BlogPostCard";
import { Blog } from "@/types";

interface blogLayout {
  heading: string;
  posts: Blog[];
}

const BlogsLayout = ({ heading, posts }: blogLayout) => {
  return (
    <div className="lg:w-2/3">
      {heading && (
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-left lg:text-4xl xl:text-5xl">
          {heading}
        </h2>
      )}
      <div className="mt-12 grid md:grid-cols-2 gap-4 grid-cols-1">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsLayout;
