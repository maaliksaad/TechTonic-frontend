import BlogPostTable from "@/components/main/BlogPostTable";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center mb-3">
        <h1 className="font-semibold text-lg md:text-2xl">Blog Posts</h1>
        <Button className="ml-auto" size="sm">
          New Post
        </Button>
      </div>
      <BlogPostTable />
    </div>
  );
};

export default page;
