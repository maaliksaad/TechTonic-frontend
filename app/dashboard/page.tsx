"use client";
import { Button } from "@/components/ui/button";
import BlogPostTable from "@/components/main/BlogPostTable";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { fetchUserBlogs } from "@/lib/actions/blogs.actions";
import { useEffect, useState } from "react";
import { Blog } from "@/types";

export default function Page() {
  const { data: session } = useSession();
  const userId = session?.user?._id;
  const [userBlogs, setUserBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (userId) {
      fetchUserBlogs(userId.toString())
        .then((blogs) => setUserBlogs(blogs.slice(0, 5)))
        .catch((error) => console.error("Error fetching user blogs:", error));
    }
  }, [userId]);

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col items-center justify-center p-4 gap-4 h-60 bg-gray-100/40">
        <CardTitle className="font-bold md:text-5xl text-3xl">
          Welcome To Tech Tonic
        </CardTitle>
        <CardDescription className="text-lg">
          Write Your First Blog Post Now
        </CardDescription>
      </Card>

      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">
          Your Recent Most Posts
        </h1>
        <Button className="ml-auto" size="sm">
          <Link href="/dashboard/blogposts">Show All</Link>
        </Button>
      </div>

      {userBlogs.length > 0 ? (
        <BlogPostTable userBlogs={userBlogs} />
      ) : (
        <p className="text-gray-600">No recent posts found.</p>
      )}
    </div>
  );
}
