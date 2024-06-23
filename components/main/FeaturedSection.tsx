import React from "react";
import Tab from "../sub/tabs/tabs";

export function FeaturedSection() {
  return (
    <section className="grid min-h-screen place-items-center p-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Featured Posts
          </h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Check out our latest blog posts.
          </p>
        </div>
        <Tab />
      </div>
    </section>
  );
}

export default FeaturedSection;
