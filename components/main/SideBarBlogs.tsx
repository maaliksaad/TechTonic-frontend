import { Blog } from "@/types";
import Link from "next/link";
import React from "react";

interface Post {
  heading: string;
  Posts: Blog[];
}

const SideBarBlogs = ({ heading, Posts }: Post) => {
  return (
    <div className="mt-24 lg:mt-0 lg:w-full">
      {heading && (
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-left lg:text-4xl xl:text-5xl">
          {heading}
        </h2>
      )}
      <div className="flex flex-wrap lg:flex-col mt-12 flex-col sm:flex-row  sm:justify-between lg:justify-start">
        {Posts.slice(0, 8).map((post, index) => (
          <Link
            className=" flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0  sm:max-w-sm cursor-pointer last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16"
            key={index}
            href={`/blogs/${post._id}`}
          >
            <div
              className="bg-cover bg-center rounded-full h-20 w-20 flex-shrink-0 mr-4 mb-4"
              style={{ backgroundImage: `url("${post.image}")` }}
            />
            <div>
              <h5 className=" text-base xl:text-lg mt-0 mr-4 lg:max-w-xs  font-bold transition duration-300 group-hover:text-primary-500">
                {post.title}
              </h5>
              <h6 className="mt-3 text-sm text-secondary-100 font-normal leading-none ">
                {post.user.name}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBarBlogs;
