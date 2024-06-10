import { Button } from "@/components/ui/button";
import BlogPostTable from "@/components/main/BlogPostTable";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { fetchUserBlogs } from "@/lib/actions/blogs.actions";

export default async function Page() {
  const session = await getSession();
  const userId = session?.user?._id;

  console.log("user ID::::", userId);
  // const userBlogs = (await fetchUserBlogs(userId.toString())).slice(0, 5);

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
      {/* <BlogPostTable userBlogs={userBlogs} /> */}
    </div>
  );
}
