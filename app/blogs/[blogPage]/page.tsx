import SideBarBlogs from "@/components/main/SideBarBlogs";
import { recentPosts } from "@/constants";
import Comment from "@/components/sub/comments/Comment";
import Image from "next/image";
import NewComment from "@/components/sub/comments/NewComment";
import { fetchBlog, fetchBlogs } from "@/lib/actions/blogs.actions";

export default async function Component({
  params,
}: {
  params: { blogPage: string };
}) {
  const blog = await fetchBlog(params.blogPage);
  const recentBlogs = await fetchBlogs();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-4">
            <Image
              alt="Featured Image"
              className="rounded-lg object-cover w-full aspect-[2/1]"
              height={600}
              src={blog.image}
              width={1200}
            />
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                {blog.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <div>{blog.user.name}</div>
                <div>•</div>
                <div>May 10, 2024</div>
              </div>
            </div>
            <p>{blog.content}</p>
          </div>
          <div className="px-4 py-6 md:px-6 md:py-12">
            <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
              <h2 className="mb-6 text-2xl font-bold">Comments</h2>
              <div className="space-y-6">
                <Comment
                  author={{ name: "john doe", img: "/authors/avatar1.jpg" }}
                  date="2 days ago"
                  content=" This is a great feature! I've been wanting something like this for a
            long time. The ability to reply and like comments is really helpful."
                />
                <Comment
                  author={{ name: "john doe", img: "/authors/avatar1.jpg" }}
                  date="1 days ago"
                  content=" 
                  I agree, this is a really useful feature. I'm excited to
                  see how the community uses it."
                />
                <Comment
                  author={{ name: "john doe", img: "/authors/avatar1.jpg" }}
                  date="3 days ago"
                  content=" 
                  I'm really impressed with the design and functionality of
                  this comment section. It's easy to use and looks great."
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-6 md:px-6 md:py-12">
            <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
              <h2 className="mb-6 text-2xl font-bold">New Comment</h2>
              <div className="space-y-6">
                <NewComment />
              </div>
            </div>
          </div>
        </article>

        <div className="space-y-8">
          <SideBarBlogs heading="Recent Posts" Posts={recentBlogs} />
        </div>
      </div>
    </div>
  );
}
