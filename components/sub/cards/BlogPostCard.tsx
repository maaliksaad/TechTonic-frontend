"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import { date } from "@/lib/utils";

const BlogPostCard = ({
  _id,
  title,
  content,
  category,
  image,
  user,
  createdAt,
}: Blog) => {
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  return (
    <motion.div
      className="block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="h-64 bg-cover bg-center relative mb-2 rounded-xl object-cover object-center"
        transition={{ duration: 0.3 }}
        variants={postBackgroundSizeAnimation}
        style={{ backgroundImage: `url("${image}")` }}
      />
      <p className="mt-3 text-sm text-gray-500">{category}</p>
      <h5 className="mt-3 text-xl font-bold transition duration-300 group-hover:text-primary-500">
        <Link href={`/blogs/${_id}`}>{title}</Link>
      </h5>
      <p className="mt-2 font-medium text-secondary-100 leading-loose text-sm">
        {content}
      </p>
      <div className="mt-6 flex items-center">
        {user && user.image && (
          <Image
            src={user.image}
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
            alt="User Image"
          />
        )}
        <div className="ml-4">
          <h6 className="font-semibold text-lg">{user.name}</h6>
          <p className="text-secondary-100 text-sm">{date(createdAt)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
