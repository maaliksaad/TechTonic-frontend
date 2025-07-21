"use client";
import BlogPostTable from "@/components/main/BlogPostTable";
import { Button } from "@/components/ui/button";
import { fetchUserBlogs } from "@/lib/actions/blogs.actions";
import { Blog } from "@/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session } = useSession();
  const [userBlogs, setUserBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (session?.user?.token) {
        try {
          const blogs = await fetchUserBlogs(session.user.token);
          setUserBlogs(blogs);
        } catch (error) {
          console.error("Error fetching user blogs:", error);
        }
      }
    };
    fetchBlogs();
  }, [session]);

  return (
    <div>
      <div className="flex items-center mb-3">
        <h1 className="font-semibold text-lg md:text-2xl">Blog Posts</h1>
        <Link href="/dashboard/newpost" className="ml-auto">
          <Button size="sm">New Post</Button>
        </Link>
      </div>
      <BlogPostTable userBlogs={userBlogs} />
    </div>
  );
};

export default Page;
