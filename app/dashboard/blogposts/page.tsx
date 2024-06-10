import BlogPostTable from "@/components/main/BlogPostTable";
import { Button } from "@/components/ui/button";
import { fetchUserBlogs } from "@/lib/actions/blogs.actions";
import { getSession } from "next-auth/react";
import React from "react";

const page = async () => {
  const session = await getSession();
  const userId = session?.user?._id ?? "";

  const userBlogs = await fetchUserBlogs(userId.toString());

  return (
    <div>
      <div className="flex items-center mb-3">
        <h1 className="font-semibold text-lg md:text-2xl">Blog Posts</h1>
        <Button className="ml-auto" size="sm">
          New Post
        </Button>
      </div>
      <BlogPostTable userBlogs={userBlogs} />
    </div>
  );
};

export default page;
