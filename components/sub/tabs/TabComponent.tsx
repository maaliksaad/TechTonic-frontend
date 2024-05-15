import { POSTS } from "@/constants";
import { Tabs } from "./tabs";
import FeaturedBlogPostCard from "../cards/FeaturedBlogPostCard";

export function TabsComponent() {
  const tabs = [
    {
      title: "trends",
      value: "trends",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 ">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "frontend",
      value: "frontend",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 bg-black">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "backend",
      value: "backend",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 bg-black">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "cloud",
      value: "cloud",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 bg-black">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "ai",
      value: "ai",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 bg-black">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "tools",
      value: "tools",
      content: (
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 bg-black">
          {POSTS.map(({ img, tag, title, desc, date, author }) => (
            <FeaturedBlogPostCard
              key={title}
              img={img}
              tag={tag}
              title={title}
              desc={desc}
              date={date}
              author={{
                img: author.img,
                name: author.name,
              }}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start mb-40 mt-20">
      <div className="lg:h-[80rem] md:h-[100rem] sm:h-[150rem]  flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs
          tabs={tabs}
          tabClassName="w-full md:w-[50rem] border border-white/25 bg-opacity-90"
        />
      </div>
    </div>
  );
}
