import FeaturedSection from "@/components/main/FeaturedSection";
import Hero from "@/components/main/Hero";
import LatestPosts from "@/components/main/LatestPosts";
import CallToAction from "@/components/sub/footer/CallToAction";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <LatestPosts />
      <CallToAction />
    </>
  );
};

export default Home;
