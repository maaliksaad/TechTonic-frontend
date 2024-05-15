"use client";
import { Button } from "@/components/ui/button";
import { POSTS, popularPosts } from "@/constants";
import { StepBack, StepForward } from "lucide-react";
import React, { useState } from "react";
import BlogPostCard from "../cards/BlogPostCard";

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const updateIndex = (increment: number) => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + increment;
      if (newIndex < 0) {
        return POSTS.length - 3;
      } else if (newIndex > POSTS.length - 3) {
        return 0; // Loop ba
      } else {
        return newIndex;
      }
    });
  };

  const next = () => updateIndex(1);
  const prev = () => updateIndex(-1);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {popularPosts.slice(startIndex, startIndex + 3).map((blog, index) => (
          <div key={index} className="p-4">
            <BlogPostCard {...blog} category="Technology" />
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <Button onClick={prev} className=" py-2 text-white rounded-md mr-2">
          <StepBack className="h-4 w-4" />
        </Button>
        <Button onClick={next} className=" py-2  text-white rounded-md">
          <StepForward className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
