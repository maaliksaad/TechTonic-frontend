import SideBarBlogs from "@/components/main/SideBarBlogs";
import Comment from "@/components/sub/comments/Comment";
import Image from "next/image";
import NewComment from "@/components/sub/comments/NewComment";
import { fetchBlog, fetchBlogs } from "@/lib/actions/blogs.actions";
import { fetchComments } from "@/lib/actions/comments.actions";
import { CommentType } from "@/types";
import { date } from "@/lib/utils";

export default async function Component({
  params,
}: {
  params: { blogPage: string };
}) {
  const blog = await fetchBlog(params.blogPage);
  const recentBlogs = await fetchBlogs();
  const comments = await fetchComments(params.blogPage);

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
                <div>{date(blog.createdAt)}</div>
              </div>
            </div>
            <p>{blog.content}</p>
          </div>
          <div className="px-4 py-6 md:px-6 md:py-12">
            <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
              <h2 className="mb-6 text-2xl font-bold">Comments</h2>
              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map((comment: CommentType) => (
                    <Comment
                      key={comment._id}
                      author={{
                        name: comment.user.name,
                        img: comment.user.image,
                      }}
                      content={comment.content}
                      date={date(comment.createdAt)}
                    />
                  ))
                ) : (
                  <p className="flex items-center gap-2 text-gray-800  dark:text-gray-400">
                    No comments yet.
                  </p>
                )}
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
