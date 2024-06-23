"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import { POSTS } from "@/constants";
import FeaturedBlogPostCard from "../cards/FeaturedBlogPostCard";
import { Button } from "@/components/ui/button";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("trends");
  const [showMenu, setShowMenu] = useState(false);
  const tabs = [
    {
      title: "trends",
      value: "trends",
      content: (
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3 w-full">
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
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3">
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
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3">
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
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3">
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
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3">
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
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3">
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4 md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <Tabs
        defaultValue="trends"
        value={activeTab}
        onValueChange={setActiveTab}
        className=" space-y-4 md:space-y-0 py-4 "
      >
        <TabsList className="md:flex flex-col md:flex-row space-y-4 md:space-y-0 py-4 rounded-full bg-white h-14 overflow-auto  sm:overflow-visible no-visible-scrollbar hidden">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className=" text-gray-500 hover:text-gray-700 whitespace-nowrap cursor-pointer rounded-full py-2 px-1 font-medium text-sm md:flex-1 md:text-center"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {showMenu && (
          <div className="md:hidden">
            <TabsList className="flex flex-col space-y-2 py-2 bg-white h-full">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className=" text-gray-500 hover:text-gray-700 whitespace-nowrap cursor-pointer py-2 px-1 font-medium text-sm md:flex-1 md:text-center"
                  onClick={() => {
                    setActiveTab(tab.value);
                  }}
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        )}
        {tabs.map((tab, index) => (
          <TabsContent
            key={index}
            value={tab.value}
            className="px-4 md:px-6 py-8"
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>

      <Button variant="secondary">
        <Link href="/blogs">View All Blogs</Link>
      </Button>
    </div>
  );
}
