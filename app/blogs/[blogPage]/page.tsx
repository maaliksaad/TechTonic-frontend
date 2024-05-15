import SideBarBlogs from "@/components/main/SideBarBlogs";
import { recentPosts } from "@/constants";
import Comment from "@/components/sub/comments/Comment";
import Image from "next/image";
import NewComment from "@/components/sub/comments/NewComment";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-4">
            <Image
              alt="Featured Image"
              className="rounded-lg object-cover w-full aspect-[2/1]"
              height={600}
              src="/placeholder.svg"
              width={1200}
            />
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                The Joke Tax Chronicles: How a Lazy King Tried to Tax Laughter
              </h1>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <div>By John Doe</div>
                <div>•</div>
                <div>May 10, 2024</div>
              </div>
            </div>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <p>
              The king thought long and hard, and finally came up with a
              brilliant plan: he would tax the jokes in the kingdom. "After
              all," he said, "everyone enjoys a good joke, so it's only fair
              that they should pay for the privilege."
            </p>
            <p>
              The king's subjects were not amused. They grumbled and complained,
              but the king was firm: 1st level of puns: 5 gold coins, 2nd level
              of jokes: 10 gold coins, 3rd level of one-liners: 20 gold coins.
            </p>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king's foolishness get him down: a court jester named Jokester.
            </p>
            <p>
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn't help but
              laugh. And once they started laughing, they couldn't stop.
            </p>
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
          <SideBarBlogs heading="Recent Posts" Posts={recentPosts} />
        </div>
      </div>
    </div>
  );
}
