import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogsLayout from "@/components/main/BlogsLayout";
import SideBarBlogs from "@/components/main/SideBarBlogs";
import { popularPosts, recentPosts } from "@/constants";
import { SearchIcon } from "lucide-react";
import { fetchBlogs } from "@/lib/actions/blogs.actions";

const Page = async () => {
  const blogs = await fetchBlogs();

  return (
    <>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800 ">
        <div className="container flex justify-center">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Explore Our Blog
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Discover the latest insights, trends, and stories from our team of
              experts.
            </p>
            <div className="flex w-full max-w-2xl justify-center items-center gap-4">
              <Input
                className="flex-1 rounded-l-md border-r-0 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                placeholder="Search blog posts..."
                type="search"
              />
              <Button className="rounded-r-md ">
                <SearchIcon color="white" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative ">
        <div className="max-w-screen-xl mx-auto py-20 px-10 lg:px-0 lg:py-24">
          <div className="flex flex-col lg:flex-row -mb-10">
            <BlogsLayout heading="Popular Posts" posts={blogs} />
            <div className="lg:w-1/3 w-full">
              <SideBarBlogs heading="Recent Posts" Posts={recentPosts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
