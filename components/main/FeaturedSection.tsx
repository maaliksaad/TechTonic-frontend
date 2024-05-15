import React from "react";
import { TabsComponent } from "../sub/tabs/TabComponent";

export function FeaturedSection() {
  return (
    <section className="grid min-h-screen place-items-center p-8 bg-black">
      <div className="space-y-2 ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Featured Posts
        </h2>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Check out our latest blog posts.
        </p>
      </div>
      <TabsComponent />
    </section>
  );
}

export default FeaturedSection;
